/*
 * class Element 传入虚拟DOM节点，构建真实DOM结构
 * @param eleAttr 接收如下参数:
 *  @tagName
 *  @props
 *  @children
 **/
class Element {
  constructor (eleAttr) {
    Object.assign(this, eleAttr)
  }
  /*
   * func 虚拟DOM渲染为真实DOM树
   * @return 真实DOM结构
   **/
  render () {
    let el = document.createElement(this.tagName)
    let props = this.props
    let children = this.children || []
    // 处理props
    if (props instanceof Object) {
      Object.keys(props).forEach(p => {
        el.setAttribute(p, props[p])
      })
    }
    // 递归子元素
    children.forEach(child => {
      let childEle = child instanceof Element ? child.render() : document.createTextNode(child)
      el.appendChild(childEle)
    })
    return el
  }
}

const el = attr => new Element(attr)

export default el