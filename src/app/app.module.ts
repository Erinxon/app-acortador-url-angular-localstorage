import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListaUrlComponent } from './Components/lista-url/lista-url.component';
import { GenerarUrlComponent } from './Components/generar-url/generar-url.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Services/jwt.interceptor';
import { LoandingComponent } from './Components/loanding/loanding.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaUrlComponent,
    GenerarUrlComponent,
    LoandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
