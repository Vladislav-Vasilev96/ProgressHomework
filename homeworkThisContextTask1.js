// Do not change the object
const counter = {
  currentCount: 0,
  tick() {
    this.currentCount++;
    console.log(this.currentCount);
  },
};

// fix the problem in countdown function
function countdown(times) {
    const delay = 1000;
    while (times) {
        setTimeout(function() {
            counter.tick.apply(counter); 
        }, delay * times);
        times--;
    }
}



countdown(3);

