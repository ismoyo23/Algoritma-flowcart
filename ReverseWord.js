// revisi
let tugas2 = (param) =>{
    let regex = new RegExp("^([a-z]{0,})$");
    let Subsplit = param.split(' ')
    if (param.match(regex) || Subsplit.length < 1) {
        console.log('input harus kecil dan lebih dari satu')
    }else{   
        console.log(Subsplit.reverse().join(' '))
}
}
tugas2('aku belajar javascript')

// sesuai flowcart
let tugas2V2 = (param) => {
    let regex = new RegExp("^([a-z]{0,})$");
    let Subsplit = param.split(' ')

    if(param.match('regex') || Subsplit.length < 1){
        console.log('input harus lebih kecil dan lebih dari satu')
    }else{

        let array = [ ];
        for (let i = Subsplit.length - 1; i >= 0; i--) {
            array.push(Subsplit[i])
        }
       
        
    }
}

tugas2V2('aku belajar javascript')
