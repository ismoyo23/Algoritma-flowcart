// revisi
let palindormV1 = (str)=>{
    if(str < 1){
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
    if (str < 1) {
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
