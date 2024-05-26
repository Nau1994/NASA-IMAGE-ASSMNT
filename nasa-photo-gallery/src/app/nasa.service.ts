import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private API_URL = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) { }

  search(query: string, yearStart: string, yearEnd: string, mediaType: string, page: number): Observable<any> {
    const params:any = {};

    if (query) params.q = query;
    if (yearStart) params.year_start = yearStart;
    if (yearEnd) params.year_end = yearEnd;
    if (mediaType) params.media_type = mediaType;
    if (page) params.page = page.toString();

    return this.http.get<any>(environment.SEARCH_API, { params });
  }

  getImageById(id: string): Observable<any> {
    const url = `${environment.MEDIA_API}?nasa_id=${id}`;
    return this.http.get(url);
  }
}
