// revisi
let palindormV1 = (str)=>{
    let regex = new RegExp("^([a-zA-Z]{0,})$");
    if(str.match(regex)){
        return false;
    }

   let a = str.split('');
   let b = a.reverse().join('');
   
   if (str == b) {
       console.log('true')
   }else{
       console.log('false')
   }
}

palindormV1('malam')

// seseuai flowchart
let palindromV2 = (str)=>{
    let regex = new RegExp("^([a-zA-Z]{0,})$");
    if (str.match(regex)) {
        console.log('false')
    }
    var a = str.split('');;
    var c = '';
   for (let i = str.length - 1; i >= 0; i--) {
     c = c + a[i];
    }
    if (str === c) {
        console.log('true')
    }else{
        console.log('false')
    }
    return c;
   }
   
   palindromV2('malam');
