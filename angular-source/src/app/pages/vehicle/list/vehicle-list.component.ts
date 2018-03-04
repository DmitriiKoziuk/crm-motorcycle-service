import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../../../shared/services/page-title.service';
import { VehicleRecord } from '../../../shared/records/vehicle.record';

@Component({
  selector: 'app-pages-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  providers: [VehicleRecord]
})
export class VehicleListComponent implements OnInit {
  constructor(
    private pageTitle: PageTitleService,
  ) {}

  ngOnInit() {
    this.pageTitle.set('Vehicle list');
  }
}
