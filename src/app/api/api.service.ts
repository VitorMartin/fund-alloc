import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { http_config } from "src/app/api/http.config";

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    constructor(private http: HttpClient) { }

    get_funds() {
        return this.http.get(http_config.base_url + '/fund')
    }
}
