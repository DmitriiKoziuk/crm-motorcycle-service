import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PageTitleService } from '../../../shared/services/page-title.service';
import { VehicleRecord } from '../../../shared/records/vehicle.record';
import { VehicleTypeRecord } from '../../../shared/records/vehicle-type.record';
import { VehicleTypeGetResponse } from '../../../shared/reponses/get/vehicle-type.get.response';
import { VehicleBrandRecord } from '../../../shared/records/vehicle-brand.record';
import { VehicleBrandGetResponse } from '../../../shared/reponses/get/vehicle-brand.get.response';

@Component({
  selector:    'app-page-vehicle-create-update',
  templateUrl: './vehicle-create-update.component.html',
  styleUrls:   [
    './vehicle-create-update.component.css',
  ],
  providers:   [
    VehicleRecord,
    VehicleTypeRecord,
    VehicleBrandRecord,
  ],
})
export class VehicleCreateUpdateComponent implements OnInit {
  protected queryParams:      Params;
  public    vehicleTypeList:  {id: number; name: string}[]  = [];
  public    vehicleBrandList: {id: number; name: string}[]  = [];

  constructor(
    private pageTitle:          PageTitleService,
    private activeRoute:        ActivatedRoute,
    private router:             Router,
    private vehicleTypeRecord:  VehicleTypeRecord,
    private vehicleBrandRecord: VehicleBrandRecord,
    public  vehicleRecord:      VehicleRecord,
  ) {}

  ngOnInit() {
    this.vehicleTypeRecord.findWhere({}).then((response: VehicleTypeGetResponse) => {
      this.vehicleTypeList = response.results;
    });

    this.vehicleBrandRecord.findWhere({}).then((response: VehicleBrandGetResponse) => {
      this.vehicleBrandList = response.results;
    });

    this.vehicleRecord.attributes.get('brand.name').valueChanges.subscribe(name => {
      this.vehicleRecord.attributes.get('brand.id').setValue('');
      this.vehicleBrandRecord.findWhere({name})
        .then((response: VehicleBrandGetResponse) => {
          this.vehicleBrandList = response.results;
        })
        .then(() => {
          this.vehicleBrandList.forEach((brand) => {
            if (brand.name === name) {
              this.vehicleRecord.attributes.get('brand.id').setValue(brand.id);
            }
          });
      });
    });

    this.vehicleRecord.attributes.get('type.name').valueChanges.subscribe(name => {
      this.vehicleRecord.attributes.get('type.id').setValue('');
      this.vehicleTypeList.forEach((type) => {
        if (type.name === name) {
          this.vehicleRecord.attributes.get('type.id').setValue(type.id);
        }
      });
    });

    this.activeRoute.params.subscribe((params: Params) => {
      this.queryParams = params;
      if (this.queryParams.hasOwnProperty('id')) {
        this.vehicleRecord.loadIn(params['id']).then(() => {
          this.pageTitle.set(`Update vehicle "${this.vehicleRecord.attributes.get('model_name').value}"`);
        });
      } else {
        this.pageTitle.set('Create vehicle');
      }
    });
  }

  isCanSave() {
    if (this.vehicleRecord.attributes.valid) {
      return true;
    } else {
      return false;
    }
  }

  save() {
    this.vehicleRecord.save().then(response => {
      if (
        ! this.queryParams.hasOwnProperty('id') &&
        response.hasOwnProperty('id')
      ) {
        this.router.navigate([this.vehicleRecord.getUrl() + '/' + response['id']]);
      }
    });
  }
}
