import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { NoticiasComponent } from './noticias/noticias.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuComponent, NoticiasComponent]
})

export class AppComponent {
  title = 'JMM';
  numero = 1;
  decrementar(){
    this.numero--;
  }
  aumentar(){
    this.numero++;
  }
}
