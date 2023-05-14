import React, { useState } from 'react';
import Fuse from 'fuse.js'
import { event } from 'jquery';
import matchers from '@testing-library/jest-dom/matchers';
export default function Search() {
    // var json = []
    var data = require("../dc_t.json")
    // for(var i = 0; i < data.children.length; i++) {
    //     for(var j = 0; j < data.children[i].children.length; j++) {
    //         for(var k = 0; k < data.children[i].children[j].children.length; k++) {
    //             for(var l = 0; l < data.children[i].children[j].children[k].children.length; l++) {
    //                 data.children[i].children[j].children[k].children[l].position = [i, j, k, l]
    //                 data.children[i].children[j].children[k].children[l].chars = data.children[i].children[j].children[k].children[l].text.split(" ").filter(p => p !== "")
    //                 json.push(data.children[i].children[j].children[k].children[l])
    //             }
    //         }
    //     }
    // }
    // console.log(json)
    const options = {
      includeScore: true,
      minMatchCharLength: 3,
      threshold: 0.3,
      keys: [
        "children.text",
      ]
    };
      
      const fuse = new Fuse(data, options);
      
      const [pattern, setPattern] = useState('')
      // var p = []
      var matches = fuse.search(pattern)
      console.log(matches)
      // p = pattern.split(" ")
      // p = p.filter(p => p !== "");
      // // const [pattern, setPattern] = useState('')
      // // var matches = new Fuse(data, options2).search(pattern[0])

      // // setPattern(pattern.split(' '))
      // // for(var i = 1; i < pattern.length; i++) {
      // //   if(pattern[i]!=="") matches = new Fuse(matches, options2).search(pattern[i])
      // // }
      // console.log(p)
    return (
        <div className='flex items-center flex-col pt-24'>
            <input autoFocus={true} className='w-[800px] px-4 rounded-md py-2 mb-3.5 bg-[#ffffff50] border-black border-[1px] outline-none' placeholder='Search' id='s' onChange={() => setPattern(" "+document.getElementById('s').value)+" "} type="text" />
            {matches.length>0 && <a>{matches.length} risultati</a>}
            {matches.length>0 && <ul className='flex mt-3.5 w-[817px] flex-wrap gap-2 h-[750px] overflow-y-scroll'>
                {matches.map((t) =>
                <button className='w-[396px] max-h-[175px] pb-2 bg-blue-400 rounded-md flex flex-col border-blue-800 border-[1px]'>
                    <div className='bg-blue-800 text-white py-2'>{t.item.position[0]===0&& "Inferno"}{t.item.position[0]===1 && "Prugatorio"}{t.item.position[0]===2 && "Paradiso"}, {t.item.position[1]+1}º Canto, {t.item.position[2]+1}ª Terzina</div>
                    {t.item.children.map((v) => <div className='py-1'>{v.text}</div>)}
                </button>)}
                <div className='h-[175px] w-[396px]'></div>
            </ul>}
        </div>
  );
}