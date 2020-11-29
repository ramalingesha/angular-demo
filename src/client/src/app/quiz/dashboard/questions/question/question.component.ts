import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { OptionValueModel } from 'src/app/shared/model/option-value.model';
import { InputOptionType } from '../../model/input-option-type';
import { QuestionInputDataModel } from '../../model/question-input-data.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() questionInputModel!: QuestionInputDataModel;
  @Output() nextQuestionEvent = new EventEmitter<string | null>();

  private answer!: string | null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.answer = null;
  }

  onAnswerUpdate(answer: string | null): void {
    this.answer = answer;
  }

  onNext(): void {
    this.nextQuestionEvent.emit(this.answer);
  }
}
