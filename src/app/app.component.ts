import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profileForm = new FormGroup({
    empid: new FormControl('', [Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*'), Validators.required]),
    fname: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), , Validators.required]),
    lname: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    contact: new FormControl('', [ Validators.maxLength(10), Validators.pattern('[0-9 ]*'), Validators.required]),
    gender: new FormControl('', [Validators.pattern('(M)|(F)|(m)|(f)'), Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(16), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{8,16})')]),
    cpassword: new FormControl('', [Validators.minLength(8), Validators.maxLength(16), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{8,16})')])
  });
  details: string;
  onSubmit() {
    this.details = JSON.stringify(this.profileForm.value);
    localStorage.setItem("signupDetails", this.details);
  }

}
