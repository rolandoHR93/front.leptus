import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'app/core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private _tokenService: TokenStorageService,
        private router: Router){
    }

    // canActivate2(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     return true;
    // }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;

    }

    canActivate():  boolean  {
        // console.log(this._tokenService.estaAutenticado());

        if(this._tokenService.estaAutenticado()){
          return true;
        }else{
          this.router.navigateByUrl('/sign-in');
          return false;
        }
    }

}
