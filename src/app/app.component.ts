import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatListComponent } from "./chat-list/chat-list.component";
import { ChatWindowComponent } from "./chat-window/chat-window.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatListComponent, ChatWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatApp-angular-material-fairBase';
}
