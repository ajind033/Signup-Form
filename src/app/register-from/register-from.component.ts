import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { SignupService } from '../signup.service'
@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {

  constructor(private route: Router, private service: SignupService) { }

  ngOnInit() {
    
      if (this.route.url == "/editDetails") {
      let userobj= this.service.getUser();
      this.detailsForm.patchValue({
        empid: userobj.empid,
        fname: userobj.fname,
        lname: userobj.lname,
        contact:userobj.contact,
        gender: userobj.gender,
        password:userobj.password,
        confirmPassword:userobj.confirmPassword

      })
    }
    else if(this.route.url == '/'){
      sessionStorage.clear();
    }
  }
  genders = ['Male','Female','Others'];
  detailsForm = new FormGroup({
    empid: new FormControl('', [Validators.minLength(4), Validators.pattern('[0-9]*'), Validators.required]),
    fname: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), , Validators.required]),
    lname: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    contact: new FormControl('', [Validators.minLength(10), Validators.pattern('[0-9 ]*'), Validators.required]),
    gender: new FormControl('Male', [ Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  get getDetail() {
    return this.detailsForm.controls;
  }
  confrimPass: boolean = true;
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
    this.service.setUser(this.detailsForm.value);
    sessionStorage.setItem('key','authanticate');
    this.route.navigate(["/userDetails"]);
  }

}
