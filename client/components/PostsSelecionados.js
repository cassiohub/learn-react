import React, { Component, PropTypes } from 'react';

class PostSelecionados extends Component {

    render() {
        return (
            <div>
            	Posts Selecionados: 
            	{this.props.selecionadosStore.map((p, k) => <p key={k}>{p.caption}</p>)}
            	<hr/>
            </div>
        );
    }
}

export default PostSelecionados;
