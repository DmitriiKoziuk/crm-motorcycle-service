import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(
    private pageTitle: PageTitleService,
  ) {}

  ngOnInit() {
    this.pageTitle.set('Dashboard');
  }
}
