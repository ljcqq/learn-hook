import React, { useState } from 'react';

function Example() {
  // 声明一个名为“count”的新状态变量
  const [count, setCount] = useState(0);
  // createRows 只会被执行一次 优化
  // const [rows, setRows] = useState(() => createRows(props.count));
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
            </button>
      <button onClick={() => {
        setCount(count + 1);
        setCount(count + 1);
      }}>
        测试能否连加两次
      </button>
    </div>
  );
}

export default Example;

// 点击一次， count 还是只增加了 1   useState 是 异步 更新数据；