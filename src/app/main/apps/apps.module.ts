import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


const routes = [
    {
        path        : 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule',

    },
    {
      path      : '**',
      redirectTo: 'auth'
      },
  ]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TranslateModule
    

  ],
  declarations: []
})
export class AppsModule { }
