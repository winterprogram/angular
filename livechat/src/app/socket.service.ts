import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
 
  private url: "https://chatapi.edwisor.com"
  private socket;
  constructor(public http: HttpClient, public Cookie: CookieService) {
    this.socket = io(this.url);
  }

  public verifyUser = () => {

    return Observable.create((observer) => {

      this.socket.on('verifyUser', (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end verifyUser

  public onlineUserList = () => {

    return Observable.create((observer) => {

      this.socket.on("online-user-list", (userList) => {

        observer.next(userList);

      }); // end Socket

    }); // end Observable

  } // end onlineUserList


  public disconnectedSocket = () => {

    return Observable.create((observer) => {

      this.socket.on("disconnect", () => {

        observer.next();

      }); // end Socket

    }) // end Observable
  }

  public SetUser = (authToken) => {
    this.socket.emit('set-user', authToken)
  }
  
  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}
