import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket.service';
import { AppService } from '../../app.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  public receiverId: any;
  public authToken: any;
  public receiverName: any;
  public userInfo: any;
  public userList: any = [];
  public disconnectedSocket: boolean;
  userId: string;

  constructor(public cookie: CookieService, public app: AppService, public socket: SocketService, private router: Router) {
    this.receiverId = this.cookie.get('receiverId');
    this.receiverName = this.cookie.get('receiverName');
    this.userId = this.cookie.get('userId');
    this.authToken = this.cookie.get('authToken');
  }


  ngOnInit(): void {


    this.authToken = this.cookie.get('authToken');
    this.userInfo = this.app.getUserInfoFromLocalStorage();
    this.checkStatus();
    this.verifyUserConfirmation();
    this.getOnlineUserList();

    // this.disconnectedSocket = false;


  }
  private checkStatus = () => {
    if (this.authToken === undefined || this.authToken === '' || this.authToken === null) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }

  public verifyUserConfirmation = () => {
    this.socket.verifyUser().subscribe((data) => {
      this.disconnectedSocket = false;
      this.socket.SetUser(this.authToken);
      console.log(this.authToken)
      this.getOnlineUserList();
    })
  }

  public getOnlineUserList = () => {
    this.socket.onlineUserList().subscribe((userList) => {
      this.userList = [];
      for (let x in userList) {
        let temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'chatting': false }
        this.userList.push(temp)
      }
      console.log(userList)

    })

  }


}
