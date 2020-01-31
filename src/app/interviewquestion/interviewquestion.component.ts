import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewquestion',
  templateUrl: './interviewquestion.component.html',
  styleUrls: ['./interviewquestion.component.css']
})
export class InterviewquestionComponent implements OnInit {

  languagefunda: boolean = true;
  string: boolean = false;
  inout: boolean = false;
  exception: boolean = false;
  oops: boolean = false;
  interface: boolean = false;
  thred: boolean = false;
  collection: boolean = false;
  springjdbc: boolean = false;
  springor: boolean = false;
  springmv: boolean = false;
  jdbcjava: boolean = false;
  servletjava: boolean = false;
  jspjava: boolean = false;
  hibernatejava: boolean = false;
  springjava: boolean = false;
  springbootjava: boolean = false;
  microjava: boolean = false;
  webjava: boolean = false;
  htmlint: boolean = false;
  cssint: boolean = false;
  javascriptint: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  laguagefundamental() {
    this.languagefunda = true;
    this.interface = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  strings() {
    this.languagefunda = false;
    this.string = true;
    this.interface = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  oopsconcepts() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = true;
    this.springjdbc = false;
    this.springor = false;
    this.interface = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;

  }
  interfacAB() {
    this.languagefunda = false;
    this.interface = true;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;

  }
  inputoutput() {
    this.languagefunda = false;
    this.string = false;
    this.inout = true;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.interface = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  exceptionHandling() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = true;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.interface = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  threads() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = true;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.interface = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  collections() {
    this.languagefunda = false;
    this.string = false;
    this.interface = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = true;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  jdbc() {

    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.interface = false;
    this.springmv = false;
    this.jdbcjava = true;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  servlet() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = true;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.interface = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  jsp() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = true;
    this.interface = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  hibernate() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.interface = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = true;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  springCore() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = true;
    this.springbootjava = false;
    this.microjava = false;
    this.interface = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  springJbcdao() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = true;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.interface = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  springOr() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = true;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.interface = false;
    this.javascriptint = false;
  }
  springMvc() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = true;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.interface = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  springboot() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.interface = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = true;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  microservices() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.interface = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = true;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  webservices() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.interface = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = true;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = false;
  }
  html() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.interface = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = true;
    this.cssint = false;
    this.javascriptint = false;
  }
  css() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.interface = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = true;
    this.javascriptint = false;
  }
  javascript() {
    this.languagefunda = false;
    this.string = false;
    this.inout = false;
    this.exception = false;
    this.thred = false;
    this.collection = false;
    this.oops = false;
    this.interface = false;
    this.springjdbc = false;
    this.springor = false;
    this.springmv = false;
    this.jdbcjava = false;
    this.servletjava = false;
    this.jspjava = false;
    this.hibernatejava = false;
    this.springjava = false;
    this.springbootjava = false;
    this.microjava = false;
    this.webjava = false;
    this.htmlint = false;
    this.cssint = false;
    this.javascriptint = true;
  }
}