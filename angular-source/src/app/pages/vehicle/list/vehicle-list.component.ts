import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, PageEvent } from '@angular/material';

import { PageTitleService } from '../../../shared/services/page-title.service';
import { VehicleRecord } from '../../../shared/records/vehicle.record';
import { GetResponse } from '../../../shared/reponses/get-response';

@Component({
  selector: 'app-pages-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  providers: [VehicleRecord]
})
export class VehicleListComponent implements OnInit {
  displayedColumns = [
    'id', 'type', 'brand_name', 'model_name',
  ];
  length           = 100;
  pageSize         = 10;
  pageIndex        = 0;
  pageSizeOptions  = [20, 50, 100];
  queryParams: Params;
  dataSource;

  constructor(
    private pageTitle:     PageTitleService,
    private activeRoute:   ActivatedRoute,
    private router:        Router,
    private vehicleRecord: VehicleRecord,
  ) {}

  ngOnInit() {
    this.pageTitle.set('Vehicle list');

    this.dataSource      = new MatTableDataSource();
    this.dataSource.data = [];

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
      this.vehicleRecord.findWhere(params).then((response: GetResponse) => {
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

    this.router.navigate([this.vehicleRecord.getUrl()], {queryParams: queryParams});
  }
}
