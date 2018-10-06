import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})

export class TermsComponent implements OnInit {
  termForm: FormGroup;
  testDisabled=true;
   /**
     * Constructor
     *
     * @param {Router} _router
     * @param {FormBuilder} _formBuilder
     * @param {MatSnackBar} _matSnackBar
     */
  constructor
  (
    private _router:Router,
    private _formBuilder: FormBuilder,
    private _matSnackBar:MatSnackBar
  ) 
  {
  }

  ngOnInit():void
  {
    this.termForm = this._formBuilder.group
    ({
        acceptTerm:  ['', Validators.required]
    });
  }

  // listen to event from scroll elemnt
  @HostListener('scroll', ['$event'])
  // define function to excute when event ( our example scroll) start
  onTermsScroll() {

    // get position of scroll ( position top + heigh of scroll) and we add 10px to confirm
  let pos = (document.getElementById("terms").scrollTop) + document.getElementById("terms").offsetHeight +10 ;
  let max = document.getElementById("terms").scrollHeight;
 
  // if scroll postion > max of scroll elemnt avail ( height ) => enable checkbox
  if(pos > max )   {
    this.testDisabled=false;
  }

  }

  // validete on submit form and showing message
  validate(){
    this._matSnackBar.open('Vous avez bien validé votre connexion', '', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  // back to login page , in this case i use localstorage for canactivate 
  logout(){
    this._matSnackBar.open('Déconnection ...', '', {
      duration: 2500,
      horizontalPosition: 'left',
        });
    localStorage.clear()
     this._router.navigate(['app/auth/login'])
  }

}
