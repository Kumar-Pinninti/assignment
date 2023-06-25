import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private records = [
    {
      name: 'James',
      email: 'james@gmail.com',
      phone: '1234567890',
      address: 'Mumbai',
    },
    {
      name: 'Clara',
      email: 'clara@gmail.com',
      phone: '9876543210',
      address: 'Vizag',
    },
    {
      name: 'Wayne',
      email: 'wayne@gmail.com',
      phone: '9876543211',
      address: 'Bangalore',
    },
    {
      name: 'Maya',
      email: 'maya@gmail.com',
      phone: '9877543210',
      address: 'Hyderabad',
    },
    {
      name: 'Kumar',
      email: 'kumar@gmail.com',
      phone: '7288009925',
      address: 'Vizianagaram',
    },
  ];

  constructor() {}

  getRecords() {
    return this.records;
  }

  getRecordByEmail(email: any) {
    return this.records.find(
      (record) => record.email.toLowerCase() === email.toLowerCase()
    );
  }

  addRecord(record: any) {
    this.records.push(record);
  }

  deleteRecord(record: any) {
    const index = this.records.indexOf(record);
    if (index > -1) {
      this.records.splice(index, 1);
    }
  }

  searchByEmail(email: string): any[] {
    return this.records.filter((record) =>
      record.email.toLowerCase().includes(email.toLowerCase())
    );
  }
}
