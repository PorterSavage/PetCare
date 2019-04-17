import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AnimalService,AuthenticationService]
})
export class HomeComponent implements OnInit {
  animals: FirebaseListObservable<any[]>

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals();
  }

}
