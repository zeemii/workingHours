import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkingHoursComponent } from './user-working-hours.component';

describe('UserWorkingHoursComponent', () => {
  let component: UserWorkingHoursComponent;
  let fixture: ComponentFixture<UserWorkingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkingHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
