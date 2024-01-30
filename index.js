/* Problem 2620. Counter
    Given an integer n, return a counter function. 
    This counter function initially returns n and then returns 1 more than the 
    previous value every subsequent time it is called (n, n + 1, n + 2, etc).
    */
    function createCounter(n) {
        let counter = n; // Initialize the counter with the given value
    
        return function() {
        const currentValue = counter; // Store the current value
        counter++; // Increment the counter
        return currentValue; // Return the current value
        };
    }  
        // Test case 1
            const counter1 = createCounter(10);
            console.log([counter1(), counter1(), counter1()]); // Output: [10, 11, 12]  
        // Test case 2
            const counter2 = createCounter(-2);
            console.log([counter2(), counter2(), counter2(), counter2(), counter2()]); // Output: [-2, -1, 0, 1, 2]
        