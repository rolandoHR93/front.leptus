/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseValidators } from '@fuse/validators';
import { SignUpService } from './sign-up.service';

@Component({
    selector     : 'forms-wizards',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AuthSignUpComponent implements OnInit
{
    horizontalStepperForm: FormGroup;
    verticalStepperForm: FormGroup;
    resetPasswordForm: FormGroup;

    DatosInicialesRegistro?: any;
    departamentosIniciales?: any = [];
    sexosIniciales?: any;
    tipoDocPersonasIniciales?: any;
    tipoDocEmpresasIniciales?: any;

    provinciasIniciales?: any = [];
    distritosIniciales?: any= [];
    departamentoID: any = '00';

    provinciaPersonalDisabled: boolean = true;
    distritoPersonalDisabled: boolean = true;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _signUpService: SignUpService,
        )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Vertical stepper form
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                nombres : ['', Validators.required],
                apellido_paterno : ['', Validators.required],
                apellido_materno : ['', Validators.required],
                // --------
                tipo_documento : ['', Validators.required],
                nro_documento : ['', Validators.required],
                sexo : ['', Validators.required],
                fecha_nacimiento : ['', Validators.required],
                direccion : ['', Validators.required],
                // ubigeo : ['', Validators.required],
                departamento : ['', Validators.required],
                provincia : ['', Validators.required],
                distrito : ['', Validators.required],

            }),
            step2: this._formBuilder.group({
                razon_social: ['', Validators.required],
                nombre_comercial: ['', Validators.required],
                tipo_documento: ['1', Validators.required],
                nro_documento : ['', Validators.required],
                nro_contacto : ['', Validators.required],
                direccion : ['', Validators.required],
                departamento : ['', Validators.required],
                provincia : ['', Validators.required],
                distrito : ['', Validators.required],
                // --------
            }),

            step3: this._formBuilder.group({
                email   : [' ', [Validators.required, Validators.email]],
                password: ['', Validators.required],
                passwordConfirm : ['', Validators.required],
                // --------
            },
            {
                validators: FuseValidators.mustMatch('password', 'passwordConfirm')
            }
            ),
        }
        );
        this.getDatosIniciales();
    }

    getDatosIniciales(): void {
        this._signUpService.getDatosInicialesRegistroNuevo()
          .subscribe(
            (data) => {
              this.DatosInicialesRegistro =  data;
              this.departamentosIniciales = this.DatosInicialesRegistro.data.departamentos;
              this.sexosIniciales = this.DatosInicialesRegistro.data.sexos;
              this.tipoDocPersonasIniciales = this.DatosInicialesRegistro.data.TipoDocPersona;
              this.tipoDocEmpresasIniciales = this.DatosInicialesRegistro.data.TipoDocEmpresa;

              console.log(this.DatosInicialesRegistro);
            },
            (error) => {
              console.log(error);
            });
      }

    onChangeDepartmentPersonal(ob): void {
        this.departamentoID = ob.value;
        if(this.departamentoID !== '00'){
            this._signUpService.getProvinciasInicial(this.departamentoID)
            .subscribe(
                (data)=>{
                    this.provinciasIniciales = data;
                    this.provinciasIniciales = this.provinciasIniciales.data;
                    this.provinciaPersonalDisabled = false;
                },
                (error) =>{
                    console.log(error);
                }
            );
        }else{
            this.provinciasIniciales = [];
            this.distritosIniciales = [];
            this.provinciaPersonalDisabled = true;
            this.distritoPersonalDisabled = true;
        }
    }

    onChangeProvinciaPersonal(ob): void {
        const selectedDepartament = ob.value;
        if(selectedDepartament !== '00'){
            this._signUpService.getDistritosInicial(this.departamentoID,selectedDepartament)
            .subscribe(
                (data)=>{
                    this.distritosIniciales = data;
                    this.distritosIniciales = this.distritosIniciales.data;
                    this.distritoPersonalDisabled = false;
                },
                (error) =>{
                    console.log(error);
                }
            );
        }else{
            this.distritosIniciales = [];
            this.distritoPersonalDisabled = true;
        }
    }

    resetPassword(): void
    {
        // Return if the form is invalid
        if ( this.resetPasswordForm.invalid )
        {
            return;
        }

        // Disable the form
        this.resetPasswordForm.disable();

    }
}
