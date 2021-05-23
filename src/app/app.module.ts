import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TipOfPageComponent } from './components/tip-of-page/tip-of-page.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, TipOfPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    DirectivesModule,
    ServicesModule,
    FormsModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
