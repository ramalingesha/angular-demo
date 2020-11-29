import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInputOptionComponent } from './question-input-option.component';

describe('QuestionInputOptionComponent', () => {
  let component: QuestionInputOptionComponent;
  let fixture: ComponentFixture<QuestionInputOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionInputOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInputOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
