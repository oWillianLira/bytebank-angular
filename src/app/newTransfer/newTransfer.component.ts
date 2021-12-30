import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newTransfer',
  templateUrl: './newTransfer.component.html',
  styleUrls: ['./newTransfer.component.scss'],
})
export class newTransferComponent {
  @Output() whenTransferring = new EventEmitter<any>();

  value: number = 0;
  destination: string;

  transfer() {
    console.log(`Transfering $${this.value} to ${this.destination}`);

    this.whenTransferring.emit({
      value: this.value,
      destination: this.destination,
    });

    this.clean();
  }

  clean() {
    this.value = 0;
    this.destination = '';
  }
}
