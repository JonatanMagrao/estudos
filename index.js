//console.log('Hello World!')
//console.log('I couldn\'t be able to apply neigher import nor export\'s thing in js. Pretty annoying thing.')

//starting to create functions on this file here, to practice and trying to documentate some of 
//functionalities and methods i don`t know properly

function sum(){
    /**
     * function console log the result as a sum of all the parameters inputed
     * :param:whatever number of parameters
     */
    
    let list = [].slice.call(arguments,0)//this is the line allow all of this works fine
    let result = 0
    for(i=0;i<list.length;i++){
        result += list[i]
    }
    console.log(result)
}

sum(1,2,3,4,5)
