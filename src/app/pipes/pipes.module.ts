import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from '../share/pipes/truncate.pipe';
import { CreditCardPipePipe } from '../share/pipes/credit-card-pipe.pipe';
import { FlattenPipe } from '../share/pipes/flatten.pipe';
import { ComponentModule } from '../components/component.module';
import { CardComponent } from '../components/card/card.component';
import { ShareModule } from '../share/share.module';
import { FilterTermPipe } from '../share/pipes/filter-term.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardPipePipe,
    FlattenPipe,
    FilterTermPipe,
  ],
  imports: [CommonModule, ShareModule, RouterModule.forChild(PIPES_ROUTES)],
  exports: [TruncatePipe, CreditCardPipePipe, FlattenPipe],
})
export class PipesModule {}
