import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { StarratingComponent } from './components/starrating/starrating.component';
import { TipOfPageComponent } from './components/tip-of-page/tip-of-page.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, CardComponent, AccordionComponent, ProgressbarComponent, StarratingComponent, TipOfPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
