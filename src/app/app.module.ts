import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { newTransferComponent } from './newTransfer/newTransfer.component';
import { FormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [AppComponent, newTransferComponent, TransactionsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
