import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;

  constructor(private app: AppService, private route: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  public email: string;
  public password: string;

  login(): any {
    this.data = {
      email: this.email,
      password: this.password
    }

    this.app.login(this.data).subscribe(
      (apiResponse) => {
        console.log(apiResponse);
        if (apiResponse.status === 200) {
          // set cookie
          this.cookieService.set('authToken', apiResponse.data.authToken),
            this.cookieService.set('receiverId', apiResponse.data.userDetails.userId),
            this.cookieService.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName),
            this.app.setUserInfoFromLocalStorage(apiResponse.data.userDetails)

          alert("login successful");
          setTimeout(() =>
            this.route.navigate(['chats']), 1000)
        }
      }
    )

  }
}
