import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { StarratingComponent } from './components/starrating/starrating.component';
import { TipOfPageComponent } from './components/tip-of-page/tip-of-page.component';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinpostComponent } from './components/linkedinpost/linkedinpost.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressbarComponent,
    StarratingComponent,
    TipOfPageComponent,
    ComponentDocumentationComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinpostComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    DirectivesModule,
    ServicesModule,
    PipesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
