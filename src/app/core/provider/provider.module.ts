import { NgModule } from '@angular/core';
import { DataServicesModule } from './data-services/data-services.module';
import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [
  ],
  imports: [
    DataServicesModule,
    ServicesModule
  ]
})
export class ProviderModule { }
