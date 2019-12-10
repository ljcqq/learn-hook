import React, { Suspense } from 'react';
// import Hook from "./pages/useContext/App"
import './App.css';
import MyErrorBoundary from './pages/ErrPage/MyErrorBoundary'
const Hook = React.lazy(() => import('./pages/useContext/App'))
function App() {
  return (
    <div className="App">
      <MyErrorBoundary>
        <Suspense fallback={<div>Loading......</div>}>
          <Hook />
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
}

export default App;


// https://juejin.im/post/5caaa8ffe51d452b2b027f8a#heading-22
