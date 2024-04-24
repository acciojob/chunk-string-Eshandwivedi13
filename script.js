function stringChop(str, size) {
   let ans = [];
	if(str === null) return ans;
	let idx = 0;
	let i=0;
   while(i<str.length){
	  let temp = str.substr(i, size);
	  ans[idx++] = temp;
	   i+=size;
   }
	return ans;
}  


// Do not change the code below
// const str = prompt("Enter String.");  
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
