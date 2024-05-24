
   
   let val=""

    function myfunction(e){
         val=e.target.value;
    }
    

document.getElementById("form").addEventListener("submit",addItem);

function addItem(event){
    event.preventDefault();
    console.log(event.target.value)
    const price=document.getElementById("price").value;
    const name=document.getElementById("name").value;
    const ulist= document.getElementById(val);
    // console.log(val)
    // console.log(ulist)
    

    const div=document.createElement("div");
    const li=document.createElement("li");
    li.innerHTML=`${price}-${name}`+'<button class="delete-btn">X</button>'
    ulist.appendChild(li)









    // li.className="list"
    // div.className="itemlist"
    // const deleteBtn=document.createElement("button");
    // deleteBtn.className="btn"
    // let temp=document.getElementById(val).childElementCount;
    // // console.log(temp)
    // deleteBtn.setAttribute('id','dbtb'+temp)
    // deleteBtn.onclick=x(temp)
    // const btnVal=document.createTextNode("X")
    // deleteBtn.appendChild(btnVal)
    // const value=document.createTextNode(`${price}-${name}`);
    // li.appendChild(value);
    // div.appendChild(li)
    // div.appendChild(deleteBtn)
    // ulist.appendChild(div);
    // // ulist.appendChild(deleteBtn)
    // console.log(ulist)

       
}
const listContainer=document.getElementById("listContainer")

listContainer.addEventListener("click",(event)=>{
    // console.log(event.target.classList.contains("delete-btn"))
    if(event.target.classList.contains("delete-btn")){
        event.target.parentElement.remove()
    }
})

// const temp=document.getElementsByClassName("item");
// console.log(temp)