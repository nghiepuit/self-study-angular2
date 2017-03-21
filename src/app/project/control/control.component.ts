import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

	@Output("typeTextChange") typeTextChange = new EventEmitter<number>();
	@Output("typeCurrencyChange") typeCurrencyChange = new EventEmitter<string>();

	constructor() { }

	ngOnInit() {

	}

	settingText(value: any){
		this.typeTextChange.emit(value);
	}

	settingCurrency(value: any){
		this.typeCurrencyChange.emit(value);
	}

}
