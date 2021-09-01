import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FooDTO } from "src/app/shared/interfaces/FooDTO";
import { FooDataService } from "../data-services/foo.data-service";
import { ServicesModule } from "./services.module";

@Injectable({providedIn: ServicesModule})
export class FooService {
    constructor(private fooDataService: FooDataService) {}
    
    public listOfFoo() : Observable<Array<FooDTO>> {
        return this.fooDataService.getFoo();
    }
}