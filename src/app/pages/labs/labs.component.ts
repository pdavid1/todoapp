import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola a todos!';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear Servicio'
  ]);
  name = signal('David');
  age = 25;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = signal({
    name: 'Paul',
    age: 15,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  });

  colorCtrl = new FormControl();

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
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

  changeAge(event: Event){
    const input =event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    });
  }

  changeName(event: Event){
    const input =event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    });
  }
}
