/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseValidators } from '@fuse/validators';

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

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder)
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
                nombres : ['a', Validators.required],
                apellido_paterno : ['a', Validators.required],
                apellido_materno : ['a', Validators.required],
                // --------
                tipo_documento : ['2', Validators.required],
                nro_documento : ['a', Validators.required],
                sexo : ['1', Validators.required],
                fecha_nacimiento : ['a', Validators.required],
                direccion : ['a', Validators.required],
                ubigeo : ['a', Validators.required],
            }),
            step2: this._formBuilder.group({
                razon_social: ['a', Validators.required],
                nombre_comercial: ['a', Validators.required],
                tipo_documento: ['1', Validators.required],
                nro_documento : ['a', Validators.required],
                nro_contacto : ['a', Validators.required],
                direccion : ['a', Validators.required],
                ubigeo : ['a', Validators.required],
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
