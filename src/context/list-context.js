import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const ListContext = createContext();

const ListProvider = ({children}) => {
    const [data, setData] = useState("");
  useEffect(() => {
    (
      async () =>{
        try{
          const response = await axios.get("https://dummyjson.com/users")
          setData(response.data.users);
        }
        catch(err){
          console.log("Something went wrong");
        }
      }
    )()
  }, [])
    return (
    <ListContext.Provider value={{data, setData}}>
        {children}
    </ListContext.Provider>
    )
}


const useList = () => useContext(ListContext);

export {useList, ListProvider};