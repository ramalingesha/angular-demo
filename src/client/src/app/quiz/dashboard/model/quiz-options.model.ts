export interface QuizOptionsModel {
  levelOption: 'easy' | 'medium' | 'hard';
  noOfQuestionOption: string; // as ng-model always returns string we maintain the same type instead of number
}
