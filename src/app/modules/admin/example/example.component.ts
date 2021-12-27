import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/core/services/auth/token-storage.service';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent  implements OnInit
{
    currentUser: any;

    constructor(private _token: TokenStorageService,
        private _router: Router,
        ) { }

    ngOnInit(): void {
        this.currentUser = this._token.getUser();
    }
}
