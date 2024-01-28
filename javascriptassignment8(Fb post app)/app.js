// // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
// // var now = new Date();
// //  var theDay = now.getDay();
// //  var nameOfToday = dayNames[theDay];
// //  var hours = now.getHours();
// //  var minutes = now.getMinutes();
// //  var seconds = now.getSeconds();



// // document.getElementById("today").innerHTML=(`Today is: ${nameOfToday} <br> Current time is: ${hours}PM : ${minutes} : ${seconds}`);


// // function dateFuction(){
// //     let date = new Date();
// //     document.getElementById("test").innerHTML=(date);

// // }

// // dateFuction();
// // function greetUser(firstName, lastName) {
// //   var fullName = firstName + ' ' + lastName;
// //   document.write('Hello, ' + fullName + '!');
// // }

// // // Example usage:
// // greetUser('Shariq', 'Raja');

// function addTwoNumbersAndDisplayResult() {
//     // Get input from the user
//     var number1 = parseFloat(prompt("Enter the first number:"));
//     var number2 = parseFloat(prompt("Enter the second number:"));
  
//     // Check if the input is valid
//     if (isNaN(number1) || isNaN(number2)) {
//       console.log("Invalid input. Please enter valid numbers.");
//       return; // Exit the function early if there's an error
//     }
  
//     // Calculate the sum
//     var sum = number1 + number2;
  
//     // Display the result
//     document.write("The sum of the two numbers is: " + sum);
//   }
  
//   // Call the function to execute the code
//   addTwoNumbersAndDisplayResult();


function changeStyle(event) {
    var textArea = document.getElementById("textarea");
       var type= event.target.innerHTML;
    
       if (type.includes("fa-bold")){
         textArea.style.fontWeight = "bold";
      } else {
          // Reset to normal if not the bold icon
          textArea.style.fontWeight = "normal";
      } 
    
      if (type.includes("fa-italic")){
       textArea.style.fontStyle = "italic";
    } else {
        // Reset to normal if not the bold icon
        textArea.style.fontStyle = "normal";
    } 
    
    if (type.includes("fa-underline")){
       textArea.style.textDecoration = "underline";
    } else {
        // Reset to normal if not the bold icon
        textArea.style.textDecoration = "none";
    } 
    
    if (type.includes("fa-align-center")){
       textArea.style.textAlign = "center";
    } else {
        // Reset to normal if not the bold icon
        textArea.style.textAlign = "left";
    } 
    
    if (type.includes("fa-align-right")){
       textArea.style.textAlign = "right";
    } else {
        // Reset to normal if not the bold icon
        textArea.style.textAlign = "left";
    } 
    
      
    }
    
    function changeColor(event){
    var textArea = document.getElementById("textarea");
    textArea.style.color = event.target.value;
    }
    
    function changeColorBg(event){
    var textArea = document.getElementById("textarea");
    textArea.style.backgroundColor= event.target.value;
    }
    
    
      
       function emojiSet(event){
          var textArea = document.getElementById("textarea");
       var type= event.target.innerHTML;
          textArea.value += event.target.value;
       }
    
    
       function addImage(event){
          var textArea = document.getElementById("textarea");
          textArea.style.backgroundImage = 'url(' + event.target.src + ')'
    
          if(type.includes("fa-ban fa-xl")){
             textArea.style.backgroundImage= "none";
          }
    
          }
    
       function button(){
          var header = document.getElementById("header");
          var textArea = document.getElementById("textarea");
          var table= document.getElementById("table-content");
          var input = document.getElementById("input");
          var post = document.getElementById("post");
          var main_container = document.getElementById("main_container")
          var liked = document.getElementById("liked-comment-share");
          var hr= document.getElementById("hr");
          header.style.display = "none";
          table.style.display = "none";
          input.style.display= "none";
          post.style.display= "none";
          textArea.disabled = true;
          liked.style.display ="flex";
          hr.style.visibility = "visible";
          main_container.style.marginTop ="130px";
          
       }
       
    
        
       
    
    