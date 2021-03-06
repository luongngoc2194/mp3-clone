import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidernavComponent } from './sidernav.component';

describe('SidernavComponent', () => {
  let component: SidernavComponent;
  let fixture: ComponentFixture<SidernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidernavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
