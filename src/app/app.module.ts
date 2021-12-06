import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routing_components } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FundsPageComponent } from './components/pages/funds-page/funds-page.component';
import { DesembsPageComponent } from './components/pages/desembs-page/desembs-page.component';
import { ChangesPageComponent } from './components/pages/changes-page/changes-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { FundComponent } from './components/fund/fund.component';
import { FundListComponent } from './components/fund-list/fund-list.component';
import { DesembComponent } from './components/desemb/desemb.component';
import { DesembListComponent } from './components/desemb-list/desemb-list.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    routing_components,
    AppComponent,
    FundComponent,
    FundListComponent,
    DesembComponent,
    DesembListComponent,
    HeaderComponent,
    FundsPageComponent,
    DesembsPageComponent,
    ChangesPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    ScrollingModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
