import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Libro from './Pages/Libro';
import Search from './Pages/Search';
import Strati from './Pages/Strati';
import Header from './Pages/Header';
import { useState } from 'react';

function App() {
  const [intro, setintro] = useState(true)
  const [foot, setfoot] = useState(false)
  const [page, setPage] = useState([0, 1])
  document.onkeydown = (e) => {
    if (e.keyCode === 38 && page[1]<1 && page[0]==0) setPage([page[0], page[1]+1])
    else if (e.keyCode === 40 && page[1]>-1 && page[0]==0) setPage([page[0], page[1]-1])
    else if (e.keyCode === 37 && page[0]>-1 && page[1]==0) setPage([page[0]-1, page[1]])
    else if (e.keyCode === 39 && page[0]<1 && page[1]==0) setPage([page[0]+1, page[1]])
    else if (e.keyCode === 	32) setintro(false)
  }
  return (
    <>
    {intro && <div className='fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-16 bg-sky-700 text-white font-bold text-[24px] rounded-lg text-center'>per navigare utilizzare i tasti direzionali della tastiera<br />(cliccare <span className='bg-gray-800 rounded-md px-2 font-normal'>spazio</span> per chiudere)</div>}
      <img className="fixed h-[100vh] w-[100vw] -z-20" src="bg.jpg" alt="" />
      {page[0]==0 && page[1]==0 && <Home />}
      {page[0]==1 && page[1]==0 && <Libro />}
      {page[0]==-1 && page[1]==0 && <Search />}
      {page[0]==0 && page[1]==-1 && <Strati />}
      {page[0]==0 && page[1]==1 && <Header />}
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
      <img onClick={() => setfoot(!foot)} className="cursor-pointer fixed w-16 bottom-4 right-0 z-10" src="foot.png" alt="FOOTER" />
            {foot && <div className="flex fixed top-0 left-0 h-[100vh] w-full items-center justify-center">
                <div className="bg-sky-400 border-sky-600 border-2 rounded-3xl py-8 px-4 text-center">
                    <h1 className="font-bold text-[32px] mb-4">Footer</h1>
                    <a href="https://github.com/fabiovalse/Divina-Commedia-Visualization/blob/master/divina_commedia.json"><span className="font-bold">Data:</span> github.com/fabiovalse/Divina-Commedia-Visualization</a>
                    <h1 className="font-bold mt-4">Images and Descriptions</h1>
                    <a href="https://divinacommedia.weebly.com/">https://divinacommedia.weebly.com/</a><br />
                    <a href="https://it.wikipedia.org/">Wikipedia</a><br />
                    <a href="https://quotidianodibari.it/le-grotte-di-acheronte/">https://quotidianodibari.it/le-grotte-di-acheronte/</a><br />
                    <a href="https://www.fanpage.it/cultura/divina-commedia-l8-aprile-1300-dante-alighieri-si-perde-nella-selva-oscura/">https://www.fanpage.it/cultura/divina-commedia-l8-aprile-1300-dante-alighieri-si-perde-nella-selva-oscura/</a>
                    <h1 className="font-bold mt-4">Background and Foot Image</h1>
                    <a href="https://www.flaticon.com/free-icons/step" title="step icons">Step icons created by Freepik - Flaticon</a><br />
                    <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com/</a>
                    <a href='https://www.avvenire.it/agora/pagine/quellinvidia-per-paolo-e-francesca'>https://www.avvenire.it/agora/pagine/quellinvidia-per-paolo-e-francesca</a>
                    <a href='https://www.studenti.it/inferno-canto-v-riassunto-commento-canto-paolo-e-francesca.html'>https://www.studenti.it/inferno-canto-v-riassunto-commento-canto-paolo-e-francesca.html</a>
                    <a href='https://www.vanillamagazine.it/il-mistero-del-conte-ugolino-pratico-il-cannibalismo-sui-suoi-figli/'>https://www.vanillamagazine.it/il-mistero-del-conte-ugolino-pratico-il-cannibalismo-sui-suoi-figli/</a>
                    <a href='https://informazionecritica.com/2021/05/15/gli-ignavi-di-dante-ovvero-il-canto-di-quei/'>https://informazionecritica.com/2021/05/15/gli-ignavi-di-dante-ovvero-il-canto-di-quei/</a>
                    <a href='https://annamariaarvia.wordpress.com/2019/12/07/dante-alighieri-inferno-canto-vi-cerbero-vv-7-33/'>https://annamariaarvia.wordpress.com/2019/12/07/dante-alighieri-inferno-canto-vi-cerbero-vv-7-33/</a>
                </div>
            </div>}
    </>
  );
}

export default App;////////BASTIGINDA OK ISARETINIE ARKADAKI BASILMIYO
