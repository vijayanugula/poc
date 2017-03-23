import React from 'react/addons';
import AppRoot from './components/AppRoot';

class App {

    constructor(options) {
        this.state = options.state;
    }


    render(element) {

        var appRootElement = React.createElement(AppRoot, {
            state: this.state
        });

        if (element) {
            React.render(appRootElement, element);
            return;
        }

        // render to string
        return React.renderToString(appRootElement);
    }

    /*
     * @method render
     * @param {DOM} element
     */
    renderToDOM(element) {

        this.render(element);
    }

    /*
     * @method renderToString
     * @returns {String}
     */
    renderToString() {
        return this.render();
    }
}

export default App;