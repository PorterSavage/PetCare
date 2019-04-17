import { Component} from '@angular/core';
import { AnimalService } from '../animal.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AnimalService,AuthenticationService]
})
export class NavComponent {
    user;
    private isLoggedIn: Boolean;
    private userName: String;
  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
  this.isLoggedIn = false;
} else {
  this.isLoggedIn = true;
  this.userName = user.displayName;
}
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    console.log(this.userName);
    this.userName=null;
      console.log(this.userName);
  }
}
