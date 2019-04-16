import { Injectable } from '@angular/core';
import { Animal } from './models/createAnimal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animals: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.animals = database.list('animals');
  }

  getAnimals() {
    return this.animals;
  }

  addAnimal(newAnimal: Animal) {
    this.animals.push(newAnimal);
  }
}
