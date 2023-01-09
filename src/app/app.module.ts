import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from './app-routing.module';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenuModule} from 'primeng/menu';
import { CarruselService } from './service/carrusel.service';

import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { CalculadoraComponent } from './home/calculadora/calculadora/calculadora.component';
import { JavaComponent } from './home/java-thymeleaf/java/java.component';
import {PanelModule} from 'primeng/panel';
import { JavangularComponent } from './home/javangular/javangular.component';
import { GoComponent } from './home/go/go.component';
import { JavaspringComponent } from './javaspring/javaspring.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DolarComponent } from './dolar/dolar.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    JavaComponent,
    JavangularComponent,
    GoComponent,
    JavaspringComponent,
    PageNoFoundComponent,
    DolarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    MenuModule,   
    HttpClientModule,
    CarouselModule,
    CardModule,
    CheckboxModule,
    BreadcrumbModule,
    PanelModule,
    
  
    
  
  ],
  providers: [
    CarruselService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
