function filterBy(array, datatype) {


	let newArray = [];


	switch (datatype) {

		case 'number':

			array.forEach((elem, index) => { if (typeof array[index] !== 'number') { newArray.push(array[index]) } });


			break;


		case 'string':

			array.forEach((elem, index) => { if (typeof array[index] !== 'string') { newArray.push(array[index]) } });


			break;

		case 'object':

			array.forEach((elem, index) => { if (typeof array[index] !== 'object') { newArray.push(array[index]) } });


			break;

		case 'boolean':

			array.forEach((elem, index) => { if (typeof array[index] !== 'boolean') { newArray.push(array[index]) } });


			break;
	}

	return newArray;
}

const taskArray = ['hello','world',23,'23',null];

const myArray = ['lera', 32, 'vika', 34, { name: 'lera', surname: 'vitv' }, { name: 'vika', suraname: 'vitv' }, true, false];

const allTypes = ['number', 'string', 'object', 'boolean'];

allTypes.forEach((type) => console.log(filterBy(myArray, type)));

allTypes.forEach((type) => console.log(filterBy(taskArray,type)));






