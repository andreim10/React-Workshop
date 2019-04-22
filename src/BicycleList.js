import React from "react";
import Bicycle from "./Bicycle";

export default class BicycleList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.bicycles.map(x => 
                    <Bicycle 
                        key={x.name}
                        name={x.name}
                        description={x.description}
                        isChecked = {x.isChecked}
                        photo = {x.image}
                    />
                )}
            </div>
        );
    }
}