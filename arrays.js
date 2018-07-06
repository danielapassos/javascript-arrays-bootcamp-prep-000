var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element){
  //should return a new array and not modify the original
<<<<<<< HEAD
  array = [element, ... array];
=======
  array = ['element', ... array];
>>>>>>> 8c9450a3f7b6bd352ebc823e5b0f391bcea34f52
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element){
  //should alter the original array that's passed in; 
<<<<<<< HEAD
  array.unshift(element)
=======
  array.unshift('element')
>>>>>>> 8c9450a3f7b6bd352ebc823e5b0f391bcea34f52
  return array
}

function addElementToEndOfArray (array, element) {
<<<<<<< HEAD
  array = [... array, element];
=======
  array = [... array, 'element'];
>>>>>>> 8c9450a3f7b6bd352ebc823e5b0f391bcea34f52
  return array
}

function destructivelyAddElementToEndOfArray (array, element) {
<<<<<<< HEAD
  array.push(element);
  return array
}

function accessElementInArray (array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray  (array){
  array.pop();
  return array
}

function removeElementFromEndOfArray (array){
  return array.slice(0, array.length-1)
=======
  array.shift('element');
  return array
>>>>>>> 8c9450a3f7b6bd352ebc823e5b0f391bcea34f52
}