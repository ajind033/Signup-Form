import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterFromComponent } from './register-from/register-from.component';
import { DetailsTableComponent } from './details-table/details-table.component';

import { SignupService } from './signup.service';
import{ AuthService } from './auth.service';
import {RouterModule, Routes} from '@angular/router';

const appRoutes : Routes = [
  {
    path : "",
    component : RegisterFromComponent
  },{
  path : "userDetails",
  component : DetailsTableComponent,
  canActivate: [AuthService]
  },{
    path : "editDetails",
    component : RegisterFromComponent,
    canActivate: [AuthService]
    }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterFromComponent,
    DetailsTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule 
  ],
  providers: [
    SignupService,
    AuthService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
