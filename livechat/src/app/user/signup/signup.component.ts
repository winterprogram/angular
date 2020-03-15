import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { RouterModule, Router } from '@angular/router'
import { error } from 'protractor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data: any;

  constructor(private app: AppService, public route: Router) { 

  }

  ngOnInit(): void {
  }

  public firstName: string;
  public lastName: string;
  public email: string;
  public mobileNumber: string;
  public password: string;
  public apiKey: any;

// public d;
  public signup( ): any {
    this.data = {
      fistName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      mobileNumber: this.mobileNumber,
      password: this.password,
      apiKey: this.apiKey

    }
    // firstName: this.firstName
    this.app.signup(this.data).subscribe((apiResponse) => {
      console.log(apiResponse);

      if (apiResponse.status === 200) {
        alert("signup successful");
        setTimeout(() =>
          this.route.navigate(['login']), 1000)
      }else{
        alert("Error is login")
      }


    }
    );
  }
}

