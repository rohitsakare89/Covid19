import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { CoronaService } from '../services/corona.service'
import {FormControl} from '@angular/forms';
import { CountryReports } from 'src/countryReport';
import {MatTableDataSource} from  '@angular/material/table';


@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CoronavirusComponent implements OnInit {
  
  cases:number;
  todayCases:number;
  deaths:string;
  todayDeaths:string;
  recovered:number;
  active:number;
  critical:string;
  casesPerOneMillion:number;
  deathsPerOneMillion:number;
  tests:string;
  testsPerOneMillion:string;
  
 
 resultArray:CountryReports[]
  countries : any
  country:any
  // confirmed:Number
  // recovered:Number
  // deaths:Number
  // active:any
  // date:any
  selectedValue:string
  //ELEMENT_DATA=this.getCoronaData(this.selected);
 // displayedColumns:string[]=['cases','todayCases','deaths','todayDeaths','recovered','active','critical']
//dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);
  msg:string
  
  
    constructor( private corona:CoronaService){
      this.getAllReports
    }




    
    ngOnInit(){
      this.corona.getCountries().subscribe((data)=>{
        console.log(data)
  this.countries=data

      })
     // this.getAllReports();

      // this.corona.getCoronaActiveData(this.selectedValue).subscribe((data)=>{
      //   console.log(data)
         
        
      //   if(data.length){
      //     this.msg="";
      // var index=data.length - 1
      // this.confirmed=data[index].Confirmed
      // this.recovered=data[index].Recovered
      // this.deaths=data[index].Deaths
      // this.active=data[index].Active
      // this.date=data[index].Date
      // console.log(data[index].Country);
    
    
      
      
      // }
      //   else{
      //     this.msg="no data found"
      //   }
      // })
      
     
    }
  
  
  
    // getCountry($event,selectedcountry){
    //   console.log("selected country",selectedcountry);
    // }
     onChange(selected){
       console.log("selected country",selected);
      this. getCoronaData(selected);
     }
  
     getCoronaData(selected:string){
      
      
   this.corona.getCoronaActiveData(selected).subscribe((data)=>{
     console.log(data)
     
     
     

     

     
     
     this.cases=data.cases
      this.todayCases=data.todayCases
      this.deaths=data.deaths
      this.todayDeaths=data.todayDeaths
      this.recovered=data.recovered
      this.active=data.active
      this.critical=data.critical
    
  // this.confirmed=data.cases
  // this.recovered=data.recovered
  // this.deaths=data.deaths
  //  this.active=data.active
  // // this.date=data[index].Date
  //  console.log(data.Country);


  
  
   
   })
  
  }

  public getAllReports(){
    let resp=this.corona.Covid19Reports();
   // resp.subscribe(report=>this.dataSource.data=report as CountryReports[])
  }

  }


