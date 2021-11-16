'use strict'

window.localStorage.setItem('theme', 'dark')
window.localStorage.setItem('backgroudColor', 'white')
window.localStorage.setItem('color', '#111')

let keys = Object.keys(localStorage)
for (let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`)
}

const setting = {
  background: 'black',
  color: 'white',
  theme: 'light'
}

localStorage.setItem('settings', JSON.stringify(setting))

let storedSetting = JSON.parse(localStorage.getItem('settings'))
console.log(storedSetting)

console.log(window.localStorage)
// console.log(window.localStorage.length)
console.log(domain)
