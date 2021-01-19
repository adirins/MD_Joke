import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jokes = [
    {
    question: "kapec?",
    answer: "tapec!"
    }
  ]
  removeJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
  addFunnyJoke(item: { question: string; answer: string; }): void {
    this.jokes.push(item);
  }
}
