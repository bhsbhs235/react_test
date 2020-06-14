import '../webapp/css/custom.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
 
class MainPage extends React.Component {
 
    render() {
        return <All/>;
    }
 
}

class All extends React.Component{
    constructor(props){
        super(props);
        this.state={ text: ''};
        
        this.textChange=this.textChange.bind(this);
    }

    textChange(text){
        this.setState({
            text:text
        });
    }

    render(){
        return(
            <div>
                <InputText text={this.state.text} onTextChange={this.textChange}/>
                <UpperText text={this.state.text} />
                <LowerText text={this.state.text} />
            </div>
        )
    };
}

class InputText extends React.Component{
    constructor(props){
        super(props);
        this.handlerTextChange=this.handlerTextChange.bind(this);
    }

    handlerTextChange(e){
        this.props.onTextChange(e.target.value);
    }

    render(){
        const text=this.props.text;

        return(
            <form>
                <input
                    type="text"
                    placeholder="Input text"
                    value={text}
                    onChange={this.handlerTextChange} />
            </form>
        );
    }
}

class UpperText extends React.Component{
    render(){
        const tmpText = this.props.text + '';
        const text = tmpText.toUpperCase();

        return (
            <p>{text}</p>
        );
    }
}

class LowerText extends React.Component{
    render(){
        const tmpText = this.props.text + '';
        const text = tmpText.toLowerCase();

        return (
            <p>{text}</p>
        );
    }
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));