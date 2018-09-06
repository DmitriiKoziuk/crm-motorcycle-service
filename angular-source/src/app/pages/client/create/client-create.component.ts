import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { PageTitleService } from '../../../shared/services/page-title.service';
import { ClientRecord } from '../../../shared/records/client.record';
import { VehicleRecord } from '../../../shared/records/vehicle.record';
import { VehicleGetResponse } from '../../../shared/reponses/vehicle-get.response';

@Component({
  selector: 'app-page-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  providers: [
    ClientRecord,
    VehicleRecord,
  ],
})
export class ClientCreateComponent implements OnInit {
  protected queryParams;

  public vehicleList: VehicleRecord[];
  private _selectedVehicle = undefined;

  public telephoneForm = new FormGroup({
    number: new FormControl('+38', [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13),
    ]),
    note:   new FormControl('', [
      Validators.maxLength(150),
    ]),
  });

  public vehicleForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    vin:  new FormControl('', [
      Validators.required
    ]),
    note: new FormControl(''),
  });

  constructor(
    private pageTitle:    PageTitleService,
    private activeRoute:  ActivatedRoute,
    private router:       Router,
    private vehicleRecord: VehicleRecord,
    public  clientRecord: ClientRecord,
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.queryParams = params;
      if (this.queryParams.hasOwnProperty('id')) {
        this.clientRecord.loadIn(params['id']).then(response => {
          this.pageTitle.set(`Update client - ${this.clientRecord.attributes.get('first_name').value}`);
        });
      } else {
        this.pageTitle.set('Create client');
      }
    });

    this.vehicleRecord.find().where({})
      .getAll()
      .then((response: VehicleGetResponse) => {
        this.vehicleList = <VehicleRecord[]>response.results;
      });
  }

  public addTelephone(): void {
    if (this.telephoneForm.valid) {
      (<FormArray>this.clientRecord.attributes.get('telephones')).push(
        new FormGroup({
          number: new FormControl(this.telephoneForm.get('number').value),
          note:   new FormControl(this.telephoneForm.get('note').value),
        })
      );
      this.telephoneForm.reset({
        number: '+38',
        note:   '',
      });
    }
  }

  public removeTelephone(index: number): void {
    (<FormArray>this.clientRecord.attributes.get('telephones')).removeAt(index);
  }

  public addVehicle(): void {
    this.clientRecord.addVehicle(
      this._selectedVehicle,
      this.vehicleForm.get('vin').value,
      this.vehicleForm.get('note').value
    );
  }

  public selectedVehicle(vehicle?: VehicleRecord): string | undefined {
    return vehicle ? vehicle.getFullName() : undefined;
  }

  public changeVehicle(event: MatAutocompleteSelectedEvent) {
    this._selectedVehicle = event.option.value;
  }

  public isCanSave() {
    if (this.clientRecord.attributes.valid && this.clientRecord.attributes.get('telephones').value.length) {
      return true;
    } else {
      return false;
    }
  }

  public save() {
    this.clientRecord.save().then(response => {
      if (
        ! this.queryParams.hasOwnProperty('id') &&
          response.hasOwnProperty('id')
      ) {
        this.router.navigate([this.clientRecord.getUrl() + '/' + response['id']]);
      }
    });
  }
}
