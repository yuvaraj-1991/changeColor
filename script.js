const colorBtn = document.querySelector('.colorBtn')
const bodyBcg = document.querySelector('body')

const colors = ['yellow','green','red','#3b5998']

colorBtn.addEventListener('click', changeColor)

function changeColor() {
   //bodyBcg.style.backgroundColor = Math.random(colors)
   let random = Math.floor(Math.random()*colors.length) 
   bodyBcg.style.backgroundColor = colors[random]
}