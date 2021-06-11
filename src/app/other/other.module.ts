import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { OTHER_ROUTE } from './other-routing';

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [CommonModule, ShareModule, RouterModule.forChild(OTHER_ROUTE)],
})
export class OtherModule {}
