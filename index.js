const btn = document.getElementById('btn')
const input = document.getElementById('input')
const ul = document.querySelector('.list')
const alert = document.querySelector('.alert')
const container = document.getElementById('container')


input.addEventListener('keydown',(e)=>{
  if(e.keyCode == 13){
    addTodo()
  }
})

const addTodo = () =>{
  let value = input.value
  if(value.trim() != ''){

    let li = document.createElement('li')
    let div = document.createElement('div')
    let p = document.createElement('p')
    let checkbox = document.createElement('div')
    let date = document.createElement('div')
    let day = document.createElement('p')
    if(window.innerWidth < 768){
      day.innerHTML = `Todo added on <br> ${createDate()}`
      day.classList.add('text-center')
    } else{
      day.innerHTML = `Todo added on ${createDate()}`
      day.classList.add('text-center')
    }
    date.appendChild(day)
    container.classList.add('pb-3','px-3','bg-darkBlue','rounded-lg')
    div.classList.add('flex','items-center','gap-2',)
    li.classList.add('flex','justify-between','items-center','text-white','pt-3','px-5','text-sm','md:text-xl','border-b')

    checkbox.classList.add('w-5','h-5','rounded-full','bg-white','pt-1','cursor-pointer')
    let checked = document.createElement('div')
    checked.classList.add('w-3','h-3','rounded-full','bg-mattePurple','ml-1','hidden','cursor-pointer')
    checkbox.appendChild(checked)
    let trash = document.createElement('div')
    let i = document.createElement('i')
    trash.appendChild(i)
    li.appendChild(div)
    li.appendChild(date)
    li.appendChild(trash)
    i.classList.add('fa-solid','fa-trash','cursor-pointer')
    trash.addEventListener('click',remove)
    div.addEventListener('click',lineThrough)
    div.appendChild(checkbox)
    p.textContent = value
    div.appendChild(p)
    ul.appendChild(li)
    
  }else{
    alert.classList.remove('hidden')
    alert.classList.add('block')
    setTimeout(timeOut,2000)
  }
  input.value = ''
}


const createDate = () =>{
  const dateObject = new Date()
  const year = dateObject.getFullYear()
  const dayOfMonth = dateObject.getDate()
  const month = dateObject.getMonth()
  const hour = dateObject.getHours()
  let minute = dateObject.getMinutes()
  minute = minute < 10 ? String(0) + minute :minute
  return `${dayOfMonth}/${month + 1}/${year} ${hour}:${minute}`
}

function lineThrough(){
  this.classList.toggle('text-slate-400')
  this.children[1].classList.toggle( 'line-through')
  this.children[0].children[0].classList.toggle('hidden')
  this.nextSibling.children[0].innerHTML =  `Todo completed on ${createDate()}`
  this.nextSibling.children[0].classList.toggle('text-slate-400') 
}

function remove (){
  this.parentElement.remove()
  if(ul.children.length == 0){
    container.classList.remove('pb-3','border')
  }
}

function timeOut(){
  alert.classList.remove('block')
  alert.classList.add('hidden')
}



btn.addEventListener('click',addTodo)