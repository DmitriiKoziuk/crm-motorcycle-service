import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatTableDataSource, PageEvent } from '@angular/material';

import { ClientRecord } from '../../../shared/records/client.record';
import { ClientGetResponse } from '../../../shared/reponses/client-get-response';
import { PageTitleService } from '../../../shared/services/page-title.service';

@Component({
  selector: 'app-pages-client-list',
  templateUrl: './client-list.component.html',
  providers: [ClientRecord]
})
export class ClientListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'tel', 'actions'];
  dataSource;

  length          = 100;
  pageSize        = 10;
  pageIndex       = 0;
  pageSizeOptions = [5, 10, 25, 100];
  queryParams: Params;

  constructor(
    private activeRoute:  ActivatedRoute,
    private router:       Router,
    public  clientRecord: ClientRecord,
    private pageTitle:    PageTitleService,
  ) {}

  ngOnInit() {
    this.pageTitle.set('Client list');

    this.dataSource      = new MatTableDataSource();
    this.dataSource.data = [];

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
      this.clientRecord.findWhere(params).then((response: ClientGetResponse) => {
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

    this.router.navigate(['/client'], {queryParams: queryParams});
  }
}
