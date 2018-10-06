import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Http } from "@angular/http";

@Injectable()
export class checkLoginStep1 implements CanActivate {

    constructor(private _router:Router)
    {   
    }

    canActivate()
    {
        // redirect to step 2 if user succesful pass the step 1 
         if (localStorage.getItem('connected')=="true") {
            this._router.navigate(['app/auth/terms'])
            return false

        }
         // else stay on the same route ( step 2)
        return true
    }
}
