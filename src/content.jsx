import { createContext, useContext, useEffect, useState } from "react";
import { siteContent as localContent } from "./data";

const ContentContext = createContext(localContent);

// Stable CMS boundary: set VITE_CMS_ENDPOINT later to an API returning this same shape.
export function ContentProvider({children}) {
  const [content,setContent] = useState(localContent);
  useEffect(() => {
    const endpoint=import.meta.env.VITE_CMS_ENDPOINT;
    if(!endpoint) return;
    const controller=new AbortController();
    fetch(endpoint,{signal:controller.signal}).then(r=>{if(!r.ok) throw new Error(`CMS ${r.status}`);return r.json()}).then(remote=>{
      // Preserve exported collection references used by existing page templates.
      Object.entries(remote).forEach(([key,value])=>{
        if(Array.isArray(value)&&Array.isArray(localContent[key])) localContent[key].splice(0,localContent[key].length,...value);
        else if(value&&typeof value==="object"&&localContent[key]) Object.assign(localContent[key],value);
      });
      setContent({...localContent});
    }).catch(error=>{if(error.name!=="AbortError") console.warn("Using local portfolio content.",error)});
    return ()=>controller.abort();
  },[]);
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}
export const useContent=()=>useContext(ContentContext);
