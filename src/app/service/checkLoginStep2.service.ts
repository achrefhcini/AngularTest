import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class checkLoginStep2 implements CanActivate {

    constructor(private _router:Router){
        
    }
    canActivate(){

         // redirect to step 1 a user who try to validate step 2 and he fail  the step 1
        if((localStorage.getItem('connected')=="false")||(!localStorage.getItem('connected'))){
            this._router.navigate(['app/auth/login'])
            return false
        }
        // stay step 2
       return true
    }
} 