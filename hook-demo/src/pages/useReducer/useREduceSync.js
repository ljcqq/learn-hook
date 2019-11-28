import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default () => {
  // 使用 useReducer 函数创建状态 state 以及更新状态的 dispatch 函数
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => {
        dispatch({ type: 'increment' });
        dispatch({ type: 'increment' });
      }}>
        测试能否连加两次
            </button>
    </div>
  );
}

// 点击一次 为2 useReducer 是 同步 更新数据；