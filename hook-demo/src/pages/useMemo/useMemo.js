import React, { useState } from 'react';
import ExampleA from './useMemoA';
import ExampleB from './useMemoB';

// import './App.css';

export default () => {

  const [a, setA] = useState('ExampleA');
  const [b, setB] = useState('ExampleB');

  return (
    <div>
      <ExampleA text={a} />
      <ExampleB text={b} />
      <br />
      <button onClick={() => setA('修改后的 ExampleA')}>修改传给 ExampleA 的属性</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setB('修改后的 ExampleB')}>修改传给 ExampleB 的属性</button>
    </div>
  )
}
//此时我们点击上面任意一个按钮，都会看到控制台打印了两条输出， A 和 B 组件都会被重新渲染。