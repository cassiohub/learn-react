import React, { Component, PropTypes } from 'react';

import Photo from './Photo';
import PostsSelecionados from './PostsSelecionados';

//<PostsSelecionados selecionadosStore={this.props.selecionadosStore} />

class PhotoGrid extends Component {
    render() {
        return (
    			<div className="photo-grid">
    				{this.props.posts.map((p, i) => {
    					return (
    						<Photo { ...this.props } post={p} key={i} i={i} />
    					)
    				})}
    			</div>
        );
    }
}

export default PhotoGrid;
