import { Component } from '@angular/core';
import { BoardComponent } from "./board/board/board.component";

@Component({
  selector: 'app-root',
  imports: [BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe-PWA';
}
