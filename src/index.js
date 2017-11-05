import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    // lodash由本地加载
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 添加图片到已有div, Icon会自动打包成准确路径
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(111, Data);

    return element;
}

document.body.appendChild(component());