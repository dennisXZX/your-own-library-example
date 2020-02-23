// Everything is wrapped in an IIFE to prevent global variable pollution
!(function(global){

    // Create a new object
    const YourOwnLodash = function() {
        return new YourOwnLodash.init();
    }

    // Set up the prototype
    YourOwnLodash.prototype = {

        // Uppercase all the items in an array
        uppercase: function(arr) {
            const newArr = arr.map(item => item.toUpperCase());

            return newArr;
        },

        // Reverse all the items in an array
        reverse: function(arr) {
            const newArr = arr.map(item => {
                return item.split('').reverse().join('');
            });

            return newArr;
        }
    }

    // This is the actual object that is being attached to the 'window' object in the browser
    YourOwnLodash.init = function() {
        const self = this; 

        self.version = '0.01';
    }

    // Set the prototype of the init object to be Lodash.prototype
    // so the object can access all the properties and functions through prototype chain
    YourOwnLodash.init.prototype = YourOwnLodash.prototype

    // Attach the Lodash.init object to 'window' object in the browser
    global._ = YourOwnLodash()
    
// Pass the window object to the IIFE
})(window)