function firstNonRepeatedChar(str) {
 for(int i = 0; i < str.length; i++){
	 if(i === 0 && str[i] !== str[i+1]){
		 return str[i];
	 }
		else if(i === str.length-1 && str[i] !== str[i-1]){
			return str[i];
		} 
	 else if(str[i] !== str[i-1] && str[i] !== str[i+1]){
		 return str[i];
	 }
 }
	return undefined;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
