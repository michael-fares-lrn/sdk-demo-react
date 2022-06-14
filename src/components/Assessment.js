import React, { useState } from 'react';

import { dispatchItemsAppMethod } from '../services';

import PaginatedItems from './PaginatedItems';

export default function Assessment({ items = [] }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const perform = action => {
        setIsProcessing(true);

        dispatchItemsAppMethod(action, {
            success() {
                setIsProcessing(false);
                alert(`${action.toUpperCase()} successfully!`);
            },
            error() {
                setIsProcessing(false);
                alert(`Failed to ${action.toUpperCase()}.`);
            }
        });
    };

    return (
        <div className="assessment-wrapper">
            {/* Toolbar */}
            <nav className="navbar navbar-light d-flex justify-content-around">
                <div>
                    <button type="button" className="btn btn-secondary" title="Previous Item"
                            onClick={() => setSelectedIndex(selectedIndex + -1)}
                            disabled={selectedIndex <= 0}>
                        <i className="fas fa-arrow-circle-left"/>
                    </button>
                    <button type="button" className="btn btn-secondary" title="Next Item"
                            onClick={() => setSelectedIndex(selectedIndex + 1)}
                            disabled={selectedIndex >= items.length - 1}>
                        <i className="fas fa-arrow-circle-right"/>
                    </button>
                </div>
                <div>
                    <strong>Item {selectedIndex + 1}</strong>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" title="Save"
                            disabled={isProcessing} onClick={() => perform('save')}>
                        Save
                    </button>
                    <button type="button" className="btn btn-success" title="Submit"
                            disabled={isProcessing} onClick={() => perform('submit')}>
                        Submit
                    </button>
                </div>
            </nav>

            {/* Overlay when performing async op like saving/submitting */}
            {isProcessing && (
                <div className="overlay-wrapper">
                    <div className="loader"/>
                    <div className="text-center">Processing</div>
                </div>
            )}

            {/* Main Assessment content */}
            <PaginatedItems items={items} selectedIndex={selectedIndex}/>
        </div>
    );
}