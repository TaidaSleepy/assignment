/* Write a function that takes a score (number) as an argument and returns the corresponding grade as a string */

function grade(score){
  
   /* if statements that checks score and outputs a grade that correstponds */
    
   if(score >=79 )
    {
      return 'you got an A';
    }
    else if(score >= 60)
    {
      return 'you got a B';
    }
    else if(score >= 49)
    {
      return 'you got a C';
    }
    else if(score >= 40)
    {
      return 'You got a D';
    }
    else
    {
      return 'you got an E';
    }
    
}

/*input the grade to test the code*/
console.log(grade(78));