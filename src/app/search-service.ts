import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SearchService{
    constructor(private http: HttpClient) {
    }

    getData(text: string, start: number): Observable<any>{
        return this.http.get(`${environment.API_ENDPOINT}Search/getData?searchText=${text}&start=${start}`);
    }

    getCountData(text: string): Observable<any>{
        return this.http.get(`${environment.API_ENDPOINT}Search/getCountData?searchText=${text}`);
    }
}