import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/createAnimal.model';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  constructor() { }

  submitRequest(newOwnerFirstName: string, newOwnerLastName: string, newAnimalName: string, newSpecies: string, newGender: string, newStay: number, newDropOff: Date) {
    const newAnimal = new Animal(newOwnerFirstName, newOwnerLastName, newAnimalName, newSpecies, newGender, newStay, newDropOff);
    console.log(newAnimal);
  }
  
  ngOnInit() {
  }
}
