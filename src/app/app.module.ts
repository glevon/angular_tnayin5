import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/sort.pipe';
import { FindPipe } from './pipes/find.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { SeniorPipe } from './pipes/senior.pipe';
import { MailPipe } from './pipes/mail.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    FindPipe,
    GenderPipe,
    SeniorPipe,
    MailPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
