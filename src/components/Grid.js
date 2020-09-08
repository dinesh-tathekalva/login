import React, { Component, Fragment } from 'react';
import logo from './SC.png'


class Grid extends Component {
    constructor(){
        super()
        this.state = {
            flag: true
        }
    }

    clickHandler = () =>{
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        let plus = null 
        if(this.state.flag){
            plus = (<h1> + </h1>)
        }
        
        return (
            <Fragment>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div onClick={this.clickHandler} style={{width: '9em', height: '9em', border: '1px solid #03a9f4', justifyContent: 'center', margin: '1em', cursor: 'pointer', backgroundColor: '#b3e5fc'}}>
                        {plus}
                        <img src={logo} alt="Logo" width='100%' height='100%'/>
                    </div>
                    <div style={{width: '9em', height: '9em', border: '1px solid #03a9f4', justifyContent: 'center', margin: '1em', cursor: 'pointer', backgroundColor: '#b3e5fc'}}>
                        {plus}
                        <img src={logo} alt="Logo" width='100%' height='100%'/>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '9em', height: '9em', border: '1px solid #03a9f4', justifyContent: 'center', margin: '1em', cursor: 'pointer', backgroundColor: '#b3e5fc'}}>
                        {plus}
                        <img src={logo} alt="Logo" width='100%' height='100%'/>

                    </div>
                    <div style={{width: '9em', height: '9em', border: '1px solid #03a9f4', justifyContent: 'center', margin: '1em', cursor: 'pointer', backgroundColor: '#b3e5fc'}}>
                        {plus}
                        <img src={logo} alt="Logo" width='100%' height='100%'/>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Grid
