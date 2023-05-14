import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Libro from './Pages/Libro';
import Search from './Pages/Search';
import Strati from './Pages/Strati';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState([0, 0])
  document.onkeydown = (e) => {
    if (e.keyCode === 38 && page[1]<1 && page[0]==0) setPage([page[0], page[1]+1])
    else if (e.keyCode === 40 && page[1]>-1 && page[0]==0) setPage([page[0], page[1]-1])
    else if (e.keyCode === 37 && page[0]>-1 && page[1]==0) setPage([page[0]-1, page[1]])
    else if (e.keyCode === 39 && page[0]<1 && page[1]==0) setPage([page[0]+1, page[1]])
  }
  return (
    <>
      <img className="fixed h-[100vh] w-[100vw] -z-20" src="bg.jpg" alt="" />
      {page[0]==0 && page[1]==0 && <Home />}
      {page[0]==1 && page[1]==0 && <Libro />}
      {page[0]==-1 && page[1]==0 && <Search />}
      {page[0]==0 && page[1]==-1 && <Strati />}
      {page[0]>-1 && page[1]==0 && <svg className="fixed -z-10 -translate-x-[50%] -translate-y-[50%] top-[50vh] left-[12.5vw] opacity-20 w-64" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>}
      {page[0]<1 && page[1]==0 && <svg className="fixed -z-10 translate-x-[50%] -translate-y-[50%] top-[50vh] right-[12.5vw] opacity-20 w-64" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>}
      {page[1]>-1 && page[0]==0 && <svg className="fixed -z-10 translate-x-[50%] translate-y-[50%] bottom-[15vh] right-[50vw] opacity-20 w-64" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}
      {page[1]<1 && page[0]==0 && <svg className="fixed -z-10 translate-x-[50%] -translate-y-[50%] top-[15vh] right-[50vw] opacity-20 w-64" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>}
      <a className='fixed bottom-0 right-0' href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com/</a>
    </>
  );
}

export default App;////////BASTIGINDA OK ISARETINIE ARKADAKI BASILMIYO
