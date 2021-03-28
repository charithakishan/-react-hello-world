import React from 'react'
const Hello=() =>{
// using jsx
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Charitha</h1>
    //     </div>
    // )
//without jsx
return React.createElement(
    'div',
    {id:'hello',className:'dummyClass'},
    React.createElement('h1',null,'Hello charitha'))


}
export default  Hello