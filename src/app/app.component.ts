import { Component } from '@angular/core';
import { NgAnalyzeModulesHost } from '@angular/compiler';
import { mainModule } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  developers:developer[]=[
    new developer("Hasmik","Karapetyan",30,"h@mail.com","BackEnd", ["Node", "php", "Python"],"350000","Mrs."),
    new developer("Edgar","Manukyan",27,"e@mail.com","FrontEnd", ["HTML", "CSS"],"200000","Mr."),
    new developer("Ashot","Vardanyan",37,"a@mail.com","FrontEnd", ["HTML","JS"],"150000","Mr."),
    new developer("Karen","Saroyan",25,"k@mail.com","FrontEnd", ["HTML", "CSS", "JS"],"250000","Mr."),
    new developer("Ashxen","Hambardumyan",33,"Ash@mail.com","BackEnd", ["PHP", "python"],"250000","Mrs."),
    new developer("Anna","Barsexyan",22,"ann@mail.com","FullStack", ["angular", "react", "JS","NodeJS"],"500000","Mrs."),
  ]
  public sortBy:string=""
  public sortByDir:string=""
  public findText:string=""
  public filterBy:string=""

}

export class developer{
  name:string
  surename:string
  age:number
  email:string
  direction:string
  skills:string[]
  salary:string
  gender:string

  constructor(a:string,b:string,c:number,d:string,e:string,f:string[],g:string,h:string){
    this.name=a
    this.surename=b
    this.age=c
    this.email=d
    this.direction=e
    this.skills=f
    this.salary=g
    this.gender=h
  }

}