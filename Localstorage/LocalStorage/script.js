/*
  ya data ko database mai fire kru ya browser mai save kr du in the form of localstorage.
  Lot of type of storage==>{localstorage,session,cookies,cache storage..};
  addticart ka logic lgayenge ls kamm ayega..(chota data hota hai)
  ls mai data ko string formate mai hi rkh skte hai means agr multiple data store krna hai to...
  multiple entry ko ls mai bhejne ke liye mai json data bhejenge...json(javascript object notation) ek asia data type jo string ki formate mai data rkta hai..
  mtlb jo data type hai wo string rhta hai but dikta hai js object jaisa....
  mtlb ye multiple data ko le ja skta hia...
  means yaha ek array hoga array ko convert krenge json mai..ls se get krne ke liye json ko phir array mai covert kr denge...
  ls object mai data key vlaue pair mai bhejte hai...

*/ 

localStorage.setItem("name","chandan")
localStorage.setItem("phone","9829")
localStorage.setItem("name","chandan2")
let arr=[
  {
    name:'chandan',
    phone:989566778
  },
  {
    name:'john',
    phone:8927272772

  }
]
// nhi jayega aise
// localStorage.setItem('user',arr);
// localStorage.setItem("user",JSON.stringify(arr));
// ek string hai.
// console.log(typeof(localStorage.getItem("user")))
// JSON.parse==>iska kamm hota hia jo json pda hai..usko ussi data type mai rkh do jisme wo gya tha...
// means gya array ko badal ke json to json ko bdal m=ke array mai le aayega...
// object aa rha hia type...array bhi ek object hai...
// console.log(typeof(JSON.parse(localStorage.getItem("user"))))
// console.log(JSON.parse(localStorage.getItem("user")))

// see line no agar aise nhi likna hai to
// let userData=[];
let form=document.getElementById('form');
form.addEventListener('submit',addItem);
function addItem(event){
  // jo event aaya cancel amr do mtlab page rfresh hona bnd ho jayega...
  event.preventDefault();
  // let li=document.createElement('li');
  // let textVal=event.target.name1.value;
  let submit1=document.getElementById('submit1');
 if(submit1.textContent=='UPDATE'){
    submit1.textContent='Submit'
    submit1.style.backgroundColor='blue'
  }
  let textVal=document.getElementById('text').value;
  let emailVal=document.getElementById('eml').value;
  let phnVal=document.getElementById('phone').value;
  // li.appendChild(document.createTextNode(textVal+"---"+emailVal+"---"+phnVal));
  // let ulist=document.getElementById('ulist');
  // ulist.appendChild(li);
  // ...?
  let userData=JSON.parse(localStorage.getItem("userInfo")) ?? [];
  let checkstatus=false;
  for(let i=0;i<userData.length;i++){
    if(userData[i].phone==phnVal||userData[i].email==emailVal){
      checkstatus=true;
      break;
    }
  }
  if(checkstatus==true){
    alert("Phone or Email Already Exist")
  }
  
  else{
  userData.push({
    'name':textVal,
    'email':emailVal,
    'phone':phnVal,
  })
}
  localStorage.setItem("userInfo",JSON.stringify(userData));
  event.target.reset();
  displayData();
  
}
// console.log('ji')

function displayData(){
  let userData1=JSON.parse(localStorage.getItem("userInfo"));
  // console.log(userData1)
  let ulist=document.getElementById('ulist');
  let finalData=" ";
  for(let i=0;i<userData1.length;i++){
    // console.log(userData1.length)
    finalData+=`<li>${userData1[i].name}--${userData1[i].email}--${userData1[i].phone}
        <div style="display: inline; ">
            <button onclick="removeItem(${i})" type="submit">DELETE</button>
            <button onclick="updateItem(${i})" type="text">UPDATE</button>
          </div>
      </li>
    `
  }
  // console.log(finalData);
  ulist.innerHTML=finalData;
}
// ye function hmara page refresh pe chlta hai..hmm upper page refresh ko rok rkha hai..
// page ke refresh ke rokne ye function fire nhi ho pata...ye function pehli bar to fire ho jata
// but dusri barr jaise hi form ko submit krte hai..ye fire nhi ho pata..


/*
let arr1=[10,20,30,40,50];
arr1.splice(2,1)
// splice tukra delete krta hai.
// slice tukre deta hai.
console.log(arr1)
*/
function removeItem(index){
  let userData=JSON.parse(localStorage.getItem("userInfo")) ?? [];
  userData.splice(index,1);
    localStorage.setItem("userInfo",JSON.stringify(userData));
    displayData()


}

function updateItem(index){
  // alert(index)
     let userData=JSON.parse(localStorage.getItem("userInfo"))??[];
     let textVal=userData[index].name;
     let emailVal=userData[index].email;
     let phnVal=userData[index].phone;
    //  console.log(textVal)
     document.getElementById('text').value=textVal;
     document.getElementById('eml').value=emailVal;
     document.getElementById('phone').value=phnVal;
    //  removeItem();
    let submit1=document.getElementById('submit1')
    submit1.innerText='UPDATE';
    submit1.style.backgroundColor='green';
    submit1.type='reset';
    // console.log(submit1.type)
    // displayData()
    editItem(index);
  }

function editItem(index){
form.addEventListener('reset',editchange);
function editchange(event){
  event.preventDefault()
  let userData=JSON.parse(localStorage.getItem("userInfo"))??[];
  userData[index].name=document.getElementById('text').value;
  userData[index].email=document.getElementById('eml').value;
  userData[index].phone=document.getElementById('phone').value;
  localStorage.setItem("userInfo",JSON.stringify(userData));
  let submit1=document.getElementById('submit1');
  submit1.type='submit';
  if(submit1.textContent=='UPDATE'){
    submit1.textContent='Submit'
    submit1.style.backgroundColor='blue'
  }
  event.target.reset()
  displayData();

}
}




displayData();

let cAll=document.getElementById('cAll');
cAll.addEventListener('click',deleteAll);
function deleteAll(){
  localStorage.clear('userInfo');
  let userData=JSON.parse(localStorage.getItem('userInfo'))??[];
  localStorage.setItem('userInfo',JSON.stringify(userData));
  displayData();
}
