// There are 12 type of Array Function
//Array is Always Start From 0

//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof




// // Push
// let names = ["Bilal","Hassan","Huzaifa"]
// names.push("Mowyia")
// console.log(names); 



// Pop
// let names = ["Bilal","Hassan","Huzafia"]
// names.pop()
// console.log(names)


// Unshift
// let names = ["Bilal","Hassan","Huzafia"]
// names.unshift("Mowyia")
// console.log(names);


//Shift
// let names =["Bilal","Hassan","Huzafia"]
// names.shift()
// console.log(names);


//splice
// let names = ["Bilal","Hassan","Huzafia","Mowyia","Ahmed"]
// names.splice(3,0,"Salman , Saad")
// console.log(names);

//slice
// let names = ["Bilal","Hassan","Huzafia","Mowyia","Ahmed","Salman","Saad"]
// const all= names.slice(1,4)
// console.log(all);

//split
// let text = "KaiHalHaApka??"
// const myArray = text.split("");
// console.log(myArray);

//join
// let names = ["Bilal","Hassan","Huzafia","Mowyia","Ahmed","Salman","Saad"]
// const all =names.join("&")
// console.log(all);


//concat
// let text1 = "Bilal"
// let text2 = "Khan"
// let result = text1.concat(text2)
// console.log(result);

// let text1 = "Bilal"
// let text2 = "Khan"
// let result = text1.concat(" " ,text2)
// console.log(result);


//sort
// let names =["Bilal","Hassan","Huzafia","Mowyia","Ahmed","Salman","Saad"]
// names.sort()
// console.log(names)


//reverse
// let names = ["Bilal","Hassan","Huzafia","Mowyia","Ahmed","Salman","Saad"]
// names.reverse()
// console.log(names);

//indexof
// let text = "Kai Hal Ha Ap ka "
// let result = text.indexOf("Theek")
// console.log(result);


//includes
// let names = ["Bilal","Hassan","Huzafia","Mowyia","Ahmed","Salman","Saad"]
// let result = names.includes("Bilal")
// console.log(result);
















let names = ["Bilal","Hassan","Huzafia","Mowyia","Ahmed","Salman","Saad"]
let input = document.querySelector("#input")
let head = document.querySelector("h2")

function result(){
    console.log(input.value);
    if(names.includes(input.value)){
        console.log("Ap Pass Ha");
        head.innerHTML=`${input.value}Ap Pass Ho `
    }else{
        console.log("Kuyn Nahi Ho Rahi Parhi");
        head.innerHTML=`${input.value}Kuyn Nahi Ho Rahi Parhi`
    }
    input.value = ''
}


