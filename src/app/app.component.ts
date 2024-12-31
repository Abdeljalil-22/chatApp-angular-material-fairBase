import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ChatListComponent } from "./chat-list/chat-list.component";
import { ChatWindowComponent } from "./chat-window/chat-window.component";
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatApp-angular-material-fairBase';
}
