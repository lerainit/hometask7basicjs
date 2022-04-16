"use strict";

function filterBy(array, datatype) {
        
	let newArray;

	newArray = array.filter((elem) => typeof elem !== datatype);
        
	return newArray;
}

const taskArray = ['hello','world',23,'23',null];

const myArray = ['lera', 32, 'vika', 34, { name: 'lera', surname: 'vitv' }, { name: 'vika', surname: 'vitv' }, true, false];

const allTypes = ['number', 'string', 'object', 'boolean'];

allTypes.forEach((type) => console.log(filterBy(taskArray, type)));

allTypes.forEach((type) => console.log(filterBy(myArray,type)));


