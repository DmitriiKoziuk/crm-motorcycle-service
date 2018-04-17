import { NgModule } from '@angular/core';

import { TelephonePipe } from '../pipes/telephone.pipe';

@NgModule({
  declarations: [
    TelephonePipe,
  ],
  exports: [
    TelephonePipe
  ]
})
export class PipeModule {}
