import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViajesListComponent } from './pages/viajes-list/viajes-list.component';
import { ViajesFormComponent } from './pages/viajes-form/viajes-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ViajesListFilterComponent } from './pages/viajes-list/viajes-list-filter/viajes-list-filter.component';
import { ViajesListGridComponent } from './pages/viajes-list/viajes-list-grid/viajes-list-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViajesListComponent,
    ViajesFormComponent,
    HomeComponent,
    ViajesListFilterComponent,
    ViajesListGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
