let app = document.querySelector('#app')
let langs = ['TypeScript', 'HTML', 'CSS']
let nodes = langs.map(lang => {
  let li = document.createElement('li')
  li.textContent = lang
  return li
})
app.append(...nodes)

let para = document.querySelector('#web')

let paraContent = ['this is para one', 'this is para two']

let paranodes = paraContent.map(para => {
  let p = document.createElement('p')
  p.textContent = para
  // console.log(para)
  return p
})

// console.log(paranodes)
para.append(...paranodes)
// console.log(window.localStorage)

