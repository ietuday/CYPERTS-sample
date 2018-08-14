import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule, JsonpModule } from '@angular/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatRippleModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTabsModule,
  MatSelectModule,
  MatListModule,
  MatRadioModule,
  MatTooltipModule,
  MatChipsModule,
  MatSlideToggleModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { MailService } from './services/mail.service';
import { WikipediaSearchService } from './services/wikipedia-search.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatTooltipModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatCardModule,

  ],
  providers: [
    LoginService, RegisterService,
    {provide:'mail', useClass:MailService},
    {provide:'api', useValue:'http://localhost:3000/'},    
    WikipediaSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
