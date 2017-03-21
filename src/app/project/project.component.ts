import { Component, OnInit } from '@angular/core';
import { Course } from './define/course.class';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

	courses: Course[] = [];
	typeText:number = 0;
	typeCurrency:string = "usd";

	constructor() { 
		this.courses.push(new Course("1","Typescript Developer","1.png","This is Typescript courses developer for student",48,["php","angular","front-end"]));
		this.courses.push(new Course("2","AngularJS 2 Developer","2.png","This is AngularJS courses developer for student",48,["php","angular","front-end"]));
		this.courses.push(new Course("3","PHP Developer","3.png","This is PHP courses developer for student",48,["php","back-end"]));
		this.courses.push(new Course("4",".NET Developer","4.png","This is .NET courses developer for student",48,[".net","back-end","front-end"]));
	}

	ngOnInit() {

	}

	changeTypeText(value : number){
		this.typeText = value;
	}

	changeTypeCurrency(value : string){
		this.typeCurrency = value;
	}

}
