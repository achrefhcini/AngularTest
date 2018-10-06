import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './fake-db/fake-db.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
      path        : 'app',
      loadChildren: './main/apps/apps.module#AppsModule'
  },
  {
    path      : '**',
    redirectTo: 'app'
    },

  
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
        HttpModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
