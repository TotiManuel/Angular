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
    Capacitaciones: "Capacitaciones",
    Experiencia: "Experiencia"
  };

  constructor(private router: Router) {}

  navigateToProyectos() {
    this.router.navigate(['/Proyectos']);
  }
  navigateToExperiencia() {
    this.router.navigate(['/Experiencia']);
  }
  navigateToCapacitaciones() {
    this.router.navigate(['/Capacitaciones']);
  }
  navigateToContacto() {
    this.router.navigate(["/Contacto"]);
  }
  navigateToInicio(){
    this.router.navigate(["/Inicio"])
  }
}




