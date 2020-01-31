import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { JdbcComponent } from './jdbc/jdbc.component';
import { ServletComponent } from './servlet/servlet.component';
import { JspComponent } from './jsp/jsp.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { SpringComponent } from './spring/spring.component';
import { SpringbootComponent } from './springboot/springboot.component';
import { InterviewquestionComponent } from './interviewquestion/interviewquestion.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { WebservicesComponent } from './webservices/webservices.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';


const routes: Routes = [ 
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component:HomeComponent},
 {path: 'corejava', component:CorejavaComponent},
 {path: 'jdbc', component:JdbcComponent},
 {path: 'servlet', component:ServletComponent},
 {path: 'jsp', component:JspComponent},
 {path: 'hibernate', component:HibernateComponent},
 {path: 'spring', component:SpringComponent},
 {path: 'springboot', component:SpringbootComponent},
 {path: 'microservices', component:MicroservicesComponent},
 {path: 'webservices', component:WebservicesComponent},
 {path: 'html', component:HtmlComponent},
 {path: 'css', component:CssComponent},
 {path: 'javascript', component:JavascriptComponent},
 {path: 'angular', component:AngularComponent},
 {path: 'interviewquestion', component: InterviewquestionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
