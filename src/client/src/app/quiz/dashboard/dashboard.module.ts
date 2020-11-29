import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './questions/question/question.component';
import { QuestionInputOptionComponent } from './questions/question-input-option/question-input-option.component';
import { ResultSummaryComponent } from './result-summary/result-summary.component';
import { QuestionsSelectionOptionsComponent } from './questions-selection-options/questions-selection-options.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    QuestionsComponent,
    QuestionComponent,
    QuestionInputOptionComponent,
    ResultSummaryComponent,
    QuestionsSelectionOptionsComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
