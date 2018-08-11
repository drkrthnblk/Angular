import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import {EmpServiceService} from './emp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
