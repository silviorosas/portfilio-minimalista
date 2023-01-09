import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Carrusel } from 'src/app/models/carrusel';
import { CarruselService } from 'src/app/service/carrusel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    
})
export class HomeComponent implements OnInit {

  constructor(private service: CarruselService, private router:Router) { }
 
 //para breadcrums menu
 items: MenuItem[] = [];
 

 //creo array para guardar mis fotos
 carrusel: Carrusel[] = [];
//metodo trae el json array con fotos y  por la var carrusel le paso al html dicho array 

 

 traerFotos(){
  this.service.getCarrusel().then(carru => this.carrusel = carru);
 }

  ngOnInit() {
  //para breadcrumbs menu
  this.items = [
    {label:'Home',url:'/'},
    {label:'Proyectos',url:'#proy'},
    {label:'Mis stacks',url:'#stack'},
    {label:'Experiencia Laboral',url:'#lab'},
    {label:'Registrate',url:'#reg'},
    {label:'Contacto',url:'#cont'},       
    
];

   this.traerFotos();
 
  }

//para ir a pagina mercado liebre
btnClick() { 
window.open("https://tienda-liebre.netlify.app/index.html", "_blank")

 console.log("btnclick")
   }

  //para ir a pagina app guarda en BD Firebase
btnClickB() { 
  window.open("https://challenge-greydive-front.web.app/", "_blank")
  
   console.log("btnclick")
     }


  





 


 

}
