import React , {component, Component} from "react";

class Hero extends Component{
    state = {heroId: 99};
    render(){
        return (<React.Fragment>
            <h1>Avengers incoming ... </h1>
            <button>Click Here {this.state.heroId}</button>
            </React.Fragment>
        );
    }
}

export default Hero;