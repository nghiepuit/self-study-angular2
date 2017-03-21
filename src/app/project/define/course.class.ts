export class Course{
	id: string;
	name: string;
	image: string;
	description: string;
	price: number;
	category: string[];

	constructor(id: string, name: string, image: string, description: string, price: number,category: string[]){
		this.id = id;
		this.name = name;
		this.image = image;
		this.description = description;
		this.price = price;
		this.category = category;
	}
}

