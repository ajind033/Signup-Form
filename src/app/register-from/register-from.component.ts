import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../users';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {

  constructor( private route:Router) {}    

  ngOnInit() {
    if(window.location.pathname == "/editDetails"){      
      this.userobj= new Users();
      this.userobj = JSON.parse(localStorage.getItem("signupDetails"));
     }
     else if(window.location.pathname==""){
       this.userobj= new Users();
     }
     console.log(this.userobj)
  }
  userobj =new Users();
  detailsForm = new FormGroup({
    empid: new FormControl(this.userobj.empid, [Validators.minLength(4), Validators.pattern('[0-9]*'), Validators.required]),
    fname: new FormControl(this.userobj.fname, [Validators.pattern('[a-zA-Z ]*'), , Validators.required]),
    lname: new FormControl(this.userobj.lname, [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    contact: new FormControl(this.userobj.contact, [Validators.minLength(10), Validators.pattern('[0-9 ]*'), Validators.required]),
    gender: new FormControl(this.userobj.gender, [Validators.pattern('(M)|(F)|(m)|(f)'), Validators.required]),
    password: new FormControl(this.userobj.password, [Validators.minLength(8), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')]),
    confirmPassword: new FormControl(this.userobj.confirmPassword,[Validators.minLength(8), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')])
  });

  get getDetail() {
    return this.detailsForm.controls;
  }
  confrimPass: boolean = false;
  checkPass() {
    this.confrimPass = this.detailsForm.value.password === this.detailsForm.value.confirmPassword;
  }
  onSubmit() {
    localStorage.setItem("signupDetails", JSON.stringify(this.detailsForm.value));    
    this.route.navigate( ["/userDetails"]);
  }

}
