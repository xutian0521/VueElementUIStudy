import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    var element= document.createElement('div');
    // Lodash，现在由此脚本导入
    element.innerHTML= _.join(['Hello','webpack'],' ');
    //加载css
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    //加载图片
    var myIcon=new Image();
    myIcon.src=Icon;
    element.appendChild(myIcon);
    
    console.log(Data);
    return element;
}
var div=component();
document.body.appendChild(div);