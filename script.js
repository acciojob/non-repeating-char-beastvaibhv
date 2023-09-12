function firstNonRepeatedChar(str) {
 for(int i = 0; i < str.length; i++){
	  if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
 }
	return undefined;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
