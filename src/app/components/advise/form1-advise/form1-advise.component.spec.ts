import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1AdviseComponent } from './form1-advise.component';

describe('Form1AdviseComponent', () => {
  let component: Form1AdviseComponent;
  let fixture: ComponentFixture<Form1AdviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form1AdviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1AdviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
