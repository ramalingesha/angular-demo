import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSelectionOptionsComponent } from './questions-selection-options.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuestionsSelectionOptionsComponent', () => {
  let component: QuestionsSelectionOptionsComponent;
  let fixture: ComponentFixture<QuestionsSelectionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
