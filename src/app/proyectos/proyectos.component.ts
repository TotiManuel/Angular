import { Component } from '@angular/core';
import { NoticiasComponent } from '../noticias/noticias.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: '../noticias/noticias.component.html',
  styleUrl: '../noticias/noticias.component.css',
  imports: [RouterModule, NoticiasComponent]
})

export class ProyectosComponent {

}
