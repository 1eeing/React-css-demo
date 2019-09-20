## 《React最佳实践系列》demo

### 样式
#### CSS Module
1. 如果不开启modules，所有的样式会原名挂载到head的style里，有重名的就会被覆盖
2. 开启后，使用`import styles from './index.scss'`来引入，生成一个对象，值是根据hash生成的唯一码
3. 全局样式不会生成到styles对象当中，只能通过类名直接使用
4. `composes:` 与 `@extend` 的区别
5. 可以通过`.global(className)`来设置全局样式

> tips：这边的全局与局部仅仅是指类名是否是唯一的，并不代表按需加载与cssTreeShaking

抛出3个问题：
1. 按需加载
2. cssTreeShaking（purify-css）
3. 去重

#### Styled-Components
优点：
1. 覆盖样式方便
2. 解决其他所有css in js样式库的问题
3. 不会有重复css的问题

存在的问题：
1. 无法公用样式
2. 没有自动提示，容易写错
3. 无法抽离出一个css文件，导致html体积变大


### 热更新


### 懒加载
