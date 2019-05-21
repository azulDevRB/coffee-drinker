class Coffee{

	forbidden = ["decaffeinato", "Decaffeinato", "Mentes", "Piros", "piros"];
	
	constructor(type = "Forte") {
		this.type = type
	}

	drink(){
		if( !this.forbidden.includes(this.type) ) return( `Ohh YEAH! It is a(n) ${this.type}` );
		return(`Nope, Never! ${this.type} is not a coffee`);
	}
}

class Person{
	constructor(name){
		this.name = name;
	}
}

class Balazs extends Person{
	age = 28;
	height = 178;
	coffee = {
		favorite : {
			color: "black",
			name: "Espresso Forte?",
			alias: "Caffe Del Torro"
		},
		latest_time : "15:01",
	}
	lunchtime = {
		start_date : "11:50",
		end_date : "12:50"
	};
	activities = ["Lunch", "Drink Coffee", "Theory crafting"];

	constructor(name) {
		super(name);
	}

	readyForLunch(){
		var now = new Date().getHours();;
		if( now >= this.lunchtime.start_date && now <= this.lunchtime.end_date ){
			return true;
		}else{
			return false;
		}
	}

	isLikeCoffee(){
		return("Hogy a viharba' ne?!");
		//return(true);
	}

	invited(person, activity){
		var str = ( `${this.name} has been invited by ${person} for a(n) ${activity}` );

		if( !this.activities.includes(activity) ) return ("You can invite "+ this.name + " only for these activities: " + this.activities.toString());
		
		if( activity == "Lunch" && this.readyForLunch() ){
			
			return str + " and he accepted it.";

		}else if( activity == "Drink Coffee" ){
			
			return str + " and he told that: " + this.isLikeCoffee();

		}else{
			
			return str + " and he accepted it.";

		}
	}
}

var coffee = new Coffee("decaffeinato");
console.log(coffee.drink());

var b = new Balazs("Balázs");
//console.log(b);
console.log(b.invited("Marci", "Drink Coffee"));