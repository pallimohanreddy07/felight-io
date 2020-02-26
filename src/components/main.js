import React,{Component} from 'react';
import list from './list';

class main extends Component{
    render()
    {
        const{item,input}=this.props
        return(
            <div className="text-box">
                <input className="text-box-input" placeholder=" Add a Text..." value={item} onClick={Input}></input><button type="button">+Add</button>
            </div>
        )
    }
}