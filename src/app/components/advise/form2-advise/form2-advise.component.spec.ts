import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2AdviseComponent } from './form2-advise.component';

describe('Form2AdviseComponent', () => {
  let component: Form2AdviseComponent;
  let fixture: ComponentFixture<Form2AdviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form2AdviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2AdviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
