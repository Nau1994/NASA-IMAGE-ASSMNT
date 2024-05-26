import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filters: any = {};

  onSearch(filters: any) {
    this.filters = filters;
  }
}
