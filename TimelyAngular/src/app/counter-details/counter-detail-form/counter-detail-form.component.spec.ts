import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailFormComponent } from './counter-detail-form.component';

describe('CounterDetailFormComponent', () => {
  let component: CounterDetailFormComponent;
  let fixture: ComponentFixture<CounterDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
