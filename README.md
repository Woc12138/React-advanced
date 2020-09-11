## react-hoc 高阶函数

1.[官方文档：使用 HOC 解决横切关注点问题](https://zh-hans.reactjs.org/docs/higher-order-components.html) 的 demo

src-blog-post 订阅外部数据源以渲染评论列表 CommentList 组件 和 订阅单个博客帖子的 BlogPost 组件（普通方式实现的）

src-hoc 运用 high order components（hoc，高阶函数）实现

2.[官方文档：在高阶组件中转发 refs](https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components) 的 demo

src 在 hoc 组件中运用 React.forwardRef() 来获取传递给它的 ref，然后转发到它包裹的 UI 组件
