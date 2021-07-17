let data = document.getElementById('accordian');
let picks = data.getElementsByClassName('active');
let activeWidthVerticalHeight = picks[0].offsetHeight;
let activeWidthVerticalWidth = picks[0].offsetWidth;
let coords = { top: picks[0].offsetTop, left: picks[0].offsetLeft };
let itemPosVerticalTop = coords;
let itemPosVerticalLeft = coords;
document.querySelector('.selector-active').style.top = picks[0].offsetTop + "px";
document.querySelector('.selector-active').style.left = picks[0].offsetLeft + "px";
document.querySelector('.selector-active').style.height = activeWidthVerticalHeight + "px";
document.querySelector('.selector-active').style.width = activeWidthVerticalWidth + "px";

document.getElementById('accordian')?.addEventListener('click', (e)=>{
    let data = document.getElementById('accordian');
    if(e.target.nodeName == 'A'){                      
        data.getElementsByClassName('active')[0].classList.remove('active');
        const list = e.target.parentNode;
        console.log("A",list);
        list.classList.add('active');
        document.querySelector('.selector-active').style.top = picks[0].offsetTop + "px";
        document.querySelector('.selector-active').style.left = picks[0].offsetLeft + "px";
        document.querySelector('.selector-active').style.height = activeWidthVerticalHeight + "px";
        document.querySelector('.selector-active').style.width = activeWidthVerticalWidth+ "px";     
    }
    if (e.target.nodeName == 'svg') {
        data.getElementsByClassName('active')[0].classList.remove('active');
        const list = e.target.parentNode.parentNode;
        console.log('svg', list);
        list.classList.add('active');
        document.querySelector('.selector-active').style.top = picks[0].offsetTop + "px";
        document.querySelector('.selector-active').style.left = picks[0].offsetLeft + "px";
        document.querySelector('.selector-active').style.height = activeWidthVerticalHeight + "px"; 
        document.querySelector('.selector-active').style.width = activeWidthVerticalWidth+ "px";  
    }
    /* if(e.target.nodeName == 'svg'){
        console.log(svg);
    } */
      
});