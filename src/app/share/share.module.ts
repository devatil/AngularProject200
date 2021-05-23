import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from './pipes/filter-term.pipe';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class ShareModule {}
