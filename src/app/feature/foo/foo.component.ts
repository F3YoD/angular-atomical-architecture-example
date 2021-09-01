import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FooFormComponent } from './components/foo-form/foo-form.component';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    this.dialog.open(FooFormComponent, {
      width: "50%",
      height: "auto",
      data:{
        dataToPass: undefined
      }
    });
  }

}
