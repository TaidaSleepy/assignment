
/* The function calculates demerits based on car speed*/
function calculateDemerits(speed) {
   
   //setting speed limit and initializing the demerit variable
    const speedLimit = 70;
    let demerits = 0;
  
    //Used to check if the speed surpasses the speed limit and give demerit points based on speed passed the speed limit
    if (speed > speedLimit) {
      demerits = Math.floor((speed - speedLimit) / 5);
    }
  
    //returns the demerit points
    return demerits;
  }
  
  //Function  gets input of the speed of the car and displays it
  function main() {
    
    //enters car speed(integer)and calculates demerits
    const speed = parseInt(prompt("Enter the cars speed(km/h):"));
  
    const demerits = calculateDemerits(speed);
  
    //checks if demerits are greater than 0 and displays points or 'lisence suspended' if demerits are greater than 12
    if (demerits > 0) {
      console.log("Points:", demerits);
      if (demerits > 12) {
        console.log("License suspended");
      }
    } else {
      console.log("Ok");
    }
  }
  
  main();