// import React, {useEffect} from 'react'
// import '../App.css'

// import {useSelector} from 'react-redux'

// const ClickedTime = () => {
//   const count = useSelector(state => state.count)
//   const lastChange = new Date().toLocaleString()
//   useEffect(() => {    
//     const randomHex = '#'+ Math.floor(Math.random()*16777215).toString(16)
//     document.querySelector(".ClickedTime").style.color = randomHex
//   }, [count])
//   return (
//     <div className="ClickedTime">
//       <h3>Counter Last Changed @ {lastChange}</h3>
//     </div>
//   )
// }

// export default ClickedTime
