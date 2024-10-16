import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props  = {
    photo: Photo
}

export const ImgContainer = ({photo}: Props) => {

    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio);
    const photoSpans = Math.ceil(galleryHeight / 10) + 1 ;

    return (
        <div 
        className="w-[250px] justify-self-center"
        style={{gridRow: `span ${photoSpans}`}}> 
        <div className="rounded-xl overflow-hidden group">  
        <Image 
        id="image"
        className="group-hover:opacity-90"
        src={photo.src.original}
        alt={photo.alt}
        width={photo.width}
        height={galleryHeight}
        sizes="250px"
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
        />
        </div>  
        </div>
    )
}