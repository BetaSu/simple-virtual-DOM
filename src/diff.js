/*
 * diff算法 支持同级别DOM元素的比较
 * @param
 **/

// 定义可能的修改类型 替换 排序 改变属性 改变文本
const TYPE_REPLACE = 0
const TYPE_REORDER = 1
const TYPE_PROPS = 2
const TYPE_TEXT = 3

