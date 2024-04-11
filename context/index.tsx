"use client"
import { createContext, useState , useContext} from 'react';

const AppContext = createContext({
  text: "hello"
})


export default function AppWrapper ({
    children,
}: {
    children: React.ReactNode;
}) {
  const [state, setState] = useState({
    text: "hello"
  })

  return (
    <>
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
    </>
  )
};

export function  useAppContext(){
  return useContext(AppContext)
}
