import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  user: UserModel = {} as UserModel;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigate(['dashboard'], {
      relativeTo: this.route,
      state: { user: this.user },
    });
  }
}
