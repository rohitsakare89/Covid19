import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoronaService } from './services/corona.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import{CountryReports} from './../countryReport';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoronavirusComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    
    //CoronavirusGraphComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    AppRoutingModule,
    
  
   


    


  ],
  exports:[
    MatSelectModule,MatCardModule,MatTableModule,
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
