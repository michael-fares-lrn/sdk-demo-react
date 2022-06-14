
let itemsApp;

export function initItemsApi(config, domHook) {
    return new Promise((resolve, reject) => {
        itemsApp = window.LearnosityItems.init(config, domHook, {
            readyListener() {
                resolve(root);
            },
            errorListener(error) {
                reject(error);
            }
        });
    });
}

export function dispatchItemsAppMethod(method, ...args) {
    if (!itemsApp) {
        console.error('Items App has not been initialized');

        return;
    }

    return itemsApp[method].call(itemsApp, ...args);
}