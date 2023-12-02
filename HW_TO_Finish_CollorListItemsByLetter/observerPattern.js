// DO NOT CHANGE
class Subject{
	constructor(){
		this.observers=[];
		this.state=undefined;
	}

	add(observer){
		this.observers.push(observer)
		// this.observers = [...this.observers, observer]
	}
	remove(observer){
		const idx = this.observers.findIndex(el=>el===observer);
		this.observers.splice(idx,1)

	}
	notify(){
		this.observers.forEach( observer=>observer.update(this.state))
	}
}

class Observer{
	constructor(){}
	update(){
		throw Error('Observer MUST implement its own update method')
	}
}
