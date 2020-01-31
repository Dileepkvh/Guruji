import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webservices',
  templateUrl: './webservices.component.html',
  styleUrls: ['./webservices.component.css']
})
export class WebservicesComponent implements OnInit {

  introductiontowebservices: boolean = true;
  dtd: boolean = false;
  xsd: boolean = false;
  jaxp: boolean = false;
  jaxb: boolean = false;
  jaxws: boolean = false;
  apacheaxis2: boolean = false;
  restfullservices: boolean = false;
  postman: boolean = false;
  springintegrationwithrest: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  webServiceIntro() {
    this.introductiontowebservices = true;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = false;
  }

  dtd1() {
    this.introductiontowebservices = false;
    this.dtd = true;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = false;
  }
  xsd1() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = true;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = false;
  }
  jaxp1() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = true;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = false;
  }
  jaxb1() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = true;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = false;

  }
  jaxws1() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = true;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = false;
  }

  apacheAxis2() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = true;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = false;
  }
  resultServices() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = true;
    this.postman = false;
    this.springintegrationwithrest = false;

  }
  postman1() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = true;
    this.springintegrationwithrest = false;
  }
  springIntegration() {
    this.introductiontowebservices = false;
    this.dtd = false;
    this.xsd = false;
    this.jaxp = false;
    this.jaxb = false;
    this.jaxws = false;
    this.apacheaxis2 = false;
    this.restfullservices = false;
    this.postman = false;
    this.springintegrationwithrest = true;
  }


}
