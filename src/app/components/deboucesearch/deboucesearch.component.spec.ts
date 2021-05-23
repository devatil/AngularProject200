import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeboucesearchComponent } from './deboucesearch.component';

describe('DeboucesearchComponent', () => {
  let component: DeboucesearchComponent;
  let fixture: ComponentFixture<DeboucesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeboucesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeboucesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
