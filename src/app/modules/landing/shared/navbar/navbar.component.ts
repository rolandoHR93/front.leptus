import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    currentUser: any;
    _authenticated: boolean = false;
    constructor(private _token: TokenStorageService)
    {
    }

  ngOnInit(): void {
    if(this._token.estaAutenticado()){
        this._authenticated = true;
    }
    this.currentUser = this._token.getUser();
  }

   toPrice(): void{

    // document.getElementById("precios_section").scrollIntoView({alignToTop: "false"});;

    document.getElementById("precios_section").scrollIntoView({behavior: "smooth"});
  }

}
