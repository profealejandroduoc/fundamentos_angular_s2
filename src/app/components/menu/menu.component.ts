import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  rutas=[
    {
      nombre:'Home',
      destino:'/home'
    },
    {
      nombre:'Contacto',
      destino:'/contacto'
    },
    {
      nombre:'Quienes',
      destino:'/quienes'
    },
    {
      nombre:'Ayuda',
      destino:'/ayuda'
    },
  ]
}
