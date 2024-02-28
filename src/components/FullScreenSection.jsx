import * as React from "react"; 
import { VStack } from "@chakra-ui/react"; 
import bckgrnd from "../images/noisy-texture2-100x100.png"
 
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, ...boxProps }) => { 
 return ( 
   <VStack 
      backgroundImage={bckgrnd}
      backgroundRepeat="repeat"
      borderBottom= "2px solid #d68f59"
   > 
     <VStack minHeight="100vh" {...boxProps}> 
       {children} 
     </VStack> 

   </VStack> 
 ); 
}; 
 
export default FullScreenSection;