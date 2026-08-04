import  { useEffect, useState } from 'react'
import getPortfolioData from './PortfolioData'

const dummydata = getPortfolioData()
function Databridge() {

    const [data , setData] = useState(dummydata)
    useEffect(() => {
     const Frontmessage = (event) => {
        if(event.data?.type === "UPDATE_PORTFOLIO_DATA"){
           setData(event.data.payload)
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