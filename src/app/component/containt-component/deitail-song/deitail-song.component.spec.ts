import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeitailSongComponent } from './deitail-song.component';

describe('DeitailSongComponent', () => {
  let component: DeitailSongComponent;
  let fixture: ComponentFixture<DeitailSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeitailSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeitailSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
