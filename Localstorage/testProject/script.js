

let form=document.getElementById('form');
form.addEventListener('submit',addItem);
function addItem(event){
    event.preventDefault()
    let div=document.createElement('div');
    let li=document.createElement('li');
    li.id='item'
    let upbtn=document.createElement('button');
    let text=document.getElementById('text').value;
    li.appendChild(document.createTextNode(text));
    li.style.display='inline'
    upbtn.appendChild(document.createTextNode('UPDATE'))
    div.appendChild(li);
    div.appendChild(upbtn)
    let ulist=document.getElementById('ulist');
    ulist.appendChild(div)
}


let ulist=document.getElementById('ulist')
ulist.addEventListener('click',updateItem);
function updateItem(event){
    // let liValue=document.getElementById('item').textContent;
    let livalue=event.target.parentElement;
    console.log(livalue)
    // alert(liValue)
    // document.getElementById('text').value=""+liValue+""
    // console.log(document.getElementById('text').innerText=""+liValue+"")

}