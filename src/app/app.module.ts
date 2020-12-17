import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Backendless from 'backendless';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
Backendless.initApp(environment.backendless.APP_ID, environment.backendless.API_KEY);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}