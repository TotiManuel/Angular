import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';

export const routes: Routes = [
  { path: 'Inicio', component: InicioComponent},
  { path: 'Proyectos', component: ProyectosComponent },
  {path: 'Experiencia', component:ExperienciaComponent},
  { path: 'Contacto', component: ContactoComponent},
  { path: 'Capacitaciones', component: CapacitacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
