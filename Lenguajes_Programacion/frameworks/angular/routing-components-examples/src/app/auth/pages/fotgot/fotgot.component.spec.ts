import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotgotComponent } from './fotgot.component';

describe('FotgotComponent', () => {
  let component: FotgotComponent;
  let fixture: ComponentFixture<FotgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotgotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
