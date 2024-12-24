import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-chat-list',
  imports: [MatListModule,MatIconModule,MatToolbarModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent {
  hatList = [
    { name: 'Annie Carpenter', preview: 'Did you talk to Mark?', time: '10:37 AM' },
    { name: 'Mark Appleyard', preview: "Lunch tomorrow. I'll call you", time: '2:31 AM' },
    { name: 'Bradley Stokes', preview: 'Sent a photo', time: '2 Dec' },
    // Add more sample chats here
  ];

  selectChat(chat: any) {
    console.log('Selected Chat:', chat);
  }
}
