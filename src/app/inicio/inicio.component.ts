import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitaComponent } from '../cita/cita.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { CapacitacionesComponent } from '../capacitaciones/capacitaciones.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CitaComponent, NoticiasComponent, CapacitacionesComponent, ExperienciaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

