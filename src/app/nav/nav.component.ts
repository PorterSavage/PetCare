import { Component, OnInit} from '@angular/core';
import { AnimalService } from '../animal.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AnimalService,AuthenticationService]
})
export class NavComponent implements OnInit {
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

  ngOnInit() {
    $("#logOut").hide();
  }



  login() {
    this.authService.login();
    $("#logIn").hide();
    $("#logOut").show();
    // this.hideLink("#logIn");
    // this.showLink("#logOut");

  }

  logout() {
    this.authService.logout();
    console.log(this.userName);
    this.userName=null;
      console.log(this.userName);
      $("#logIn").show();
      $("#logOut").hide();
      // this.hideLink("#logOut");
      // this.showLink("#logIn");
  }

  // hideLink(selector: string) {
  //   $(`${selector}`).hide();
  //   //document.getElementById(selector).setAttribute("style", "display: none");
  // }

  // showLink(selector: string) {
  //   $(`${selector}`).show();
  //   //document.getElementById(selector).setAttribute("style", "display: inline");
  //
  // }
}
