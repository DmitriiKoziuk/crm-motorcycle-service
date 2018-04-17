import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, PageEvent } from '@angular/material';

import { PageTitleService } from '../../../../shared/services/page-title.service';
import { VehicleTypeRecord } from '../../../../shared/records/vehicle-type.record';
import { VehicleTypeGetResponse } from '../../../../shared/reponses/get/vehicle-type.get.response';

@Component({
  selector:    'app-pages-vehicle-type-list',
  templateUrl: './vehicle-type-list.component.html',
  providers:   [VehicleTypeRecord]
})
export class VehicleTypeListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'actions'];
  length           = 100;
  pageSize         = 20;
  pageIndex        = 0;
  pageSizeOptions  = [20, 50, 100];
  queryParams: Params;
  dataSource;

  constructor(
    private pageTitle:         PageTitleService,
    private activeRoute:       ActivatedRoute,
    private router:            Router,
    public  vehicleTypeRecord: VehicleTypeRecord,
  ) {}

  ngOnInit() {
    this.pageTitle.set('Vehicle type');

    this.dataSource      = new MatTableDataSource();
    this.dataSource.data = [];

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
      this.vehicleTypeRecord.findWhere(params).then((response: VehicleTypeGetResponse) => {
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

    this.router.navigate([this.vehicleTypeRecord.getUrl()], {queryParams: queryParams});
  }
}
