## Как работает forEach

</hr>

Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. 

```js

const myArray = ['lena', 'vika', 'ana'];

myArray.forEach(element => alert(`My name is ${element}`));

// Выведет в консоль фразу каждый раз подставив в нее //очередной элемент массива
// element => alert(`My name is ${element}`) - это //функция callback которая будет выполнена на каждом //элементе массива

```

- Диапазон элементов, обрабатываемых методом forEach(),     устанавливается до первого вызова функции callback. 

 - Элементы, добавленные в массив после начала выполнения метода forEach(), не будут посещены функцией callback. 
 
 - Если существующие элементы массива изменятся,         значения,   переданные в функцию callback, будут значениями на тот     момент времени, когда метод forEach() посетит их;
      
 - удалённые элементы посещены не будут.
   
   
## Как очистить массив 
 
 </hr>
 
 Массив можно очистить установив длину массива как ноль 
 
 ```js
 
 const myArray = ['jana','ana','vika',32,43,45];
 
 
 myArray.length = 0;
 
 console.log(myArray)// []- пустой массив
 
 ```
 
 2 Можно очистить массив методом Array.splice если первым значением указать 0 индекс(первый элемент массива),а DeleteCount указать Array.length.
 
 ```js
 
 const myArray = ['jana','ana','vika',32,43,45];
 
 
 myArray.splice(0,myArray.length);
 
 console.log(myArray)// []- пустой массив
 
 ```
 
## Как проверить является ли переменная массивом

</hr>

### Метод массива Array.isArray()

 
 Проверяет ялвляется ли данная переменная массивом и возвращает true, если да и false ,если нет 
 
 ```js
 
 const userNames = [ 'alina' , 'irina','ekaterina','anna']
 
 console.log(Array.isArray(userNames)) // true
 
 ```
### Instanceof Array


```js

function isArray(value){
     let isArray 
    if (value instanceof Array) {
    
isArray = alert('value is Array!');

} else {

   isArray = alert('Not an array');

}

return isArray

}

alert(isArray('stan'))

//Not an array- условие в круглых скобках вернет false и выполнится инсрукция после else

alert(isArray([1,2,3,4,5,6])

// value is Array - условие в круглых скобках вернет true так как переданый аргумент является массивом.

```
