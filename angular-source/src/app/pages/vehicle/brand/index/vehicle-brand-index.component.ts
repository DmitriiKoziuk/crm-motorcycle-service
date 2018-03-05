import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, PageEvent } from '@angular/material';

import { PageTitleService } from '../../../../shared/services/page-title.service';
import { VehicleBrandRecord } from '../../../../shared/records/vehicle-brand.record';
import { VehicleBrandGetResponse } from '../../../../shared/reponses/get/vehicle-brand.get.response';

@Component({
  selector:    'app-vehicle-brand-index',
  templateUrl: './vehicle-brand-index.component.html',
  providers:   [VehicleBrandRecord]
})
export class VehicleBrandIndexComponent {
  displayedColumns = ['id', 'name', 'actions'];
  length           = 100;
  pageSize         = 20;
  pageIndex        = 0;
  pageSizeOptions  = [20, 50, 100];
  queryParams: Params;
  dataSource;

  constructor(
    private pageTitle:          PageTitleService,
    private activeRoute:        ActivatedRoute,
    private router:             Router,
    public  vehicleBrandRecord: VehicleBrandRecord,
  ) {}

  ngOnInit() {
    this.pageTitle.set('Vehicle type');

    this.dataSource      = new MatTableDataSource();
    this.dataSource.data = [];

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.queryParams = params;
      this.vehicleBrandRecord.findWhere(params).then((response: VehicleBrandGetResponse) => {
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

    this.router.navigate([this.vehicleBrandRecord.getUrl()], {queryParams: queryParams});
  }
}
