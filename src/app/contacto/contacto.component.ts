import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactoMailComponent } from '../contacto-mail/contacto-mail.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule, ContactoMailComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
