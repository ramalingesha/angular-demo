import { QuestionsSelectionOptionsComponent } from './questions-selection-options/questions-selection-options.component';
import { ResultSummaryComponent } from './result-summary/result-summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'resultSummary',
        component: ResultSummaryComponent,
      },
      {
        path: 'questions',
        component: QuestionsComponent,
      },
      {
        path: '',
        component: QuestionsSelectionOptionsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
