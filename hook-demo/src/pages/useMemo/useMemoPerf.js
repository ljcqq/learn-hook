import React, { useState, useMemo } from 'react';
import ExampleA from './useMemoA';
import ExampleB from './useMemoB';

// import './App.css';

export default () => {

  const [a, setA] = useState('ExampleA');
  const [b, setB] = useState('ExampleB');
  const exampleA = useMemo(() => <ExampleA />, [a]);
  const exampleB = useMemo(() => <ExampleB />, [b]);
  return (
    <div>
      {/* <ExampleA text={ a } />
            <ExampleB text={ b } /> */}
      {exampleA}
      {exampleB}
      <br />
      <button onClick={() => setA('修改后的 ExampleA')}>修改传给 ExampleA 的属性</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setB('修改后的 ExampleB')}>修改传给 ExampleB 的属性</button>
    </div>
  )
}
//此时我们点击不同的按钮，控制台都只会打印一条输出，改变 a 或者 b，A 和 B 组件都只有一个会重新渲染。
