import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinpostComponent } from './linkedinpost.component';

describe('LinkedinpostComponent', () => {
  let component: LinkedinpostComponent;
  let fixture: ComponentFixture<LinkedinpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
