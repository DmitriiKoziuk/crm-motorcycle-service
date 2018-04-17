import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PageTitleService } from '../../../../shared/services/page-title.service';
import { VehicleBrandRecord } from '../../../../shared/records/vehicle-brand.record';

@Component({
  selector:    'app-page-vehicle-brand-create-update',
  templateUrl: './vehicle-brand-create-update.component.html',
  providers:   [VehicleBrandRecord],
})
export class VehicleBrandCreateUpdateComponent implements OnInit {
  protected queryParams;

  constructor(
    private pageTitle:          PageTitleService,
    private activeRoute:        ActivatedRoute,
    private router:             Router,
    public  vehicleBrandRecord: VehicleBrandRecord,
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.queryParams = params;
      if (this.queryParams.hasOwnProperty('id')) {
        this.vehicleBrandRecord.loadIn(params['id']).then(response => {
          this.pageTitle.set(`Update vehicle brand - ${this.vehicleBrandRecord.attributes.get('name').value}`);
        });
      } else {
        this.pageTitle.set('Create vehicle brand');
      }
    });
  }

  isCanSave() {
    if (this.vehicleBrandRecord.attributes.valid) {
      return true;
    } else {
      return false;
    }
  }

  save() {
    this.vehicleBrandRecord.save().then(response => {
      if (
        ! this.queryParams.hasOwnProperty('id') &&
        response.hasOwnProperty('id')
      ) {
        this.router.navigate([this.vehicleBrandRecord.getUrl() + '/' + response['id']]);
      }
    });
  }
}
