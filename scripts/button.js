
const btn = document.getElementById('btn');
      section2 = document.getElementById('section2')
      btn2 = document.getElementById('btn2')

btn.addEventListener('click', ()=>{
    section2.classList.add('active')
})

btn2.addEventListener('click', ()=>{
    section2.classList.remove('active')
})