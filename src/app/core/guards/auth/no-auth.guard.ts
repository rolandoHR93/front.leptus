import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { TokenStorageService } from 'app/core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanActivateChild {

    constructor(private _tokenService: TokenStorageService,
        private router: Router){
    }

    canActivate():  boolean  {
        // console.log(this.tokenService.estaAutenticado());

        if(!this._tokenService.estaAutenticado()){
          return true;
        }else{
          this.router.navigateByUrl('/dashboard');
          return false;
        }
    }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return true;
  }

}
