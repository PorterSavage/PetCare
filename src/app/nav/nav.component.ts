import { Component, OnInit} from '@angular/core';
import { AnimalService } from '../animal.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AnimalService, AuthenticationService]
})
export class NavComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  //let FB: any;

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
    // (window as any).fbAsyncInit = function() {
    //   FB.init({
    //     appId      : '394951114363257',
    //     cookie     : true,
    //     xfbml      : true,
    //     version    : 'v3.1'
    //   });
    //   FB.AppEvents.logPageView();
    // };
    //
    // (function(d, s, id){
    //    var js, fjs = d.getElementsByTagName(s)[0];
    //    if (d.getElementById(id)) {return;}
    //    js = d.createElement(s); js.id = id;
    //    js.src = "https://connect.facebook.net/en_US/sdk.js";
    //    fjs.parentNode.insertBefore(js, fjs);
    //  }(document, 'script', 'facebook-jssdk'));
  }

//   submitLogin(){
//         console.log("submit login to facebook");
//         // FB.login();
//         FB.login((response)=>
//             {
//               console.log('submitLogin',response);
//               if (response.authResponse)
//               {
//                 //login success
//                 //login success code here
//                 //redirect to home page
//                }
//                else
//                {
//                console.log('User login failed');
//              }
//           });
//       }
//
//       /* make the API call */
// FB.api(
//     "/{user-id}/",
//     function (response) {
//       if (response && !response.error) {
//         /* handle the result */
//       }
//     }
// );

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
