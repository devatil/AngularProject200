import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipOfPageComponent } from './tip-of-page.component';

describe('TipOfPageComponent', () => {
  let component: TipOfPageComponent;
  let fixture: ComponentFixture<TipOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipOfPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
