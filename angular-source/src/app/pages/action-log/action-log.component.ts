import {Component, OnInit} from '@angular/core';

import {PageTitleService} from '../../shared/services/page-title.service';

@Component({
  selector: 'app-pages-action-log',
  templateUrl: './action-log.component.html',
})
export class ActionLogComponent implements OnInit {
  constructor(
    private pageTitle: PageTitleService
  ) {}

  ngOnInit() {
    this.pageTitle.set('Action log');
  }
}
