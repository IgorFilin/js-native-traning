const Handler = (event)=> {
    event.stopPropagation()// отмена всплытия
    console.log(event.currentTarget.id)
}


const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

sm.onclick = Handler// свойство html элемента(строе)
md.onclick = Handler
bg.onclick = Handler

sm.addEventListener('click',Handler)// современный подход событий, стараться не использовать анонимные функции, а ссылки на функции

const  a = document.getElementById('a')

a.onclick = (event) => {
    event.preventDefault()// предупредить дефолтное поведение,работает с формами и ссылками
    alert('hi!!')
}
