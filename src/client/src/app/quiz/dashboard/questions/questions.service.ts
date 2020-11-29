import { QuestionInputDataModel } from './../model/question-input-data.model';
import { OptionValueModel } from 'src/app/shared/model/option-value.model';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './../../../core/services/api/api.service';
import { Injectable } from '@angular/core';
import { QuestionModel } from '../model/question.model';
import { InputOptionType } from '../model/input-option-type';
import { ResultSummaryModel } from '../model/result-summary.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions!: QuestionModel[];
  private displayedQuestions!: QuestionModel[];
  private currentQuestionIndex!: number;
  private answers!: { [key: number]: string };
  private noOfQuestions!: number;
  private questionsCount!: number;

  get currentQuestionNumber(): number {
    return this.currentQuestionIndex + 1;
  }

  constructor(private apiService: ApiService) {
    this.setDefaultState();
  }

  private setDefaultState(): void {
    this.noOfQuestions = 0;
    this.displayedQuestions = [];
    this.currentQuestionIndex = 0;
    this.answers = {};
    this.noOfQuestions = 0;
    this.questionsCount = 0;
  }

  loadQuestions(
    noOfQuestions: number,
    difficulty?: string
  ): Observable<boolean> {
    this.setDefaultState();
    this.noOfQuestions = noOfQuestions;

    const observer$ = this.apiService.get<QuestionModel[]>('questions').pipe(
      // tslint:disable-next-line:no-any
      map((response: any) =>
        response.results.filter(
          (question: QuestionModel) => question.difficulty === difficulty
        )
      )
    );

    observer$.subscribe((questions) => {
      this.questions = questions;
    });

    return observer$;
  }

  getQuestion(): QuestionInputDataModel {
    this.questionsCount++;
    return this.constructQuestionInputModel(this.getRandomQuestion());
  }

  updateAnswer(answer: string | null): void {
    if (answer) {
      this.answers[this.currentQuestionIndex] = answer;
    }
  }

  isAllQuestionsCompleted(): boolean {
    return (
      this.questionsCount >= this.noOfQuestions || this.questions.length === 0
    );
  }

  findScore(): ResultSummaryModel {
    let noOfCorrectAnswers = 0;
    let noOfIncorrectAnswers = 0;
    this.displayedQuestions.forEach((question, index) => {
      const answer = this.answers[index];
      if (answer === undefined) {
        return;
      }

      const correctAnswer =
        question.type === 'text'
          ? question.correct_answer
          : question.options && question.options[+answer];
      if (question.correct_answer === correctAnswer) {
        noOfCorrectAnswers++;
      } else {
        noOfIncorrectAnswers++;
      }
    });

    const noOfQuestions = this.displayedQuestions.length;
    const score =
      noOfQuestions > 0
        ? +(noOfCorrectAnswers / noOfQuestions).toFixed(2) * 100
        : 0;
    const resultSummary: ResultSummaryModel = {
      noOfQuestions,
      noOfCorrectAnswers,
      noOfIncorrectAnswers,
      noOfQuestionsAnswered: Object.keys(this.answers).length,
      finalScore: score,
    };

    return resultSummary;
  }

  private isLastQuestion(): boolean {
    return (
      this.questionsCount === this.noOfQuestions || this.questions.length === 1
    );
  }

  private getRandomQuestion(): QuestionModel {
    const index = this.getRandomNumber(-1, this.questions.length - 1);
    const question = this.questions.splice(index, 1)[0];
    this.displayedQuestions.push(question);
    this.currentQuestionIndex = this.displayedQuestions.length - 1;

    return question;
  }

  private constructQuestionInputModel(
    question: QuestionModel
  ): QuestionInputDataModel {
    let inputOptionType;
    let options: OptionValueModel[] = [];
    switch (question.type) {
      case 'multiple':
        inputOptionType = InputOptionType.MULTIPLE_CHOICE;
        options = this.constructRandomOptions(question);
        break;
      case 'boolean':
        inputOptionType = InputOptionType.BOOLEN;
        options = this.constructRandomOptions(question);
        break;
      case 'text':
        inputOptionType = InputOptionType.TEXT_INPUT;
        break;

      default:
        inputOptionType = InputOptionType.TEXT_INPUT;
        break;
    }

    return {
      buttonText: this.isLastQuestion() ? 'Submit' : 'Next',
      inputOptionType,
      question: question.question,
      options,
    };
  }

  private constructRandomOptions(question: QuestionModel): OptionValueModel[] {
    const randomOptions: OptionValueModel[] = [];
    const options = [...question.incorrect_answers, question.correct_answer];
    const optionsLength = options.length;
    for (let index = 0; index < optionsLength; index++) {
      const randomIndex = this.getRandomNumber(-1, options.length - 1);
      const option = options.splice(randomIndex, 1)[0];

      randomOptions.push({
        value: index + '',
        displayString: option,
      });
    }

    question.options = randomOptions.map((option) => option.displayString);

    return randomOptions;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * max + 1) + min;
  }
}
