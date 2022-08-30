import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NovoItemComponent } from './novo-item/novo-item.component';
import { ItemComponent } from './item/item.component';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NovoItemComponent,
    ItemComponent,
    ListaItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
