import _ from 'lodash';
import printMe from './print';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    button.innerHTML = "点我然后看控制台";
    button.onclick = printMe;
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(button);
    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('正在热替换printMe模块...');
        printMe();
    })
}