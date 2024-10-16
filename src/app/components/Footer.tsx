import Link from "next/link";

type Props = {
    topic: string
    page: string | undefined
    prevPage: string | null
    nextPage: string | null
}

import React from 'react'

const Footer = ({ topic, page, prevPage, nextPage } :Props ) => {

    if(!prevPage && !nextPage) return

    const pageNums : number[] = []
    if(prevPage && nextPage) {
        for(let i = parseInt(prevPage) +1; i< parseInt(nextPage); i++) {
            pageNums.push(i)
        }
    }

    const nextPageArea = nextPage ?
     (
     <Link id="footer" href={`/results/${topic}/${nextPage}`} className={!prevPage? "mx-auto" : ""}>{!prevPage? "More" : ""}  <svg stroke="white" fill="white" className="inline" width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></Link>
    ) : null
    const prevPageArea = prevPage ?
     (<>
     <Link id="footer" href={`/results/${topic}/${prevPage}`} className={!nextPage? "font-serif mx-auto" : ""}>{!nextPage? "Back" : ""}  <svg stroke="white" strokeWidth={2} fill="white" className="inline" width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></Link>

    {pageNums.map( (i,num) => (page && num === parseInt(page)? <span key={i}>{num}</span> : (
        <Link key={i} href={`/results/${topic}/${num}`} className="underline">{num}</Link>
    )))}
     </>
     ) : null

  return (
    <footer className="flex flex-row justify-between items-center text-xl px-2 py-4 font-bold w-60 mx-auto">
        {prevPageArea}
        {nextPageArea}
    </footer>
  )
}

export default Footer