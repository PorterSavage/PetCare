import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/createAnimal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
  providers: [AnimalService]
})
export class PetFormComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  submitRequest(newOwnerFirstName: string, newOwnerLastName: string, newAnimalName: string, newSpecies: string, newGender: string, newStay: number, newDropOff: Date) {
    const newAnimal = new Animal(newOwnerFirstName, newOwnerLastName, newAnimalName, newSpecies, newGender, newStay, newDropOff);
    this.animalService.addAnimal(newAnimal);
  }
  
  ngOnInit() {
  }
}
