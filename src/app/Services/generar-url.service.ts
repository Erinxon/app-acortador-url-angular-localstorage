import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerarUrlService {

  constructor(private _httpClient: HttpClient) { }

  getUrlShort(url: string): Observable<any> {
    const URL = environment.ApiUrl;
    const body = {
      long_url: url
    }
    return this._httpClient.post<any>(URL, body)
  }
}
