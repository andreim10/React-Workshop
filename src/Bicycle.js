import * as React from 'react';
import './Bicycle.css';

export default class Bicycle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpened: false,
            hasBeenRead:false
        }
        this.openDescription = this.openDescription.bind(this);
        this.markAsRead = this.markAsRead.bind(this);
    }

    render(){
        return(
            <div>
                <div className="bicycle">
                    <button type="button" onClick={() => this.openDescription()}>{this.props.name}</button>
                    <input type="checkbox" defaultChecked={this.props.isChecked} disabled={true} checked={this.state.hasBeenRead}/>
                    <div hidden={!this.state.isOpened}>{this.props.description}
                        <img src={this.props.photo}/>
                    </div>
                </div>
            </div>
        )
    }

    openDescription(){
        this.setState({
            isOpened: !this.state.isOpened
        })
        this.markAsRead();
    }
    markAsRead(){
        this.setState({
            hasBeenRead:true
        })
    }
}