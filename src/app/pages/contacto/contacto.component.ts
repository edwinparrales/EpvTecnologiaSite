import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
  }
}
