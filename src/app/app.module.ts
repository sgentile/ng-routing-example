import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { SearchService } from './search.service';
import { AppRoutingModule } from './app-routing.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

