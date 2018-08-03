import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userData : any;
  constructor() { }
  setUser(userData):void{
    this.userData=userData;
  }
  getUser():any{
    return this.userData;
  }
}
