import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/Menu';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    LoginComponent,
    SuccessComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackButtonDisableModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, 
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
