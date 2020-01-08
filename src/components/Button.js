import React from 'react';

class Button extends React.Component {
    render() {
        return <button onClick = { this.props.onClick }
        className = 'button' > { this.props.label } </button>
    }
}

export default Button;