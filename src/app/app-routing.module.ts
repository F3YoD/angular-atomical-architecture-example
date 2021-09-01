import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { async } from '@angular/core/testing';


const routes: Routes = [
  {
    path: 'foo',
    loadChildren: async() => (await import('./feature/foo/foo.module')).FooModule
  },
  {
    path: 'test',
    loadChildren: async() => (await import('./feature/test/test.module')).TestModule
  },
  {
    path:'',
    redirectTo:'',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
