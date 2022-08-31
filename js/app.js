const inputEl = document.getElementById("quickadd")
const bt = document.getElementById("submit-button")
const list = document.querySelector("#to-do-list")


console.log(inputEl)
console.log(bt)
console.log(list)

bt.addEventListener('click', function(evt){
console.log(evt)
if (inputEl.value !== ('')) {
const li = document.createElement("li")
li.textContent = inputEl.value 
console.log(li)
list.appendChild(li)

inputEl.value = ''
}})