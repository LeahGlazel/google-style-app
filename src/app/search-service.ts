import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchService{
    constructor(private http: HttpClient) {
    }

    getData(text: string, start: number): Observable<any>{
        return this.http.get(`https://localhost:7008/api/Search/getData?searchText=${text}&start=${start}`);
    }

    getCountData(text: string): Observable<any>{
        return this.http.get(`https://localhost:7008/api/Search/getCountData?searchText=${text}`);
    }
}