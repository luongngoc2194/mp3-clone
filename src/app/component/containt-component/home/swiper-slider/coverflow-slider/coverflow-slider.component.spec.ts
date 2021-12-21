import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverflowSliderComponent } from './coverflow-slider.component';

describe('CoverflowSliderComponent', () => {
  let component: CoverflowSliderComponent;
  let fixture: ComponentFixture<CoverflowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverflowSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverflowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
