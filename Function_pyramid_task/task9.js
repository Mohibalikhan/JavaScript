// task 9: 
// convert task 8 in switch statment.
import { rightpyramid, leftPyramid, centerPyramid } from './task8.js';

function createswitchPyramid(row, symbol, type) {
    switch (type) {
        case 'right':
            rightpyramid(row, symbol);
            break;
        case 'left':
            leftPyramid(row, symbol);
            break;
        case 'center':
            centerPyramid(row, symbol);
            break;
        default:
            console.log('Invalid.');
    }   
}
createswitchPyramid(5, '#', 'right');
createswitchPyramid(5, '@', 'left');
createswitchPyramid(6, '$', 'center');