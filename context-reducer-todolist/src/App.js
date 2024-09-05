
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routing';
import Layout from './components/layout';
import { useEffect, useState } from 'react';

function App() {
  const [click, setClick] = useState(true)
  
  function handleClick(){
    setClick((pre) => !pre)
  }


  useEffect(() => {
    // 컴포넌트 생성
    console.log('컴포넌트 시작')
    
    return() => {
      console.log('마운트 끝 ')
    }
  }, [click])
  return (
    <>
    <Layout>
      
      <RouterProvider router={router}/>
      <button onClick={handleClick}>znmfflr</button>
    </Layout>
    </>
  );
}

export default App;
