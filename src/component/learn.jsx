import React from 'react'
import DataFlowDiagram from '../assets/image.png';

function LearnPagination() {
  return (
    <div id='data-flow' className='py-20 flex flex-col gap-8 justify-center items-center bg-zinc-300'>

        <div className='capitalize text-xl'>This is how you can easily understand data flow</div>
        <div className='rounded-lg overflow-hidden'>
        <img className='w-[80vw]' src={DataFlowDiagram} alt='Data Flow Diagram'/>
        </div>
        
    </div>
  )
}

export default LearnPagination