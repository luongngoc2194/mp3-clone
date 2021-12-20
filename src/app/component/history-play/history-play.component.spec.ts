import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPlayComponent } from './history-play.component';

describe('HistoryPlayComponent', () => {
  let component: HistoryPlayComponent;
  let fixture: ComponentFixture<HistoryPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
