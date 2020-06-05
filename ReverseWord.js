let ReverseWord = (param) =>{
 
    if (param.length <1) {
        console.log('false')
    }else{

    let split = param.split(' ').reverse().join(' ')
    console.log(split)
}
}
ReverseWord('aku belajar js')
