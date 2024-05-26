import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: any;
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private nasaService: NasaService) { }

  ngOnInit() {
    this.loading = true;  // Start loading
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ImageDetailComponent initialized with ID:', id);
    if (id) {
      this.nasaService.getImageById(id).subscribe(data => {
        console.log('Data fetched:', data);
        this.image = data.collection.items[0];
        this.loading = false;  // Stop loading
      }, error => {
        console.error('Error fetching data:', error);
        this.loading = false;  // Stop loading
      });
    } else {
      console.error('No ID found in route parameters');
      this.loading = false;  // Stop loading
    }
  }
}
