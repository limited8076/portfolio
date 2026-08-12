import  { useEffect, useState } from 'react'
import getPortfolioData from './PortfolioData'

const dummydata = getPortfolioData()
function Databridge() {

    const [data , setData] = useState(dummydata)
    useEffect(() => {
     const Frontmessage = (event) => {
        if(event.data?.type === "UPDATE_PORTFOLIO_DATA"){
           const payload = event.data.payload;
           setData(prev => {
             const merged = { ...prev };
             Object.keys(payload).forEach(section => {
               merged[section] = { ...prev[section], ...payload[section] };
             });
             return merged;
           });
        }
    };

    window.addEventListener("message" , Frontmessage)

    if (window.parent !== window) {
	window.parent.postMessage({ type: "IFRAME_READY" }, "*");
	}

    return () => window.removeEventListener("message" , Frontmessage)
    },[])
  
    return data;

}

export default Databridge