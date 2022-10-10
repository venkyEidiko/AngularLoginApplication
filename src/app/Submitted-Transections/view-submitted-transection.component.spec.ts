import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmittedTransectionComponent } from './employee.component';

describe('ViewSubmittedTransectionComponent', () => {
  let component: ViewSubmittedTransectionComponent;
  let fixture: ComponentFixture<ViewSubmittedTransectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubmittedTransectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubmittedTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
