import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OptionValueModel } from 'src/app/shared/model/option-value.model';
import { InputOptionType } from '../../model/input-option-type';

@Component({
  selector: 'app-question-input-option',
  templateUrl: './question-input-option.component.html',
  styleUrls: ['./question-input-option.component.scss'],
})
export class QuestionInputOptionComponent implements OnInit {
  @Input() inputOptionType!: InputOptionType | undefined;
  @Input() options?: OptionValueModel[];
  @Output() answerUpdateEvent = new EventEmitter<string>();
  InputOptionType: typeof InputOptionType = InputOptionType;

  constructor() {}

  ngOnInit(): void {
    this.options = this.options || [];
  }

  change(answer: string): void {
    this.answerUpdateEvent.emit(answer);
  }
}
