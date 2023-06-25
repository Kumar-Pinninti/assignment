import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  name!: string;
  email!: string;
  phone!: string;
  address!: string;
  searchEmail!: string;

  showForm: boolean = false;
  showTable: boolean = true;
  showError: boolean = false;

  records!: any[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.records = this.dataService.getRecords();
  }

  createRecord() {
    const newRecord = {
      name: this.name.trim(),
      email: this.email.trim(),
      phone: this.phone.trim(),
      address: this.address.trim(),
    };

    const existingRecord = this.records.find(
      (existing) => existing.email === newRecord.email
    );

    if (existingRecord) {
      this.showError = true;
    }

    if (!existingRecord) {
      this.dataService.addRecord(newRecord);
      this.showTable = true;
      this.showForm = false;
      this.showError = false;
      this.address = '';
      this.email = '';
      this.name = '';
      this.phone = '';
    }
  }

  deleteRecord(record: any) {
    this.dataService.deleteRecord(record);
  }

  search() {
    this.records = this.dataService.searchByEmail(this.searchEmail);
  }

  getForm() {
    this.showTable = false;
    this.showForm = true;
  }
}
