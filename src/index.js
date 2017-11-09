
function getComponent() {
    return import(/* webpackChunkName: "hahaha" */'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => '动态引入失败了');
} 

getComponent().then(component => {
    document.body.appendChild(component);
});