var numArray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var evenArray=[];
var oddArray=[];

for(var i = 0; i < numArray.length; i++){
    if (numArray[i] %2 ===0){
        evenArray.push(numArray[i]);
    }else{
        oddArray.push(numArray[i]);
    }
}

document.write("Even numbers: " + evenArray.join(", ") + "<br>");
document.write("Odd numbers: " + oddArray.join(", "));
