import { getPlaiceholder } from "plaiceholder";
import type { Photo , ImagesResults } from "@/models/Images";

const getBase64 = async (Imageurl: string) => {
    
    try {
        const res = await fetch(Imageurl);
        if(!res.ok) {throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)};

        const buffer = await res.arrayBuffer();

        const {base64} = await getPlaiceholder(Buffer.from(buffer))

        return base64
    } catch (e) {
        if(e instanceof Error) console.log(e.stack)
}}

export default async function addBlurredDataUrl(images: ImagesResults): Promise<Photo[]> {
    const base64Promises = images.photos.map(photo => getBase64(photo.src.original))
    const base64Results = await Promise.all(base64Promises)
    const photosWithBlur: Photo[] = images.photos.map((photos, i)=>{
        photos.blurredDataUrl = base64Results[i]
        return photos
    })
    return photosWithBlur
}