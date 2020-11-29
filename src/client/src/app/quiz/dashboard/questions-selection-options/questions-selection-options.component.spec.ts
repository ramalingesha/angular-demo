import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSelectionOptionsComponent } from './questions-selection-options.component';

describe('QuestionsSelectionOptionsComponent', () => {
  let component: QuestionsSelectionOptionsComponent;
  let fixture: ComponentFixture<QuestionsSelectionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsSelectionOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSelectionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
