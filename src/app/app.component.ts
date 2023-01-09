import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  items: MenuItem[] = [];

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


    }
}
