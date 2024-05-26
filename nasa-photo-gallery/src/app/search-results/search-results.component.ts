import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results: any;
  page: number = 1;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nasaService: NasaService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.fetchResults(params);
    });
  }

  fetchResults(params: any): void {
    this.loading = true;  // Start loading
    const query = params['query'] || '';
    const yearStart = params['year_start'] || '';
    const yearEnd = params['year_end'] || '';
    const mediaType = params['media_type'] || 'image';

    this.nasaService.search(query, yearStart, yearEnd, mediaType, this.page).subscribe(data => {
      this.results = data;
      this.loading = false;  // Stop loading
    }, error => {
      this.loading = false;  // Stop loading on error
    });
  }

  viewDetail(item: any): void {
    const id = item.data[0].nasa_id;
    this.router.navigate(['/detail', id]);
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.updateQueryParams();
    }
  }

  nextPage(): void {
    this.page++;
    this.updateQueryParams();
  }

  updateQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      const queryParams: any = {
        ...params,
        page: this.page
      };
      this.router.navigate(['/search'], { queryParams });
      this.fetchResults(queryParams);
    });
  }
}
