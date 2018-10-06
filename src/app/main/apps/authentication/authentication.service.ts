import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable()
export class AuthenticationService  implements Resolve<any>
{
    
    users:any[];
    messages:any[];

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
    }

      /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getUsers(),this.getMessages()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

     /**
     * Get Users
     *
     * @returns {Promise<any>}
     */    
    getUsers():Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/users')
                .subscribe((response: any) => {
                    this.users=response;
                    resolve(response);
                }, reject);
        });

    }

     /**
     * add User
     *
     * @returns {Promise<any>}
     */
    addUser(user):Promise<any>
    {
        
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/users',{...user})
                .subscribe((response: any) => {
                    console.log(response)
                    this.getUsers()
                    console.log(this.users)

                    resolve(response);
                }, reject);
        });

    }


       /**
     * Get Messages
     *
     * @returns {Promise<any>}
     */    
    getMessages():Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/messages')
                .subscribe((response: any) => {
                    this.messages=response;
                    resolve(response);
                }, reject);
        });

    }

}