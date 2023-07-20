import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from 'src/utils/keycloakIntegrate';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    KeycloakAngularModule
  ],
  providers: [{
    provide: APP_INITIALIZER, 
    useFactory : initializer,
    deps:[KeycloakService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
