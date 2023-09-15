import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostlistComponent } from './postlist/postlist.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { Aboutus1Component } from './aboutus1/aboutus1.component';

var routes:Routes = [
  {path : "home",component:HomeComponent},
  {path : "aboutus",component : AboutusComponent},
  {path : "services",component:ServicesComponent},
  {path : " ",component:HomeComponent,pathMatch:"full"},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    Assignment1Component,
    NavbarComponent,
    PostlistComponent,
    Aboutus1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
