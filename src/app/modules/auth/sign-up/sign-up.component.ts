/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector     : 'forms-wizards',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AuthSignUpComponent implements OnInit
{
    horizontalStepperForm: FormGroup;
    verticalStepperForm: FormGroup;

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
                tipo_documento: ['', Validators.required],
                nro_documento : ['', Validators.required],
                nro_contacto : ['', Validators.required],
                direccion : ['', Validators.required],
                ubigeo : ['', Validators.required],
                // --------
                about    : ['']
            }),
            step3: this._formBuilder.group({
                email   : ['', [Validators.required, Validators.email]],
                byEmail          : this._formBuilder.group({
                    companyNews     : [true],
                    featuredProducts: [false],
                    messages        : [true]
                }),
                pushNotifications: ['everything', Validators.required]
            })
        });
    }
}
