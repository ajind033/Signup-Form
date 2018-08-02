import { Injectable } from '@angular/core';
import {Users} from './users'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userData : Users;
  constructor() { }
  setUser(userData):void{
    this.userData=userData;
  }
  getUser():Users{
    return this.userData;
  }
}
