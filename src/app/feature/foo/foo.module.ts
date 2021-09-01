import { NgModule } from '@angular/core';
import { FooComponent } from './foo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooFormComponent } from './components/foo-form/foo-form.component';
import { FooRoutingModule } from './foo-routing.module';



@NgModule({
  declarations: [
    FooComponent,
    FooFormComponent
  ],
  imports: [
    SharedModule,
    FooRoutingModule
  ]
})
export class FooModule { }
