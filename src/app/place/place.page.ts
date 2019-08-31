import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  title = "";
  image = "";
  detail = ``;
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let place = JSON.parse(params.place);
      this.title = place.title;
      this.image = place.image;
      this.detail = place.detail;
    });
  }
}
