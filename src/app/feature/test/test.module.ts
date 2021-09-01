import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestRountingModule } from './test-routing.module';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    SharedModule,
    TestRountingModule
  ]
})
export class TestModule { }
