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
    departamentosIniciales?: any;
    sexosIniciales?: any;
    tipoDocPersonasIniciales?: any;
    tipoDocEmpresasIniciales?: any;
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
                ubigeo : ['', Validators.required],
            }),
            step2: this._formBuilder.group({
                razon_social: ['', Validators.required],
                nombre_comercial: ['', Validators.required],
                tipo_documento: ['1', Validators.required],
                nro_documento : ['', Validators.required],
                nro_contacto : ['', Validators.required],
                direccion : ['', Validators.required],
                ubigeo : ['', Validators.required],
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
        this.getServicesList();
    }

    getServicesList(): void {
        this._signUpService.getDatosInicialesRegistroNuevo()
          .subscribe(
            (data) => {
              this.DatosInicialesRegistro =  data;
              this.departamentosIniciales = this.DatosInicialesRegistro.data.departamentos;
              this.sexosIniciales = this.DatosInicialesRegistro.data.sexos;
              this.tipoDocPersonasIniciales = this.DatosInicialesRegistro.data.TipoDocPersona;
              this.tipoDocEmpresasIniciales = this.DatosInicialesRegistro.data.TipoDocEmpresa;

              console.log(this.departamentosIniciales);
            },
            (error) => {
              console.log(error);
            });
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
