import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { JavangularComponent } from './home/javangular/javangular.component';
import { GoComponent } from './home/go/go.component';
import { JavaspringComponent } from './javaspring/javaspring.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DolarComponent } from './dolar/dolar.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },   
  { path: 'javangular', component: JavangularComponent },
  { path: 'go', component: GoComponent },
  { path: 'javaspring', component: JavaspringComponent},
  { path: 'dolar', component: DolarComponent},
  { path: 'nofound', component: PageNoFoundComponent},
  { path: '**', component: PageNoFoundComponent},
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }