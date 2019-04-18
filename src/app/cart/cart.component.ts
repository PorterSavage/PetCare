import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [AnimalService,AuthenticationService]
})
export class CartComponent implements OnInit {
  animals: FirebaseListObservable<any[]>

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals();
  }

}
