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
import { ToggleComponent } from './toggle/toggle.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DeboucesearchComponent } from './deboucesearch/deboucesearch.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { PipesModule } from '../pipes/pipes.module';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

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
    ToggleComponent,
    RichTextViewerComponent,
    DeboucesearchComponent,
    SearchlistComponent,
    CounterComponent,
    SimpleTableComponent,
  ],
  imports: [CommonModule, ShareModule, PipesModule, FormsModule],
})
export class ComponentModule {}
