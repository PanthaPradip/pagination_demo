import React, { useEffect } from 'react'
import { useState } from 'react';


function ProductsDemo() {

  const [products, setProducts] = useState([]);

    const fetchProduct = async ()=>{
      try{
        const raw = await fetch('https://dummyjson.com/products?limit=150');
        const data = await raw.json();

        if(data && data.products) setProducts(data.products);
      } 
      catch(e){
        console.log("Error Fetching Product");
      }
    }

    useEffect(()=>{
      fetchProduct();
    },[]);

    console.log(products);

    const itemsPerPage = window.innerWidth < 800 ? 9 : 15;


    const totalNoOfPages = [];
    for(let i=1; i<=Math.ceil(products.length/itemsPerPage); i++){
      totalNoOfPages.push(i);
    }

    const[currentPageNo, setCurrentPageNo] = useState(1);
    const PageChange =(pageno)=>{
        setCurrentPageNo(pageno);
    }


    const IndexOfLast = currentPageNo * itemsPerPage;
    const IndexOfFirst = IndexOfLast - itemsPerPage;
    const currentListItems = products.slice(IndexOfFirst, IndexOfLast);
    



  return (
    <div className='flex flex-col py-4 gap-4 lg:gap-8 justify-center items-center bg-[#A5B68D] px-2 lg:px-40 lg:py-10   overflow-hidden box-border'>

      <div className='flex gap-4'> <h1 className='text-4xl text-[#3C3D37]'>Pagination Demo</h1>
      <a href='#data-flow' className='flex text-center items-center bg-orange-700 rounded-lg px-5 text-zinc-50'>Click Here for Data Flow Diagram</a></div>
       

        <div className='grid gap-2 lg:gap-5 grid-cols-3 lg:grid-cols-5 box-border'>
              {
                currentListItems.map((items,index)=>

                <div className='list-none bg-[#624E88] p-3 lg:px-4 lg:py-6 rounded-md ;g:w-[14rem] lg:h-[11rem] overflow-hidden box-border'  key={index}>
                  <div className='flex flex-col gap-2 justify-center items-center text-sm text-center text-[#E5D9F2] '>

                      <p className='uppercase font-bold mb-2'>{items.title}</p>
                      <p className='font-light'>Brand: {items.brand}</p>
                      <p className='font-light'>Category: {items.category}</p>

                  </div>
                </div>)
              }
        </div>


        <div className='grid grid-cols-6 gap-2 lg:flex lg:gap-4'>
            <button className={`border-black border-[1px] rounded-md active:bg-green-600 transition-all ease-in duration-75 px-6 ${currentPageNo===1 ? 'bg-red-500 active:bg-red-500' : 'bg-green-700 text-zinc-50'}`} onClick={()=>PageChange(currentPageNo > 1 ? currentPageNo - 1 : currentPageNo)}
              disabled={currentPageNo === 1}>Prev</button>

            {
              totalNoOfPages.map((pageno)=><button key={pageno} className={` border-black border-[1px] px-2 lg:py-1 lg:px-6 rounded-md transition-all duration-300 ease-out  ${pageno == currentPageNo ? 'bg-zinc-700 text-white' : 'bg-slate-400'}`} onClick={()=>PageChange(pageno)}>{pageno}</button>)
            }

            <button className={`border-black border-[1px] px-6 rounded-md active:bg-green-600 transition-all ease-in duration-75 ${currentPageNo === totalNoOfPages.length ? 'bg-red-500 active:bg-red-500' : 'bg-green-700 text-zinc-50'}`} onClick={()=>PageChange(currentPageNo < totalNoOfPages.length ? currentPageNo + 1 : currentPageNo)} disabled={currentPageNo === totalNoOfPages.length}>Next</button>
        </div>
    </div>
  );
}

export default ProductsDemo;