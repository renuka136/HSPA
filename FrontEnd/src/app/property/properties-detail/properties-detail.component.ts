import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-properties-detail',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './properties-detail.component.html',
  styleUrl: './properties-detail.component.css'
})
export class PropertiesDetailComponent implements OnInit {
  public propertyId: number | any;
  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOnInit(): void {
   this.propertyId = +this.route.snapshot.params['id'];

   this.route.params.subscribe(
    (params) => {
      this.propertyId += +params['id'];
    }
   )
  }
  getBack() {
    this.router.navigate(['/']);
  }
  nextbutton() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }

}
