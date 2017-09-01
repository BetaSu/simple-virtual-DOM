/*
 * 实现简单的virtual-DOM
 *
 *
 **/

import el from './element'

let structure = el({
  tagName: 'ul',
  props: {
    title: 'i am ul'
  },
  children: [
    '这是列表啊！！',
    el({
      tagName: 'li',
      props: {
        title: 'i am li1'
      },
      children: ['我是列表1']
    }),
    el({
      tagName: 'li',
      props: {
        title: 'i am li2'
      },
      children: ['我是列表2']
    }),
    el({
      tagName: 'li',
      props: {
        title: 'i am li3'
      },
      children: ['我是列表3']
    })
  ]
})
let ulRoot = structure.render()
document.body.appendChild(ulRoot)