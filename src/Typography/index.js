import React from 'react'

const index = () => {
    return (
        <div>

            {/* Typography  */}


            {/* 1. font family */}
            <p className="font-sans">this is my text </p>
            <p className="font-serif">this is my text </p>
            <p className="font-mono">this is my text </p>

            {/* 2. font size */}
            <p className="text-xs">this is my text </p>
            <p className="text-xl">this is my text </p>
            <p className="text-sm">this is my text </p>

            {/* 3. font weight */}
            <p className="font-light">this is my text </p>
            <p className="font-semibold">this is my text </p>
            <p className="font-black">this is my text </p>
            {''}
            {/* 4. text-align */}
            <p className="text-left">this is my text </p>
            <p className="text-right">this is my text </p>
            <p className="text-center">this is my text </p>

             {/* 4. text-decoration */}
             <p className="underline decoration-5 decoration-blue-500">this is my text </p>
            <p className="underline decoration-double decoration-blue-500">this is my text </p>
            <p className="underline decoration-wavy decoration-blue-500">this is my text </p>
            <p className="underline decoration-dashed decoration-blue-500">this is my text </p>

            {/* 5. offset  */}
            <p className="underline decoration-dashed decoration-blue-500 underline-offset-8" >this is my text </p>
 

             {/* 6. text transform  */}
             <p className="capitalize">this is my text </p>
             <p className="uppercase">this is my text </p>
        </div>
    )
}

export default index