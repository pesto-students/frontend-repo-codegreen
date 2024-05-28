import { useEffect, useState} from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions/resize";

export function useCloudinaryImage(imageId) {
    const [image, setImage] = useState(null);  
    const [url,setUrl] = useState('')
    useEffect(() => {
        const cld = new Cloudinary({ cloud: { cloudName: "dda6ipage" } });
        const windowWidth = window.innerWidth;
        setImage(() => {
            if (windowWidth < 768) {
              return cld
                .image(imageId)
                .resize(Resize.scale().width(1000))
                .resize(Resize.crop().width(500).height(700).gravity("center"))
                .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
                .quality("auto");
            }
      
            return cld
              .image(imageId)
              .resize(Resize.scale().width(1200))
              .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
              .quality("auto");
          });

          setUrl('https://res.cloudinary.com/dda6ipage/image/upload/' + imageId);
    }, [imageId]);
   
    
       return {
        image,
        url,
    }
}