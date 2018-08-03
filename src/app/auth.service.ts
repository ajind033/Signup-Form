import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { SignupService } from './signup.service'
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  canActivate(){
  if(!sessionStorage.getItem('key')){
    this.router.navigate(['/'])
  }
     
    return true;
  }
  constructor(private signupSer:SignupService, private router: Router) { }
}
