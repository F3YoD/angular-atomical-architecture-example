import { Component, OnInit } from '@angular/core';
import { FooService } from 'src/app/core/provider/services/foo.service';
import { FooDTO } from 'src/app/shared/interfaces/FooDTO';

@Component({
  selector: 'app-foo-form',
  templateUrl: './foo-form.component.html',
  styleUrls: ['./foo-form.component.scss']
})
export class FooFormComponent implements OnInit {

  fooString: string = "";
  foos: Array<FooDTO> = new Array();

  constructor(private fooService: FooService) { }

  ngOnInit(): void {
    this.fooService.listOfFoo().subscribe(fooList => {
      this.foos = fooList;
    })
    this.fooString= "FOOOO"
  }

}
