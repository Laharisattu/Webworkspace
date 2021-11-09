import React from  'react'

/* function Greet(){
    return  <h1>Welcome Lahari</h1>
} */
//const Greet = ({name,college}) => {
    const Greet = props => {
        //console.log(props);
        //props.name = 'dxc'
        return (
            <div>
                <h1> hello {props.name} you are from {props.college}</h1>
            </div>
        )
    }


export default Greet