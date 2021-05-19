import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { DRV_ROUTES } from './directives.routing';

@NgModule({
  declarations: [DirectiveDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(DRV_ROUTES)],
})
export class DirectivesModule {}
