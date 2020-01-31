import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jdbc',
  templateUrl: './jdbc.component.html',
  styleUrls: ['./jdbc.component.css']
})
export class JdbcComponent implements OnInit {

  introductiontojdbc:boolean=true;
  jdbcarchitecture:boolean=false;
  jdbcdrivertypes:boolean=false;
  jdbcconnection:boolean=false;
  jdbcstatement:boolean=false;
  jdbcresultset:boolean=false;
  jdbcpreparestatement:boolean=false;
  jdbccallablestatment:boolean=false;
  jdbcscrollable:boolean=false;
  jdbcbatchupdate:boolean=false;
  jdbcresultsetmetadata:boolean=false;
  jdbctransaction:boolean=false;
  jdbcfileupload:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  introduction() {
    this.introductiontojdbc=true;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  architecture() {
    this.introductiontojdbc=false;
    this.jdbcarchitecture=true;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  drivertypes(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=true;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }
   
  fileupload(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=true;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  } 
 
  transaction(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=true;
  }

  resultSetMeta(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=true;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  batchupdates(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=true;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  scrollable(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=true;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  callablestatement(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=true;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  preparestatement(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=true;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  resultset(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=true;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

  statement(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=false;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=true;
    this.jdbctransaction=false;
  }

  connection(){
    this.introductiontojdbc=false;
    this.jdbcarchitecture=false;
    this.jdbcdrivertypes=false;
    this.jdbcbatchupdate=false;
    this.jdbccallablestatment=false;
    this.jdbcconnection=true;
    this.jdbccallablestatment=false;
    this.jdbcfileupload=false;
    this.jdbcpreparestatement=false;
    this.jdbcresultset=false;
    this.jdbcresultsetmetadata=false;
    this.jdbcscrollable=false;
    this.jdbcstatement=false;
    this.jdbctransaction=false;
  }

}