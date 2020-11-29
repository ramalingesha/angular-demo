import { ResultSummaryModel } from './../model/result-summary.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.scss']
})
export class ResultSummaryComponent implements OnInit {
  resultSummary!: ResultSummaryModel;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resultSummary = history.state.resultSummary;
  }

  onReset(): void {
    this.router.navigate(['../../', 'dashboard'], {
      relativeTo: this.route,
    });
  }
}
