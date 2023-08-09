import React from "react";

class Cycle extends React.Component {

    state = {
        title: "Life Cycle React JS 😊😂"
    }

    handleChange = () => {
        this.setState({title: 'Cycle'})
    }

    componentDidMount() {
        console.log("DidMount => ", 1)
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate => ", 2)
        return true
    }

    componentDidUpdate() {
        console.log("componentDidUpdate => ", 3)
        return false
    }

    render(){

        const {title} = this.state

        return(
            <>
                <h1>{title}</h1>
                <button onClick={this.handleChange}>Change Title</button>
            </>
        )
    }
}

export default Cycle