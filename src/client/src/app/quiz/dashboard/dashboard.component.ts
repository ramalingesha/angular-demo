import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user!: UserModel;

  constructor() { }

  ngOnInit(): void {
    this.user = history.state ? history.state.user : {};
  }

}
