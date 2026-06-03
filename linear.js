function linearSearch(array,target){
    array=array.map(Number);
    for(let i=0;i<=array.length;i++){
        while(array[i]===target){
            return i;
        }
    }
    
}

console.log(linearSearch(["1","2","3","4","33"],33));