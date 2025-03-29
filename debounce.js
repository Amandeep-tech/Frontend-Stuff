function debounce(func, wait) {
  let timer;
  return function(...args) {
    // clear previous timer
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }
}

// using .bind() is actually not recommeded ?
// 1. .bind() returns/creates a new function everytime which is un-necessary 
function debounceUsingBind(func, wait) {
  let timer;

  return function(...args) {
    // clear previous timer
    clearTimeout(timer);

    timer = setTimeout(func.bind(this, ...args), wait)
  }
}


// Example usage:
const processChanges = (changes) => {
  console.log('Processing changes:', changes);
};
const debouncedProcessChanges = debounce(processChanges, 2000);
// Simulating rapid changes
debouncedProcessChanges('Change 1');
debouncedProcessChanges('Change 2');
debouncedProcessChanges('Change 3');
// Only the last change will be processed after 2 seconds
// Output after 2 seconds: Processing changes: Change 3
// This is a simple debounce implementation in JavaScript.