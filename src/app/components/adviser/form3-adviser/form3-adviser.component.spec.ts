import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3AdviserComponent } from './form3-adviser.component';

describe('Form3AdviserComponent', () => {
  let component: Form3AdviserComponent;
  let fixture: ComponentFixture<Form3AdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form3AdviserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form3AdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
