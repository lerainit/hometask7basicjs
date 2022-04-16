"use strict";

function filterBy(array, datatype) {


	let newArray;


	switch (datatype) {

		case 'number':

			newArray = array.filter((elem) => typeof elem !== 'number');
			
			break;

        case 'string':

			newArray = array.filter((elem) => typeof elem !== 'string');

			break;

		case 'object':

			newArray = array.filter((elem) => typeof elem !== 'object');
			
			break;

		case 'boolean':

			newArray = array.filter((elem) => typeof elem !== 'boolean');

			break;
	}
	
	return newArray;
}

const taskArray = ['hello','world',23,'23',null];

const myArray = ['lera', 32, 'vika', 34, { name: 'lera', surname: 'vitv' }, { name: 'vika', surname: 'vitv' }, true, false];

const allTypes = ['number', 'string', 'object', 'boolean'];

allTypes.forEach((type) => console.log(filterBy(taskArray, type)));

allTypes.forEach((type) => console.log(filterBy(myArray,type)));
