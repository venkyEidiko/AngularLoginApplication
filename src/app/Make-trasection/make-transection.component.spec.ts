import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransectionComponent } from './make-transection.component';

describe('MakeTransectionComponent', () => {
  let component: MakeTransectionComponent;
  let fixture: ComponentFixture<MakeTransectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
