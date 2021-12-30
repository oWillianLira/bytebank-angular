import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transactionsInfo: any[] = [];

  transfer($event) {
    const transaction = { ...$event, date: new Date() };
    this.transactionsInfo.push(transaction);
  }
}
