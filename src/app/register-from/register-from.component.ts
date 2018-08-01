import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../users';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    if (window.location.pathname == "/editDetails") {
      this.userobj = JSON.parse(localStorage.getItem("signupDetails"));
      this.detailsForm.patchValue({
        empid: this.userobj.empid,
        fname: this.userobj.fname,
        lname: this.userobj.lname,
        contact: this.userobj.contact,
        gender: this.userobj.gender,
        password: this.userobj.password,
        confirmPassword: this.userobj.password

      })
    }
  }
  userobj = new Users();
  detailsForm = new FormGroup({
    empid: new FormControl(this.userobj.empid, [Validators.minLength(4), Validators.pattern('[0-9]*'), Validators.required]),
    fname: new FormControl(this.userobj.fname, [Validators.pattern('[a-zA-Z ]*'), , Validators.required]),
    lname: new FormControl(this.userobj.lname, [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    contact: new FormControl(this.userobj.contact, [Validators.minLength(10), Validators.pattern('[0-9 ]*'), Validators.required]),
    gender: new FormControl(this.userobj.gender, [Validators.pattern('(M)|(F)|(m)|(f)'), Validators.required]),
    password: new FormControl(this.userobj.password, [Validators.minLength(8), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')]),
    confirmPassword: new FormControl(this.userobj.password, [Validators.minLength(8), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')])
  });

  get getDetail() {
    return this.detailsForm.controls;
  } 
  confrimPass: boolean = false;
  checkPass() {
    this.confrimPass = this.detailsForm.value.password === this.detailsForm.value.confirmPassword;
  }
  togglePassFlag: boolean = false;
  togglePass(id) {
    if (this.togglePassFlag) {
      document.getElementById(id).setAttribute('type', 'password');
    }
    else {
      document.getElementById(id).setAttribute('type', 'text');
    }
    this.togglePassFlag = !this.togglePassFlag;
  }
  onSubmit() {
    localStorage.setItem("signupDetails", JSON.stringify(this.detailsForm.value));
    this.route.navigate(["/userDetails"]);
  }

}
