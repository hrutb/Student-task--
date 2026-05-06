let stdArr =  [ 
        { 
            fname:'rahul',
            lname:'raj',
            email:'r@gmail.com',
            contact:12323,
            stdId:'asd1-123-csad'
        },

        { 
            fname:'rahul',
            lname:'raj',
            email:'r@gmail.com',
            contact:12323,
            stdId:'asd1-123-bvccc'
        }, 
        { 
            fname:'rahul',
            lname:'raj',
            email:'r@gmail.com',
            contact:12323,
            stdId:'asd1-123-rrrr'
        }
]; 
 

const stdContainer= document.getElementById('stdContainer'); 
const stdForm= document.getElementById('stdForm'); 
const fnameControl= document.getElementById('fname'); 
const lnameControl= document.getElementById('lname'); 
const emailControl= document.getElementById('email'); 
const contactControl= document.getElementById('contact'); 

const addStd= document.getElementById('addStd'); 
const updateStd= document.getElementById('updateStd'); 
 

function createArr(arr){ 
 let res =' '; 
 arr.forEach((ele,i)=>{ 
     res +=` <tr id="${ele.stdId}">
                            <td>${i+1}</td>
                            <td>${ele.fname} ${ele.lname}</td>
                            <td>${ele.email}</td>
                            <td>${ele.contact}</td>
                            <td><i onclick="onEdit(this)" class="fa-regular fa-pen-to-square text-primary"></i></td>
                            <td><i onclick="onRemove(this)" class="fa-solid fa-trash-can text-danger"></i></td>
                        </tr>`
 }); 
 stdContainer.innerHTML=res;

} 

createArr(stdArr);
