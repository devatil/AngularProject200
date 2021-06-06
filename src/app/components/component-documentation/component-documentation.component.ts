import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item';
import { LoaderType } from '../loader/models/loader-types.enums';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
  progressbar = 25;

  loaderType = LoaderType.Circular;

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

  tabs: { title: string; active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];

  selectTab = 0;

  debounceExampleMetod(value: string) {
    console.log(value);
  }
}
