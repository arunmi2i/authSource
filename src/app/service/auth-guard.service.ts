import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import { LoginService } from '../service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public loginService: LoginService, public router: Router) { }

  canActivate(): boolean {
    if(this.loginService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/onboarding']); 
  }
}
