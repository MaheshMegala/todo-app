import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepipeComponent } from './datepipe.component';

describe('DatepipeComponent', () => {
  let component: DatepipeComponent;
  let fixture: ComponentFixture<DatepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
