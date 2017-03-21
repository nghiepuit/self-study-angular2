import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../define/course.class';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

	@Input("course") course:Course;
	@Input("typeText") typeText:number;
	@Input("typeCurrency") typeCurrency:string;

  constructor() { }

  ngOnInit() {
  }

}
