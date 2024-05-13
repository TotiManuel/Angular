import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  { path: 'Proyectos', component: ProyectosComponent },
  {path: 'Blog', component:BlogComponent},
  { path: 'Contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
