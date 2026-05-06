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


function onstdSubmit(eve){ 
      eve.preventDefault();
    let newObj ={ 
          fname:fnameControl.value ,
          lname:lnameControl.value ,
          email:emailControl.value ,
          contact:contactControl.value,
          stdId:Date.now().toString 
        } 

   stdArr.push(newObj) ;

   let tr = document.createElement('tr'); 
   tr.id =newObj.stdId;
   tr.innerHTML = ` <td>${stdArr.length}</td>
                            <td>${newObj.fname} ${newObj.lname}</td>
                            <td>${newObj.email}</td>
                            <td>${newObj.contact}</td>
                            <td><i onclick="onEdit(this)" class="fa-regular fa-pen-to-square text-primary"></i></td>
                            <td><i onclick="onRemove(this)" class="fa-solid fa-trash-can text-danger remove"></i></td>
                       `
   stdContainer.append(tr);

}  



function disabled(){ 
      let allTr = [...document.querySelectorAll('tr')]; 
      allTr.forEach(ele=>ele.lastElementChild.removeAttribute('onclick'))
}  

function Enabled(){
       let allTr = [...document.querySelectorAll('#stdContainer tr')]; 
      allTr.forEach(ele=>ele.lastElementChild.setAttribute('onclick','onRemove(this)'))
}



function onRemove(ele){ 
      let remove = ele.closest('tr').id ;
      let getindex =stdArr.findIndex(ele=>ele.stdId===remove); 

   stdArr.splice(getindex,1); 
   ele.closest('tr').remove(); 

let alltr= [...document.querySelectorAll('#stdContainer tr')]; 
 alltr.forEach((ele,i)=>ele.firstElementChild.innerText=i+1)

}






stdForm.addEventListener('submit',onstdSubmit);
updateStd.addEventListener('click',onUpdate);
