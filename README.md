Angular Test + Github Demo
=======================


[See the Demo][demo]!
---------------------

This project serves as a progressive, working example of a demo
application consuming the [Github API][github] & using [Angular6+][angular].

![Screenshot](https://raw.githubusercontent.com/achrefhcini/AngularTest/master/screen1.png)

![Screenshot](https://raw.githubusercontent.com/achrefhcini/AngularTest/master/scrren2.png)


You can see my portfolio  [@Cv](https://achref.com)

Author
------

- [@achrefhcini][linkedin]


Running the Demo
----------------

    $ git clone git://github.com/achrefhcini/AngularTest.git
    $ cd AngularTest
    $ npm install
    $ ng serve

Now open [http://localhost:4200/app](http://localhost:4200/app).

Login example:
```ts
       {
            'id'    : '5725a680b3249760ea21de52',
            'name'  : 'Achref HCINI',
            'email' : 'achref.hcini@esprit.tn',
            'password' : 'Achref@123'
        },
        {
            'id'    : '5725a680606588342058356d',
            'name'  : 'Romain Ciaccafava',
            'email' : 'romain@jaguards.com',
            'password' : 'Romain@123' 
        }

```


Simple crud using [@angular-in-memory-web-api](https://github.com/angular/in-memory-web-api):
```ts
    // get User to check credentials
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

    // add user ( case fail sign in)
    addUser(user):Promise<any>
    {
        
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/users',{...user})
                .subscribe((response: any) => {
                    this.getUsers()
                    console.log(this.users)
                    resolve(response);
                }, reject);
        });

    }


```




You can then use `git checkout [BRANCH]` to see the app progress!


## Npm packages

* [material](https://material.io) - Material Design
* [angular-in-memory-web-api](https://github.com/angular/in-memory-web-api) - An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API.


License
-------

Copyright (c) 2018 Achref HCINI Licensed under the MIT license.


[demo]: https://achrefhcini.github.io/AngularTest/app
[linkedin]: https://www.linkedin.com/in/achref-hcini/





