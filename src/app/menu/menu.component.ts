import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: 'menu.component.html',
  styleUrl: 'menu.component.css'
})
export class MenuComponent {
  Pagina = {
    Nombre: "JMM",
    Inicio: "Inicio",
    Proyectos: "Proyectos",
    Contacto: "Contacto",
    Blog: "Blog"
  };
}
