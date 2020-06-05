let tugas2 = (param) =>{
    let regex = new RegExp("^([a-zA-Z]{0,})$");
    if (param.match(regex)) {
        console.log('false')
    }else{

    let split = param.split(' ').reverse().join(' ')
    console.log(split)
}
}
tugas2('aku belajar js')
