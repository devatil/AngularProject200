import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './models/loader-types.enums';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input()
  isloader = false;

  @Input()
  loaderType: LoaderType = LoaderType.Circular;

  LoaderType = LoaderType;

  get loading() {
    return `Loading${this.loadingPeriods}`;
  }

  loadingPeriods = '.';

  ngOnInit() {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  updateLoaderPeriods() {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.';
          currentStep = 0;
          break;
      }
    }, 500);
  }
}
