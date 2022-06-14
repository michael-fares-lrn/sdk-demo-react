
import React from 'react';

export default class LRNItem extends React.Component {
    // Very important, we should not allow React to control the content of LRN Item once it is rendered on the page
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { reference } = this.props;

        return <span className="learnosity-item" data-reference={reference} />;
    }
}