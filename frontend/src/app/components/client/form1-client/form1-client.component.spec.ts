import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1ClientComponent } from './form1-client.component';

describe('Form1ClientComponent', () => {
  let component: Form1ClientComponent;
  let fixture: ComponentFixture<Form1ClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form1ClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
