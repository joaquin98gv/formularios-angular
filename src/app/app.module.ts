import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivoConImagenComponent } from './pages/reactivo-con-imagen/reactivo-con-imagen.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivoConImagenComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
