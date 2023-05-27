import React from 'react'
import { TextField } from '@mui/material';

const color = () => {
    return (
        <div>
            {/*---------------Default Color --------- */}

            {/*---------------Text Color  syntax => class="text-colorName-shade"   --------- */}

            <p className='text-blue-500'>tailwind css</p>
            <p className='text-red-500'>tailwind css</p>
            <p className='text-zinc-500'>tailwind css</p>
            <p className='text-pink-500'>tailwind css</p>
            <p className='text-orange-900'>tailwind css</p>

            {/*---------------background Color  syntax => class="bg-colorName-shade"   --------- */}
            <p className='bg-blue-500'>tailwind css</p>
            <p className='bg-red-500'>tailwind css</p>
            <p className='bg-zinc-500'>tailwind css</p>
            <p className='bg-pink-500'>tailwind css</p>
            <p className='bg-orange-900'>tailwind css</p>


            {/*---------------underline Color  syntax => class="underline decoration-slate-500"   --------- */}
            <p className='underline decoration-red-500'>tailwind css</p>
            <p className='underline decoration-blue-500'>tailwind css</p>
            <p className='underline decoration-orange-500'>tailwind css</p>
            <p className='underline decoration-purple-500'>tailwind css</p>
            <p className='underline decoration-black-500'>tailwind css</p>

            {/*--------------Border Color    syntax => class="border border-colorname-500"---------------*/}

            <input type="text" className='border border-blue-500' />
            <input type="text" className='border border-red-500' />
            <input type="text" className='border border-orange-500' />
            <input type="text" className='border border-pink-500' />
            <input type="text" className='border border-zinc-500' />


            {/*--------------Button Color (outline)    syntax => class="border border-colorname-500"---------------*/}


            <button className='outline outline-blue-500'>Submit</button>
            <div>
                <button className='outline outline-red-500'>Login</button>
            </div>
            <div>
                <button className='outline outline-pink-500'>Reset</button>
            </div>


            {/*------------------- shadow --------------------------- */}
              <div>
              <button className="shadow-lg bg-blue-500 shadow-pink-500">lets go</button>
              </div>
              <button className="shadow-lg bg-blue-500 shadow-red-900/60 text-white">lets go</button>




           {/* -------------------------accent color------------------------ */}

           <div>
            <input type="checkbox" className="accent-red-900" checked/>
            <input type="checkbox" className="accent-purple-900" checked/>
           </div>


           {/*------------------------ Arbitary color --------------------------------- */}
           <div>
            <p className="bg-[#ff2584]">Hello world</p>
           </div>
        </div>
    )
}

export default color;