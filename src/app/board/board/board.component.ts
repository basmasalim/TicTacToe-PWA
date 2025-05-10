import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { SquareComponent } from '../../square/square/square.component';

@Component({
  selector: 'app-board',
  imports: [SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  squares: WritableSignal<any[]> = signal([])
  xIsNext: WritableSignal<boolean> = signal(true);
  winner: WritableSignal<string> = signal('');

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares.set(Array(9).fill(null));
    this.winner.set('');
    this.xIsNext.set(true);
  }

  get player() {
    return this.xIsNext() ? 'X' : 'O';
  }

  getPlayer() {
    return this.xIsNext() ? 'X' : 'O';
  }

  makeMove(idx: number) {
    const currentSquares = [...this.squares()];
    if (!currentSquares[idx]) {
      currentSquares[idx] = this.getPlayer();
      this.squares.set(currentSquares);
      this.xIsNext.set(!this.xIsNext());
    }
    this.winner.set(this.calculateWinner());
  }

  calculateWinner() {
    const squares = this.squares(); // لازم تجيب القيمة الأول
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
