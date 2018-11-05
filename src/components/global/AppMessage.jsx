import React from 'react'

class AppMessage extends React.PureComponent {
    render() {
        const {Msg} = this.props;
        if (!Msg) return null;
        return <h2 style={{
            fontWeight: '300',
            color: 'rgba(0,0,0,0.6)'
        }}>{Msg}</h2>
    }

}

export default AppMessage;