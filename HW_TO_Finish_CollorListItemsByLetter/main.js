// get nodes
const dom = {
    select: document.querySelector(".subject"),
    observers: document.querySelectorAll(".observers>li"),
};

class Select {
    constructor() {
        this.observers = [];
    }

    add(observer) {
        this.observers.push(observer);
    }

    onChange(event) {
        const selectedValue = dom.select.value;
        
        // Notify each observer directly
        this.observers.forEach(observer => {
            observer.update(selectedValue);
        });
    }
}

class ListItem {
    constructor(element) {
        this.element = element;
    }

    update(letter) {
        this.element.style.color = '';
        this.element.style.fontSize = '';

        if (this.element.innerText.toLowerCase().includes(letter)) {
            this.element.style.color = 'red';
            this.element.style.fontSize = '2em';
        }
    }
}

const select = new Select();

dom.select.addEventListener("change", function (event) {
    select.onChange(event);
});

const itemObservers = Array.from(dom.observers).map(item => new ListItem(item));

itemObservers.forEach(observer => select.add(observer));
