import {useState} from "react";

//const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
 const [isLoading, setLoading] = useState(false);
 const [response, setResponse] = useState(null);

 const submit = async (url, data) => {
  //  const random = Math.random();
  //  setLoading(true);
   try {
  //    await wait(2000);
  //    if (random < 0.5) {
  //      throw new Error("Something went wrong");
  //    }
     setResponse({
       type: 'success',
       message: `Thanks for your submission ${data.firstName}, BUT THIS IS NOT CONNECTED TO SOMEWHERE, MAYBE SEND ME AN E-MAIL?`,
     })
   } catch (error) {
     setResponse({
       type: 'error',
       message: 'Something went wrong, please try again later!',
     })
   }
  // finally {
  //    setLoading(false);
  //  }
 };

 return { isLoading, response, submit };
}

export default useSubmit;