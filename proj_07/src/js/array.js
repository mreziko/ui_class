/**
 * Created by Reziko on 8/26/2016.
 */

var sampleArray=['cat', 'dog', 'monkey']; //define new Array "new Array" or =[]
console.log(sampleArray[1]);
sampleArray[3]='mule';
console.log(sampleArray);
console.log("Length of array is :"+ findLength(sampleArray));

sampleArray.push('Chrimp');
console.log(sampleArray);

traversArray(sampleArray);

//for (var i=0; i<sampleArray.length;i++){
  //  document.write(i + " ) " + sampleArray[i] + "<br>");
//}