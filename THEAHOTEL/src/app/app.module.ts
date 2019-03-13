import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { WelnessComponent } from './lifestyle/welness/welness.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ThaiComponent } from './weddings/thai/thai.component';
import { AuthComponent } from './auth/auth.component';
import { WesterensWeddingsComponent } from './weddings/westerens-weddings/westerens-weddings.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RestaurantComponent,
    BarsComponent,
    WelnessComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    ThaiComponent,
    WesterensWeddingsComponent,
    AuthComponent,
    routingComponents,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
