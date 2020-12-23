import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo)
    }

    render(){
        if(this.state.hasError === true){
            return(<h2 className='tc pa6'>something's wrong here</h2>)
        }
        return this.props.children;
    }

}
export default ErrorBoundary;