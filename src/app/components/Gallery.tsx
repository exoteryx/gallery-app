import { fetchImages } from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import { ImgContainer } from "./ImgContainer";
import  getPrevnextPages  from "@/lib/getPrevNextPages";
import addBlurredDataUrl from "@/lib/getBase64";
import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
type Props = {
  topic?: string | undefined, 
  page?: string | undefined,

}

const Gallery = async ({topic = "curated", page }: Props) => {

let url  
if(topic === "curated" && page) {url = `https://api.pexels.com/v1/curated?page=${page}&per_page=20`}  // Browsing Beyong Home
else if(topic === "curated") {url = `https://api.pexels.com/v1/curated?&per_page=20`} // Homepage
else if(!page) {url = `https://api.pexels.com/v1/search?query=${topic}&per_page=20`} // first page of search result
else {url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}&per_page=20`} // Search Results Beyond First Page

const images: ImagesResults | undefined = await fetchImages(url)

if(!images || images.per_page === 0) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>


const {nextPage, prevPage} = getPrevnextPages(images)

const FooterProps = {topic, page, nextPage, prevPage} 

const photosWithBlur = await addBlurredDataUrl(images)



  return (
  <>
   <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10.5px]">
      {photosWithBlur.map((photo) => (
            <ImgContainer key={photo.id} photo={photo}/>
      ))}
   </section> 
   <Footer {...FooterProps}/>
   </>
  )
}

export default Gallery