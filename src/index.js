import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    button.innerHTML = "点我然后看控制台";
    button.onclick = printMe;
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(button);
    return element;
}

var el = component();
document.body.appendChild(el);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('正在热替换printMe模块...');
        document.body.removeChild(el);
        el = component();
        document.body.appendChild(el);
        printMe();
    })
}