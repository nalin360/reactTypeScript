// import { useState } from 'react'
// import './App.css'

import { FC } from "react"

interface AppProps  {
    title:string
}
// const Apps = ({ title }: { title: string }) => {
//     return <div>App</div>;
//   };
const App:FC<AppProps>= ({title}) => {
    return (
        <>
        <div>{title}</div>
        </>
    )
}

export default App
