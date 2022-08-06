import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentViewComponent } from './time-spent-view.component';

describe('TimeSpentViewComponent', () => {
  let component: TimeSpentViewComponent;
  let fixture: ComponentFixture<TimeSpentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSpentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSpentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
