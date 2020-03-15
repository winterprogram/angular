import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AppService } from '../app.service';
import { RouterModule, Router } from '@angular/router'
import { from } from 'rxjs';



@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'chats', component: ChatBoxComponent }
    ])
  ]
})
export class ChatModule { }
