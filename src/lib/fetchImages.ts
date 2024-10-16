import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env";
import { cache } from "react";

export const fetchImages = async (url: string): Promise<ImagesResults | undefined> => {
  try {
      const res = await fetch(url,{
        headers: {
            Authorization: env.API
        },
        cache: "no-cache"
      })
      if(!res.ok) throw new Error("Failed to fetch images!\n");
      const ImagesResults: ImagesResults = await res.json()
      // console.log(ImagesResults)
      // Parse data with Zod Schema
      const ParseData = ImagesSchemaWithPhotos.parse(ImagesResults)
      if(ParseData.total_results === 0) return undefined
      return ParseData
  }catch (e) {
      if(e instanceof Error) console.log(e.stack)
    
  }  
}