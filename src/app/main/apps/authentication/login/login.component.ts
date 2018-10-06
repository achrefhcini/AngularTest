import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {   MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;
  users:any[];
  message:any;
  
    /**
     * Constructor
     *
     * @param {formBuilder} _formBuilder
     * @param {Router} _router
     * @param {MatSnackBar} _matSnackBar
     * @param {AuthenticationService} _authService
     */

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService:AuthenticationService,
    private _matSnackBar:MatSnackBar
    ) 
    {
      // get users and messages from auth service ( )
      this.users=this._authService.users;
      this.message=this._authService.messages[0].text;

      //  Intial form errors
      this.loginFormErrors = {
      email: {},
      password: {}
      };


  }

  ngOnInit():void
  {       
    
    
    this.loginForm = this._formBuilder.group
    ({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
     });


    // callback for check Error evry type or change
    this.loginForm.valueChanges.subscribe(() =>
    {

        this.onLoginFormValuesChanged();
    });
  }


  onLoginFormValuesChanged()
  {

    for (const field in this.loginFormErrors)
    {

      if (!this.loginFormErrors.hasOwnProperty(field)) 
      {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) 
      {
        this.loginFormErrors[field] = control.errors;
      }

    }

  }

  // Submit login Form and compare field with saved users ( which are loaded from fake db using angular-in-memory-web-api ) 

  login(f){

    
    
    let connected=false;
    let nameConnected=""

    this.users.forEach((user)=>{

      // when data are the same set up localstorage , give a pop validation and navigate to the second step
      if((f.value.email==user.email)&&(f.value.password==user.password)){
        connected=true
        nameConnected = user.name ;
        localStorage.setItem("connected","true");
        this._matSnackBar.open(this.message+" "+nameConnected, '', {
          duration: 2500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this._router.navigate(['app/auth/terms'])

      }
    
    })

    // if not the case , show error message ( pop up ) and a new account added using post
    if((!connected)){
      this._matSnackBar.open('Votre connexion a été echoué  ', '', {
        duration: 2500,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      const newUser = {
         id : Math.random().toString(36).slice(-8),
         name : " New User",
         email : f.value.email,
         password : f.value.password
      }
      console.log(newUser)
      this._authService.addUser(newUser).then(()=>{
       setTimeout(()=>{
        this._matSnackBar.open('Nouveau compte à été bien ajouté .... ', '', {
          duration: 2500,
          horizontalPosition: 'left',
        });
       },1500)
      
      }).catch((e)=>{
      })
    }
  }

}


