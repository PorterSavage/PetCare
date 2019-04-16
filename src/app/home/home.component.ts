import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AnimalService]
})
export class HomeComponent implements OnInit {
  animals: FirebaseListObservable<any[]>

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals();
  }
}
