var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languagesArray);
console.log(languagesArray.length);

languagesArray.push('C#', 'php');
console.log(languagesArray);

languagesArray.pop();
console.log(languagesArray);

languagesArray.unshift('C++');
console.log(languagesArray);

languagesArray.shift();
console.log(languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray', thirdElement);

var arraylength = languagesArray.length;
console.log('The final length of the array is', arraylength);

var lastItem = languagesArray[languagesArray.length - 1];
console.log('The last item in the array is', lastItem);
