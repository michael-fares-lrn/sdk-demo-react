import React from 'react';
import classnames from 'classnames';

import LRNItem from './LRNItem';

export default function PaginatedItems({ items = [], selectedIndex = 0 }) {
    return (
        <div id="learnosity-items">
            {items.map((item, index) => {
                const reference = typeof item === 'string' ? item : item.reference;
                const isActive = selectedIndex === index;
                const className = classnames({
                    hidden: !isActive,
                    active: isActive
                }, 'assessment-item');

                return (
                    <div key={reference} className={className}>
                        <LRNItem reference={reference}/>
                    </div>
                );
            })}
        </div>
    )
}