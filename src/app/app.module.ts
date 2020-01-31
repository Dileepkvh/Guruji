import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { JdbcComponent } from './jdbc/jdbc.component';
import { ServletComponent } from './servlet/servlet.component';
import { JspComponent } from './jsp/jsp.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { SpringComponent } from './spring/spring.component';
import { SpringbootComponent } from './springboot/springboot.component';
import { InterviewquestionComponent } from './interviewquestion/interviewquestion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { WebservicesComponent } from './webservices/webservices.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorejavaComponent,
    JdbcComponent,
    ServletComponent,
    JspComponent,
    HibernateComponent,
    SpringComponent,
    SpringbootComponent,
    InterviewquestionComponent,
    HeaderComponent,
    FooterComponent,
    MicroservicesComponent,
    WebservicesComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    AngularComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
