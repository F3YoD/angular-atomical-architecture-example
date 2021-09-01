import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooModule } from './foo/foo.module';
import { TestModule } from './test/test.module';



@NgModule({
  declarations: [],
  imports: [
    FooModule,
    TestModule
  ],
  exports: [
    FooModule,
    TestModule
  ]
})
export class FeatureModule { }
