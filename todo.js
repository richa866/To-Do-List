
let add = document.querySelector(".add");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

add.addEventListener("click", function () {
  let li = document.createElement("li");

 let checkbox = document.createElement("input");
 checkbox.type="checkbox";
 checkbox.classList.add("checked");
 li.appendChild(checkbox); 
 console.log("checkbox added");

 checkbox.addEventListener("change", function() {
  if (this.checked) {
    li.style.textDecoration = "line-through";
    li.style.backgroundColor="#ede7b1af "
  } else {
    li.style.textDecoration = "none";
    li.style.backgroundColor="#ede7b1eb";
  }
});

  let p = document.createElement("p");
  p.innerText = inp.value;
  p.classList.add("p");
  li.append(p);

  let isEditing = false; 

  li.addEventListener("dblclick", function () {
    if (isEditing===true) return; 

    let newInp = document.createElement("input");
    newInp.classList.add("newInp");
    newInp.value = p.innerText; 

    li.replaceChild(newInp, p); 

   newInp.addEventListener("blur", function () {
      p.innerText = newInp.value; 
      li.replaceChild(p, newInp); 
      isEditing = false; 
    });

  });

  let delBtn = document.createElement("button");
  delBtn.innerText = "-";
  delBtn.classList.add("remove");

  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });

  li.appendChild(delBtn);
  ul.appendChild(li);

  inp.value = ""; // Reset input
});







//  