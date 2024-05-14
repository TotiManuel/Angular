import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  navigateToProyectos() {
    this.router.navigate(['/Proyectos']);
  }
  navigateToBlog() {
    this.router.navigate(['/Blog']);
  }
  navigateToContacto() {
    this.router.navigate(["/Contacto"]);
  }
  navigateToInicio(){
    this.router.navigate(["/Inicio"])
  }
}




