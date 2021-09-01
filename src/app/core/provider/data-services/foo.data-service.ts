import { Injectable } from "@angular/core";
import { DataServicesModule } from "./data-services.module";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { FooDTO } from "src/app/shared/interfaces/FooDTO";

@Injectable({providedIn: DataServicesModule})
export class FooDataService {
    constructor(private httpClient: HttpClient){}

    public getFoo(): Observable<Array<FooDTO>> {
        return this.httpClient.get<Array<FooDTO>>("URL");
    }
}