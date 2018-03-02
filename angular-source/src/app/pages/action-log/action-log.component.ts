import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { MatTableDataSource, PageEvent } from '@angular/material';

import {PageTitleService} from '../../shared/services/page-title.service';
import {ActionLogRecord} from '../../shared/records/action-log.record';
import {GetResponse} from '../../shared/reponses/get-response';

@Component({
  selector: 'app-pages-action-log',
  templateUrl: './action-log.component.html',
  styleUrls: ['./action-log.component.css'],
  providers: [ActionLogRecord],
})
export class ActionLogComponent implements OnInit {
  displayedColumns = [
    'id', 'user', 'entity_name', 'entity_id',
    'action_type', 'old_data', 'new_data', 'apply_time'
  ];
  length           = 100;
  pageSize         = 10;
  pageIndex        = 0;
  pageSizeOptions  = [20, 50, 100];
  queryParams: Params;
  dataSource;

  constructor(
    private activeRoute: ActivatedRoute,
    private router:      Router,
    private pageTitle:   PageTitleService,
    public  actionLog:   ActionLogRecord,
  ) {}

  ngOnInit() {
    this.pageTitle.set('Action log');

    this.dataSource      = new MatTableDataSource();
    this.dataSource.data = [];

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
      this.actionLog.findWhere(params).then((response: GetResponse) => {
        this.length          = response.count;
        this.pageSize        = response.page_size;
        this.pageIndex       = response.page_index;
        this.dataSource.data = response.results;
      });
    });
  }

  paginationEvent(event: PageEvent) {
    const queryParams = Object.assign({}, this.queryParams, {
      page_size:  event.pageSize,
      page_index: event.pageIndex,
    });

    this.router.navigate([this.actionLog.getUrl()], {queryParams: queryParams});
  }
}
