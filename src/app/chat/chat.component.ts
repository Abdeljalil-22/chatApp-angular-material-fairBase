import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { WebSocketService } from '../services/web-socket.service';
// import { ChatMessageDto } from '../models/chatMessageDto';
import { CommonModule } from '@angular/common';
// import { ChatService } from "../services/chat.service";
interface Chat {
  name: string;
  textmssg: string;
}
@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  title = "shareit-ui";
  chatContent = "";
  chatId: string;
  chatData:Chat[] = [];
  connectionId: string;
  name: string;
  exception = false;
  // @Inject(ChatService) private chatservice: ChatService
  constructor() {
    this.chatId = "1";
    this. chatData = [];
    this. connectionId = "1";
    this. name= "test";
  }

  ngOnInit() {
    this.updateChat();
  }

  updateChat() {
    // setInterval(() => {
    //   if (this.chatId) {
    //     this.chatservice.getChatData(this.chatId).subscribe((res: any) => {
    //       this.chatData = [...res.contentList];
    //     });
    //   }
    // }, 1000);
  }

  sendMessage() {
    // this.exception = false;

    // if (this.chatId) {
    //   const payload = {
    //     uniqueCodeUrl: this.chatId,
    //     lastcontent: this.chatContent,
    //     name: this.name,
    //   };

    //   this.chatservice.putChatData(payload).subscribe((res: any) => {
    //     this.chatData = [...res.contentList];
    //   });
    //   this.chatContent = "";
    // } else {
    //   const payload = {
    //     lastcontent: this.chatContent,
    //     name: this.name,
    //   };
    //   this.chatservice.postChatData(payload).subscribe((res: any) => {
    //     this.chatId = res.uniqueCodeUrl;
    //     this.chatData = [...res.contentList];
    //   });
    //   this.chatContent = "";
    // }
  }

  startChat(id:any) {
    // this.chatId = id;
    // if (this.chatId) {
    //   this.chatservice.getChatData(this.chatId).subscribe(
    //     (res: any) => {
    //       this.chatId = res.uniqueCodeUrl;
    //       this.chatData = [...res.contentList];
    //     },
    //     (error) => {
    //       this.exception = true;
    //       this.chatId = null;

    //     }
    //   );
    // }
  }

  setName(name:any) {
    // this.exception = false;
    // this.name = name;
  }

  endChat() {
    // this.exception = false;
    // this.chatId = null;
    // this.chatData = [];
    // this.chatContent = "";
  }
}