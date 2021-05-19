import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
  progressbar = 25;

  accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exaples Content1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exaples Content2',
      isExpanded: false,
    },
  ];
}