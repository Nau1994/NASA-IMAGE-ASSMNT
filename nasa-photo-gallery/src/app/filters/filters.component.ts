import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  filters = {
    query: '',
    yearStart: '',
    yearEnd: '',
    mediaType: 'image'
  };

  constructor(private router: Router) { }

  applyFilters() {
    const { query, yearStart, yearEnd, mediaType } = this.filters;
    const queryParams: any = {};

    if (query) queryParams.query = query;
    if (yearStart) queryParams.year_start = yearStart;
    if (yearEnd) queryParams.year_end = yearEnd;
    if (mediaType) queryParams.media_type = mediaType;

    this.router.navigate(['/search'], { queryParams });
  }
}
