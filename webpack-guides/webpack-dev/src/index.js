import _ from 'lodash';
import printMe from './print.js';

 if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }
    

function component() {
    var element= document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML= _.join(['Hello','webpack'],' ');

    btn.innerHTML=  'Click me and check the console!';
    btn.onclick= printMe;
    
    element.appendChild(btn);
    return element;
}
var div=component();
document.body.appendChild(div);


 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('模块热替换!');
     printMe();
   })
 }