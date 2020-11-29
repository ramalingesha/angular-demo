import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OptionValueModel } from 'src/app/shared/model/option-value.model';
import { QuizOptionsModel } from '../model/quiz-options.model';

@Component({
  selector: 'app-questions-selection-options',
  templateUrl: './questions-selection-options.component.html',
  styleUrls: ['./questions-selection-options.component.scss'],
})
export class QuestionsSelectionOptionsComponent implements OnInit {
  quizOptionsModel!: QuizOptionsModel;
  levelOptions!: OptionValueModel[];

  noOfQuestionOptions!: OptionValueModel[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.quizOptionsModel = {
      levelOption: 'medium',
      noOfQuestionOption: '5',
    };

    this.levelOptions = [
      {
        value: 'easy',
        displayString: 'Easy',
      },
      {
        value: 'medium',
        displayString: 'Medium',
      },
      {
        value: 'hard',
        displayString: 'Hard',
      },
    ];

    this.noOfQuestionOptions = [
      {
        value: '5',
        displayString: '5',
      },
      {
        value: '8',
        displayString: '8',
      },
      {
        value: '12',
        displayString: '12',
      },
    ];
  }

  onSubmit(): void {
    this.router.navigate(['../', 'questions'], {
      relativeTo: this.route,
      state: { quizOptionsModel: this.quizOptionsModel }
    });
  }
}
