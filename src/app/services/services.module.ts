import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { RouterModule } from '@angular/router';
import { SERVICE_ROUTES } from './services.routing';

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(SERVICE_ROUTES)],
})
export class ServicesModule {}
