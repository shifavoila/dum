import React from 'react'

const Func = (props) => {
    return (
        <div>
            { props.isLogged ?
            (<button onClick={props.onLogout}>Logout</button>) :
            (<button onClick={props.onLogin}>Login</button> )}
        </div>
    );
        
    // return (
    //     props.status ? 
    //     <h1>Status is active</h1>
    //     :
    //     <h1> Inactive</h1>
    // )
    // if(props.status) {
    //     return <h1>{props.name}</h1>
    // } else {
    //     return <h1>Unavailable</h1>
    // }

}

export default Func
