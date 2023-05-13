import { useState } from 'react'

export default function Libro() {
    const [read, setRead] = useState(null)
    return (
        <div>
            <div className="flex items-start pt-[64px] justify-evenly">
            <div className="text-center">
                <h1 className="text-[72px] inf mb-8 h-[108px]">Inferno</h1>
                <div className="flex flex-wrap gap-1 w-[20vw]">
                    {[...Array(34).keys()].map((n) => <button key={0+"--"+n} onClick={() => setRead(require('../divina_commedia.json').children[0].children[n])} className="bg-[#ffffff50] inf text-[24px] font-bold rounded-[10px] border-[1px] border-black w-[72px] h-[72px]">{n+1}</button>)}
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-[72px] h-[108px] mb-8 inf"><span>Pruga</span> <span className="par text-white">torio</span></h1>
                <div className="flex flex-wrap gap-1 w-[20vw]">
                    {[...Array(33).keys()].map((n) => <button key={1+"--"+n} onClick={() => setRead(require('../divina_commedia.json').children[0].children[n])} className="bg-[#ffffff50] text-[24px] font-bold inf border-[1px] border-black rounded-[10px] w-[72px] h-[72px]">{n+1}</button>)}
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-[72px] par mb-8 text-white h-[108px]">Paradiso</h1>
                <div className="flex flex-wrap gap-1 w-[20vw]">
                    {[...Array(33).keys()].map((n) => <button key={2+"--"+n} onClick={() => setRead(require('../divina_commedia.json').children[0].children[n])} className="bg-[#ffffff50] inf text-[24px] font-bold rounded-[10px] border-[1px] border-black w-[72px] h-[72px]">{n+1}</button>)}
                </div>
            </div>
            </div>
            {read && <div onClick={() => setRead(null)} className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000dd] flex justify-center items-center'>
                    <button className='fixed top-4 right-4' onClick={() => setRead(null)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                <div onClick={(event) => event.stopPropagation()} className='overflow-hidden'>
                    <ul className='h-[80vh] bg-[#ffffffbb] rounded-[8px] py-8 px-4 overflow-y-scroll pac text-[32px]'>
                        {read.children.map((t, n) => <><li key={t}>-{n+1} {t.children.map((v) => <li key={t+"-"+v}>{v.text}</li>)}</li><br/></>)}
                    </ul>
                </div>
            </div>}
        </div>
    )
}