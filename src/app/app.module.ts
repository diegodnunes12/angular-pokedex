import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RollOnScrollDirective } from './directives/roll-on-scroll.directive';
import { AppRoutingModule } from './app-routing.module';
import { InformationComponent } from './modules/pokedex/views/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    RollOnScrollDirective,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }