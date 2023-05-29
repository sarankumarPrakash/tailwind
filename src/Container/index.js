import React from 'react'

const index = () => {
  return (
    <div className="container mx-auto">
      {/* mx-auto => margin on x axis , margin-left and margin right
          my-auto => margin on Y axis , margin-top and margin bottom 
     */}
      <h4>Article</h4>
      <p>This is  my paragaraph text with 1000 lines of code .</p>


      {/* margin => m  className="m-2"  */}
      <p className="bg-slate-500 m-4">hello </p>
      <p className="bg-zinc-500 ml-4">hello </p>
      <p className="bg-orange-500 mt-8">hello </p>
      <p className="bg-red-500 mb-8">hello </p>
      <p className="bg-yellow-500 mr-8">hello </p>

      {/* margin => m  className="m-2"  */}
      <p className="bg-slate-500 p-4">hello </p>
      <p className="bg-zinc-500 pl-4">hello </p>
      <p className="bg-orange-500 pt-8">hello </p>
      <p className="bg-red-500 pb-8">hello </p>
      <p className="bg-yellow-500 pr-8">hello </p>


      {/* space between -X  */}
      <div className='flex mt-5 space-x-5'>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
        <div>Item5</div>
        <div>Item6</div>
      </div>


       {/* space between -Y  */}

       <div className='flex flex-col mt-5 space-y-5'>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
        <div>Item5</div>
        <div>Item6</div>
      </div>
    </div>

  )
}

export default index