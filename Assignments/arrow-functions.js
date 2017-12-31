/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

let tripleAndFilter = (arr) => {
    return arr.map( (value) => {
        return value * 3;
    }).filter( (value) => {
        return value % 5 === 0;
    })
}

/* real answer
//let tripleAndFilter = arr => arr.map(val => val * 3).filter(val => val % 5 === 0);


//console.log(tripleAndFilter([2,3,10,50,15,0]));



/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

let doubleOddNumbers = (arr) => {
    return arr.filter( (val) => {
        return val % 2 !== 0;
    }).map( (val) => {
        return val *2;
    })
}

//answer 
//let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2 );
//console.log(doubleOddNumbers([2,3,10,50,0,5]));

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

let mapFilterAndReduce = (arr) => {
    return arr.map(function(val){
      return val.firstName
    }).filter( (val) => {
      return val.length < 5;
    }).reduce( (acc,next)=> {
      acc[next] = next.length
      return acc;
    }, {})
  }

  //answer
  /*
  let mapFilterAndReduce = (arr) => arr.map(val => val.firstName).filter(val => val.length < 5)
  .reduce((acc,next) => {
      acc[next] = next.length
      return acc;
    }, {})
*/

  //console.log(mapFilterAndReduce([{firstName: 'sol'},{firstName: 'lulu'},{firstName: 'sar'},{firstName: 'ray'},{firstName: 'mina'},{firstName: 'nosmo'}]));

/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

let createStudentOject = (fname, lname) => {
    return ({'firstname': fname, 'lastname': lname});
    ;}


//console.log(createStudentOject('sol', 'patel'));


/* 5 - Given the following code: 


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      setTimeout( () => {
        console.log('Hello ' + this.firstName)
      },1000)
    }
}

//instructor.sayHi();