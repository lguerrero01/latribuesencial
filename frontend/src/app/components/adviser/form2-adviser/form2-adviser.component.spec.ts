import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2AdviserComponent } from './form2-adviser.component';

describe('Form2AdviserComponent', () => {
  let component: Form2AdviserComponent;
  let fixture: ComponentFixture<Form2AdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form2AdviserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2AdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
