import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { ActivateAccountService } from './activate-account.service';
import { finalize } from 'rxjs';

@Component({
    selector     : 'auth-confirmation-required',
    templateUrl  : './activate-account.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ActivateAccountComponent implements OnInit{

    tokenRecibido: any = '0';
    emailRecibido: any = '';
    /**
     * Constructor
     */
   constructor(
        private _activateAccountService: ActivateAccountService,
        private _route: ActivatedRoute
   )
   {
   }

   ngOnInit(): void
   {
        this.emailRecibido = this._route.snapshot.params['email'];
        this.tokenRecibido = this._route.snapshot.params['token'];
        this._activateAccountService.activateAccount(this.emailRecibido, this.tokenRecibido)
        .pipe(
            finalize(() => {

            })
        ).subscribe(
            (response) => {

                // Set the alert
                 alert('Cuenta Activada!');
            },
            (response) => {

                // Set the alert
                alert('Ocurrio un Error!');
                console.log(response);
            }
        );

   }
}
