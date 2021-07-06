import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardsModule } from './cards/cards.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
