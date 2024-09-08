import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  welcome = 'Hola a todos!';
  tasks = [
    'Instalar el Angular CLI',
    'Crear Proyecto',
    'Crear Componentes'
  ]
}
