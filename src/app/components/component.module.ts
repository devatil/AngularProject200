import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { LinkedinpostComponent } from './linkedinpost/linkedinpost.component';
import { ModalComponent } from './modal/modal.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { LoaderComponent } from './loader/loader.component';
import { StarratingComponent } from './starrating/starrating.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    LinkedinpostComponent,
    ModalComponent,
    TwitterPostComponent,
    CreditCardInputComponent,
    LoaderComponent,
    StarratingComponent,
    ProgressbarComponent,
    AccordionComponent,
    QuoteComponent,
  ],
  imports: [CommonModule, ShareModule, FormsModule],
})
export class ComponentModule {}
