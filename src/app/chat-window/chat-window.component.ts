import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-chat-window',
  imports: [CommonModule ],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  chats: any[] = [];
  msgData: { nickname: string, message: string, updated_at: Date } = { nickname: '', message: '', updated_at: new Date() };

  constructor() { }

  ngOnInit(): void {
    // Example data, replace with your actual data fetching logic
    this.chats = [
      { nickname: 'User1', message: 'Hello!', updated_at: new Date() },
      { nickname: 'User2', message: 'Hi!', updated_at: new Date() }
    ];
  }

  logout(): void {
    // Logic for logging out the user
  }

  sendMessage(): void {
    // Logic for sending a message
  }
}