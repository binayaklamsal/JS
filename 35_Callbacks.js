
// //Synchronous Callbacks

// function syncFunction(callback) {
//     console.log("Doing some synchronous work...");
//     callback();
//   }
  
//   function callbackFunction() {
//     console.log("Callback executed!");
//   }
  
//   syncFunction(callbackFunction);
  



  //Asynchronous callbacks


  function asyncFunction(callback) {
    console.log("Doing some asynchronous work...");
  
    // Simulating an asynchronous operation (e.g., setTimeout)
    setTimeout(function () {
      callback();
    }, 1000);
  }
  
  function callbackFunction() {
    console.log("Callback executed!");
  }
  
  asyncFunction(callbackFunction);
  