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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './pages/login/login.component';



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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
