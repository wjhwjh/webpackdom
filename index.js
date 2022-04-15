//import _ from 'lodash'
// 模块管理
import './src/css/base.css'
import icon from './src/image/icon.png'
import {print} from './src/js/unit.js'
function component() {
    let element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = "不适用";
    let img = new Image();
    img.src = icon;
    element.appendChild(img);

    let btnEle = document.createElement('button');
    btnEle.innerHTML="这是一个按钮";
    btnEle.onclick = print;
    element.appendChild(btnEle);
    return element;
  }
  
  //document.body.appendChild(component());