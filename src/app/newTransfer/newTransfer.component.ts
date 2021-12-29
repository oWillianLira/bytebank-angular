import { Component } from '@angular/core';

@Component({
  selector: 'app-newTransfer',
  templateUrl: './newTransfer.component.html',
  styleUrls: ['./newTransfer.component.scss'],
})
export class newTransferComponent {
  value: number;
  destination: string;

  transfer() {
    window.alert(`Transfering $${this.value} to ${this.destination}`);
  }
}
