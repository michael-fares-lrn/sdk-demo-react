import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './App.css'

import { initItemsApi } from './services';
import Assessment from './components/Assessment';

export default function App({ config }) {
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const items = config.request.items;
    const className = classnames({
        hidden: isLoading || errorMessage
    });

    useEffect(() => {
        if (!isLoading) {
            return;
        }

        // Initilize the API
        initItemsApi(config, '#learnosity-items')
            .then(() => {
                setIsLoading(false);
            })
            .catch(e => {
                setIsLoading(false);
                setErrorMessage(e && e.msg);
            });
    });

    return (
        <div>
            <h1 className="title">Learnosity Items - Inline - React SPA</h1>
            {isLoading && (
                <div>
                    <div className="loader"/>
                    <div className="text-center">Loading</div>
                </div>
            )}

            {errorMessage && (
                <div className="alert alert-danger">
                    <div><strong>Failed to initialize Items API!</strong></div>
                    <div>{errorMessage}</div>
                </div>
            )}

            <div className={className}>
                <Assessment items={items}/>
            </div>
        </div>
    );
}
