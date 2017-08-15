import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {red500, green500, orange500} from 'material-ui/styles/colors';


function matchTemplate(template, value){
    let regexr = '';
    /* if value is empty - we have nothing to validate and we must return to initial state */
    if(value==="")
        return "";
    /* by template - choose apropriate regex */
    switch (template){
        case "email":
            regexr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})) *$/;
            break;
        case "string":
            regexr = /^([a-zA-Z\s])*/g;
            break;
        case "phone":
            regexr = /^\+[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{3} *$/g
            break;
        case "numeric":
            regexr = /^[0-9]*$/;
            break;
    }
    /* match */
    let match  = value.match(regexr);
    /* compare to value */
    return match && match[0] === value;
}

class TextVariations extends Component {

    state = {
        value:'',
        /* 2 cases - success and error */
        innerState:"",
        ...this.props
    };

    constructor(props) {
        super(props);
        /* init function with template */
        this.matchTemplate = matchTemplate.bind(this,this.props.template);
    }

    handleChange = (event) => {
        /* check by template and set innerState */
        let {value} = event.target;
        let innerState = this.matchTemplate(value);

        this.setState({
            value,
            innerState
        });
    };

    render() {
        let {successText='success', errorText='failure', innerState} = this.state;

        let color = "";
        /* that variable is used to set error or success text */
        let setText = "";
        /* we want to change color and text depend on inner state and value */
        if(innerState){
            /*success*/
            color = green500;
            setText = successText;
        }else if(innerState === ''){
            /* init state */
            color = orange500;
        }else{
            /* failure */
            color = red500;
            setText = errorText;
        }

        const styles = {
            errorStyle: {
                color: color,
            },
            underlineStyle: {
                borderColor: color,
            },
            floatingLabelStyle:{
                color: color,
            },
            floatingLabelFocusStyle:{
                color: color,
            }
        };

        return <TextField
            errorText={setText}
            onChange={this.handleChange}
            value={this.state.value}
            name="input"
            floatingLabelText={this.props.label}
            {...styles}
        />
    }

}

TextVariations.propTypes = {
    template: PropTypes.oneOf(['numeric', 'string', 'email', 'phone']).isRequired,
    label:PropTypes.string.isRequired,
};

export default TextVariations;

