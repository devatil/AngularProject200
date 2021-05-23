import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { DRV_ROUTES } from './directives.routing';
import { ShareModule } from '../share/share.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';

@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective],
  imports: [CommonModule, ShareModule, RouterModule.forChild(DRV_ROUTES)],
})
export class DirectivesModule {}
