import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsp',
  templateUrl: './jsp.component.html',
  styleUrls: ['./jsp.component.css']
})
export class JspComponent implements OnInit {

  introductiontojsp: boolean = true;
  jsplifecycle: boolean = false;
  webcontentwithjsp: boolean = false;
  scriptingelements: boolean = false;
  scriptlets: boolean = false;
  declarations: boolean = false;
  expressions: boolean = false;
  xmlforjspelement: boolean = false;
  directivespageincludeandtaglib: boolean = false;
  jspimplicitobjects: boolean = false;
  jspscopes: boolean = false;
  actionelement: boolean = false;
  customtagdevelopment: boolean = false;
  errorhandlinginajsp: boolean = false;
  jstltag: boolean = false;
  expressionlanguge: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  jspIntro() {

    this.introductiontojsp = true;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;
  }

  jspLife() {
    this.introductiontojsp = false;
    this.jsplifecycle = true;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;


  }

  webContent() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = true;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  scriptingEle() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = true;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  scriptlet() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = true;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  declaration() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = true;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  expression() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = true;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  xmlJsp() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = true;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  directivesInclude() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = true;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  implicitObj() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = true;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  jspScopes() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = true;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;


  }

  includeForward() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  jspJavaBean() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = true;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  customTag() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = true;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = false;


  }

  errorHandling() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = true;
    this.jstltag = false;
    this.expressionlanguge = false;

  }

  jstl() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = true;
    this.expressionlanguge = false;

  }

  expressionLang() {

    this.introductiontojsp = false;
    this.jsplifecycle = false;
    this.webcontentwithjsp = false;
    this.scriptingelements = false;
    this.scriptlets = false;
    this.declarations = false;
    this.expressions = false;
    this.xmlforjspelement = false;
    this.directivespageincludeandtaglib = false;
    this.jspimplicitobjects = false;
    this.jspscopes = false;
    this.actionelement = false;
    this.customtagdevelopment = false;
    this.errorhandlinginajsp = false;
    this.jstltag = false;
    this.expressionlanguge = true;


  }


}
