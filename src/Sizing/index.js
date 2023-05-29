import React from 'react'

const index = () => {
    return (
        <div>
            {/* Sizing  */}

            {/* 1. width */}
            <p className="bg-black text-white w-24"> This is text </p>
            {/* percentage  */}
            <p className="bg-black text-white w-1/2"> This is text </p>

            {/* max-width */}
            <p className="bg-pink-300 max-w-sm"> This is text contain bluuey valuie on it  </p>


            {/* height  */}
            <div className="flex ">
                <p className="bg-slate-800 text-white w-1/2 h-12">this is my text content</p>
                <p className="bg-slate-800  text-white w-1/2 h-24">this is my text content</p>
                <p className="bg-slate-800  text-white w-1/2 h-36">this is my text content</p>
                <p className="bg-slate-800  text-white w-1/2 h-40">this is my text content</p>
                <p className="bg-slate-800   text-white w-1/2 h-96">this is my text content</p>
            </div>

            {/* fill height  */}
             <p className="bg-slate-800   text-white w-1/2 h-screen">this is text content </p>
        </div>
    )
}

export default index