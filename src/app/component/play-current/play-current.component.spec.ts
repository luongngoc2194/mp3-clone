import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCurrentComponent } from './play-current.component';

describe('PlayCurrentComponent', () => {
  let component: PlayCurrentComponent;
  let fixture: ComponentFixture<PlayCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
