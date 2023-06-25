import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  record: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    this.record = this.dataService.getRecordByEmail(email);
  }

  navigateTo() {
    const link = 'users';
    this.router.navigate([link]);
  }
}
