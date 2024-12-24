import { Component } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-chat-window',
  imports: [MatFormFieldModule,MatCardModule,MatToolbarModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent {
  messages = [
    { sender: 'received', text: 'Should we move it to next week?', time: '10:00 AM' },
    { sender: 'sent', text: 'Sure, whatever suits you 😊', time: '10:02 AM' },
    { sender: 'received', text: "I'll update the calendar.", time: '10:03 AM' },
    { sender: 'sent', text: 'Cool bro. Peace ✌️', time: '10:04 AM' },
  ];
}
