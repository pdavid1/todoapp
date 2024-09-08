import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola a todos!';
  tasks = [
    'Instalar el Angular CLI',
    'Crear Proyecto',
    'Crear Componentes'
  ];
  name = signal('David');
  age = 25;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = {
    name: 'David',
    age: 25,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Holaaa')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
