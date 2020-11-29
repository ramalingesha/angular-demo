import { QuizOptionsModel } from './../model/quiz-options.model';
import { QuestionInputDataModel } from './../model/question-input-data.model';
import { QuestionsService } from './questions.service';
import { Component, OnInit } from '@angular/core';
import { ResultSummaryModel } from '../model/result-summary.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questionInputModel!: QuestionInputDataModel;
  currentQuestion!: number;
  totalQuestions!: number;

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let quizOptionsModel: QuizOptionsModel = history.state.quizOptionsModel;

    if (!quizOptionsModel) {
      quizOptionsModel = {
        levelOption: 'easy',
        noOfQuestionOption: '5',
      };
    }

    this.totalQuestions = +quizOptionsModel.noOfQuestionOption;

    this.questionsService
      .loadQuestions(this.totalQuestions, quizOptionsModel.levelOption)
      .subscribe((response) => {
        this.showNextQuestion();
      });
  }

  showNextQuestion(selectedOption: string | null = null): void {
    // Update the current question answer
    this.questionsService.updateAnswer(selectedOption);

    // Show result when user completes all questions
    if (this.questionsService.isAllQuestionsCompleted()) {
      const resultSummary: ResultSummaryModel = this.questionsService.findScore();

      this.router.navigate(['../', 'resultSummary'], {
        relativeTo: this.route,
        state: { resultSummary },
      });
    } else {
      this.questionInputModel = this.questionsService.getQuestion();
      this.currentQuestion = this.questionsService.currentQuestionNumber;
    }
  }
}
