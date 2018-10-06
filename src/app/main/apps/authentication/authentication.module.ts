import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import {  MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { checkLoginStep1 } from 'src/app/service/checkLoginStep1.service';
import { checkLoginStep2 } from '../../../service/checkLoginStep2.service';
const routes: Routes = [

  { 
    path: 'terms',
    component: TermsComponent,
    canActivate :[checkLoginStep2]
  },

  { 
     path: 'login',
     component: LoginComponent,
     resolve  : {
      users: AuthenticationService
    },
    canActivate :[checkLoginStep1]

  },

  {
    path      : '**',
    redirectTo: 'login'
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule, 
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  declarations: [LoginComponent, TermsComponent],
  providers:[AuthenticationService,checkLoginStep1,checkLoginStep2]
  
})
export class AuthenticationModule { }
