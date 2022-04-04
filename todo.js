const form=document.getElementById("form");
const input=document.getElementById("input");  
const todos = document.getElementById("todos");
const btn1=document.getElementById('btn');



   
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todotext=input.value;

  if(todotext){
    const todoE1 = document.createElement("li");
    todoE1.innerText=todotext;


    todoE1.addEventListener('click', () => {
      todoE1.classList.toggle('completed');
      todoE1.classList.add('list1');
      console.log(list1[0]);
    })
    todos.appendChild(todoE1);
    input.value='';
  }
   
}


);
// const elements = document.getElementsByClassName('list1');

btn1.addEventListener("click",(e)=>{
  console.log(list1[0]);
  console.log("clicked");
  
  

//   while(elements.length > 0){
//     console.log(elements[0])
//     elements[0].parentNode.removeChild(elements[0]);
//   }
   




});
   
 


    
