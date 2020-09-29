import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { UpdateScreenComponent } from './update-screen/update-screen.component';
import { LoginComponent } from './login/login.component';
import { ViewScreenComponent } from './view-screen/view-screen.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddScreenComponent,
    UpdateScreenComponent,
    LoginComponent,
    ViewScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
