import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { newTransferComponent } from './newTransfer/newTransfer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, newTransferComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
