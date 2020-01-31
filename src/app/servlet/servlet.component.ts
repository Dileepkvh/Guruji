import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servlet',
  templateUrl: './servlet.component.html',
  styleUrls: ['./servlet.component.css']
})
export class ServletComponent implements OnInit {

  webintroduction: boolean = true;
  servletintroduction: boolean = false;
  servletapi: boolean = false;
  servletinterface: boolean = false;
  firstservletprogram: boolean = false;
  genericservlet: boolean = false;
  httpservlet: boolean = false;
  servletconfig: boolean = false;
  servletcontext: boolean = false;
  requestdispatcher: boolean = false;
  sessiontracking: boolean = false;
  servletfilter: boolean = false;
  servletlistner: boolean = false;
  servletannotation: boolean = false;
  servletmaven: boolean = false;
  curdoperation: boolean = false;
  fileupload: boolean = false;
  filedownload: boolean = false;
  sendmail: boolean = false;
  serlvetlifecycle: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  webIntro() {
    this.webintroduction = true;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = false;
  }

  servletIntro() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = true;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = false;
  }

  servletApi() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = true;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = false;
  }

  servletInterface() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = true;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = false;
  }

  servletSendingMail() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = true;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = false;
  }

  servletFileUpload() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = true;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = false;
  }

  servletFileDownload() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = true;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = false;
  }

  servletCurdOperation() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.servletmaven = false;
    this.serlvetlifecycle = false;
    this.curdoperation = true;
  }

  servletMaven() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = true;
    this.curdoperation = false;
  }

  servletAnnotation() {
    this.webintroduction = false;
    this.servletannotation = true;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletListner() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = true;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletFilter() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = true;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletSessionTracking() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = true;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletRequestDispatcher() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = true;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletContext() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = true;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletConfig() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = true;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  httpServlet() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = true;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  genericServlet() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = true;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletProgram() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = true;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = false;
    this.servletmaven = false;
    this.curdoperation = false;
  }

  servletLifeCycle() {
    this.webintroduction = false;
    this.servletannotation = false;
    this.sendmail = false;
    this.filedownload = false;
    this.fileupload = false;
    this.servletconfig = false;
    this.servletcontext = false;
    this.servletfilter = false;
    this.servletinterface = false;
    this.servletlistner = false;
    this.servletintroduction = false;
    this.sessiontracking = false;
    this.firstservletprogram = false;
    this.genericservlet = false;
    this.httpservlet = false;
    this.requestdispatcher = false;
    this.servletapi = false;
    this.serlvetlifecycle = true;
    this.servletmaven = false;
    this.curdoperation = false;
  }
}
