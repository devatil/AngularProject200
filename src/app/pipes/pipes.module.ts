import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { CardComponent } from '../components/card/card.component';
import { TruncatePipe } from '../share/pipes/truncate.pipe';
import { CreditCardPipePipe } from '../share/pipes/credit-card-pipe.pipe';
import { FlattenPipe } from '../share/pipes/flatten.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    CardComponent,
    TruncatePipe,
    CreditCardPipePipe,
    FlattenPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(PIPES_ROUTES)],
  exports: [CardComponent, TruncatePipe, CreditCardPipePipe, FlattenPipe],
})
export class PipesModule {}
