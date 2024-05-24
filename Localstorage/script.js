// console.dir(document)
// let lableitem=document.getElementById('lableitem');
// lableitem.textContent="items"
// lableitem.innerText="add your items"
// lableitem.innerHTML='<h2>item-apple</h2>'
// console.log(lableitem)
// khi se value leni ho ==> '<h2>'+e.target.value+'<h2>';
// let items=document.getElementsByClassName('item');
// it will not work it html collection it will work through loop
// items.textContent="abc"
// items[0].textContent="hello"
// for(let i=0;i<items.length;i++){
//     items[i].textContent="hello"
// }


let li=document.getElementsByTagName('li');
for(let i=0;i<li.length;i++){
    // li[i].style.backgroundColor='yellow'
}
// it olny grab the first one....
// let text=document.querySelector('input');
// text.value="hello world!!"

let li2=document.querySelectorAll('li');
console.log(li2)
for(let i=0;i<li2.length;i++){
    // li2[i].value="new items"
    console.log(li2[i].value)
}

let newDiv=document.createElement('div');
newDiv.className="parent";
newDiv.id='container';
// newDiv.textContent="hello"
let newdivtext=document.createTextNode("hii");
newDiv.appendChild(newdivtext)
console.log(newdivtext)
console.log(newDiv)

// let ulist=document.getElementById(ulist);

let btn=document.getElementById('btn');
console.log(btn)
// btn.addEventListener('click',function(){
//     let lableitem=document.getElementById('lableitem');
//     lableitem.textContent='add your items';
// })

btn.addEventListener('click',buttonClick);

function buttonClick(event){
    console.log(event.target)
    let hd1=document.createElement('h1');
    let val=document.createTextNode('EventListner');
    console.log(val)
    hd1.appendChild(val);
    let fetchfromjs=document.getElementById('fetchformjs');
    console.log(hd1)
    console.log(fetchfromjs)
    // fetchfromjs.innerHTML=hd1;
    console.log(hd1)
    // very very imp. you done mistke here...you wrote textcontent,innerhtml,innertext everything
    fetchfromjs.appendChild(hd1)
}


let form=document.getElementById('addform');
form.addEventListener('submit',addiItem);
function addiItem(event){
    event.preventDefault();

    let li=document.createElement('li');
    li.className='item'
    let val=document.getElementById('text').value;
    let textval=document.createTextNode(""+val+"");
    li.appendChild(textval);
    let deleteBtn=document.createElement('button');
    deleteBtn.className='btn1'
    let btnval=document.createTextNode("Delete");
    deleteBtn.style.backgroundColor='black';
    deleteBtn.style.color='white';
    
    deleteBtn.appendChild(btnval);
    li.appendChild(deleteBtn);
    

    let updatebtn=document.createElement('button');
    updatebtn.className="upbtn";
    let upval=document.createTextNode('Update');
    updatebtn.style.backgroundColor="blue";
    updatebtn.style.color='white';
    updatebtn.appendChild(upval);
    li.appendChild(updatebtn);
    let ulist=document.getElementById('ulist');
    ulist.appendChild(li);

    // document.getElementById('text').innerHTML=" ";

}

let listItem=document.getElementById('ulist');
// console.log(listbtn)
listItem.addEventListener('click',deleteItem);
function deleteItem(event){
    if(event.target.classList.contains('btn1')){
    console.log(event.target.parentElement);
    let li=event.target.parentElement;
    console.log(li)
    let ulist=document.getElementById('ulist')
    console.log(li)
    ulist.removeChild(li)
    

    }

   if(event.target.classList.contains('upbtn')){
        //  alert("update")
        let listvalue=event.target.parentElement.;
        alert(listvalue)
   }



    }

    
