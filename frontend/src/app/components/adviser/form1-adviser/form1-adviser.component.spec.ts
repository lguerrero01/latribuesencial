import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1AdviserComponent } from './form1-adviser.component';

describe('Form1AdviserComponent', () => {
  let component: Form1AdviserComponent;
  let fixture: ComponentFixture<Form1AdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form1AdviserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1AdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
