import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { VehicleTypeRecord } from '../../../../shared/records/vehicle-type.record';
import { PageTitleService } from '../../../../shared/services/page-title.service';

@Component({
  selector:    'app-page-client-type-create',
  templateUrl: './vehicle-type-create.component.html',
  providers:   [VehicleTypeRecord],
})
export class VehicleTypeCreateComponent implements OnInit {
  protected queryParams;

  constructor(
    private pageTitle:         PageTitleService,
    private activeRoute:       ActivatedRoute,
    private router:            Router,
    public  vehicleTypeRecord: VehicleTypeRecord,
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.queryParams = params;
      if (this.queryParams.hasOwnProperty('id')) {
        this.vehicleTypeRecord.loadIn(params['id']).then(response => {
          this.pageTitle.set(`Update vehicle type - ${this.vehicleTypeRecord.attributes.get('name').value}`);
        });
      } else {
        this.pageTitle.set('Create vehicle type');
      }
    });
  }

  isCanSave() {
    if (this.vehicleTypeRecord.attributes.valid) {
      return true;
    } else {
      return false;
    }
  }

  save() {
    this.vehicleTypeRecord.save().then(response => {
      if (
        ! this.queryParams.hasOwnProperty('id') &&
        response.hasOwnProperty('id')
      ) {
        this.router.navigate([this.vehicleTypeRecord.getUrl() + '/' + response['id']]);
      }
    });
  }
}
