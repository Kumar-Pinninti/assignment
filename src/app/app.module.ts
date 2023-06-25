import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, UsersComponent, DetailsComponent],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
