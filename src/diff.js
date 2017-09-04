import _ from './utils'
import patch from './patch'

function diff(oldTree, newTree) {
  let index = 0
  let patches = {}
  dfsWalk(oldTree, newTree, index, patches)
  return patches
}

// 深度遍历节点 记录差异
function dfsWalk(oldNode, newNode, index, patches) {
  let curPatch = []
  if (newNode === null) {
  // 移除新节点

  } else if (_.isString(oldNode) && _.isString(newNode)) {
    // 文本节点
    if (newNode !== oldNode) {
      curPatch.push({
        type: patch.TYPE_TEXT,
        content: newNode
      })
    }
  } else if ( oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
    // 元素不变
    // props变化
    let propsPatches = diffProps(oldNode, newNode)
    if (propsPatches) {
      curPatch.push({
        type: patch.TYPE_PROPS,
        props: propsPatches
      })
    }

  }
}



// 记录prop差异
function diffProps(oldNode, newNode) {
  let count = 0
  let oldProps = oldNode.props
  let newProps = newNode.props
  let propsPatches = {}

  // 记录变更的props
  Object.keys(oldNode).forEach(key => {
    let val = oldNode[key]
    let newVal = newNode[key]
    if (val !== newVal) {
      count++
      propsPatches[key] = newVal
    }
  })

  // 记录新增的props
  Object.keys(newNode).forEach(key => {
    let newVal = newNode[key]
    if (!oldNode.hasOwnProperty(key)) {
      count++
      propsPatches[key] = newVal
    }
  })

  if (count === 0) {
    return null
  }
  return propsPatches
}

// 对比子元素 运用了listDiff算法
function diffChildren(oldChildren, newChildren, index, patches, curPatch) {
  let diffs = listDiff
}

// 虚拟node是否忽略子元素的对比
function isIgnoreChildren(node) {
  return (node.props && node.props.hasOwnProperty('ignore'))
}