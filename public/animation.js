const data = document.getElementById('accordian');
const picks = data.getElementsByClassName('active');
const activeWidthVerticalHeight = picks[0].offsetHeight;
const activeWidthVerticalWidth = picks[0].offsetWidth;
document.querySelector('.selector-active').style.top = picks[0].offsetTop + "px";
document.querySelector('.selector-active').style.left = picks[0].offsetLeft + "px";
document.querySelector('.selector-active').style.height = activeWidthVerticalHeight + "px";
document.querySelector('.selector-active').style.width = activeWidthVerticalWidth + "px";
/* console.log("top", picks[0].offsetTop);
console.log("left", picks[0].offsetLeft);
console.log("height", activeWidthVerticalHeight);
console.log("width", activeWidthVerticalWidth); */
const setCoord = (top, left, height, width)=>{
    const nodeSelect = document.querySelector('.selector-active');
        nodeSelect.style.top = top + "px";
        nodeSelect.style.left = left + "px";
        nodeSelect.style.height = height + "px";
        nodeSelect.style.width = width + "px";          
}
document.getElementById('accordian')?.addEventListener('click', (e)=>{
    /* console.log(e.target.nodeName); */
    const data = document.getElementById('accordian');
            const picks = data.getElementsByClassName('active');
            const activeWidthVerticalHeight = picks[0].offsetHeight;
            const activeWidthVerticalWidth = picks[0].offsetWidth;

    switch (e.target.nodeName) {
        case 'A':                       
            data.getElementsByClassName('active')[0].classList.remove('active');
            const list1 = e.target.parentNode;        
            list1.classList.add('active');
            setCoord(picks[0].offsetTop, picks[0].offsetLeft, activeWidthVerticalHeight, activeWidthVerticalWidth);
          break;
        case 'I':           
         
            data.getElementsByClassName('active')[0].classList.remove('active');
            const list2 = e.target.parentNode.parentNode;        
            list2.classList.add('active');
            setCoord(picks[0].offsetTop, picks[0].offsetLeft, activeWidthVerticalHeight, activeWidthVerticalWidth);
          break;
        case 'SPAN':            
          data.getElementsByClassName('active')[0].classList.remove('active');
          const list3 = e.target.parentNode.parentNode;     
          list3.classList.add('active');
          setCoord(picks[0].offsetTop, picks[0].offsetLeft, activeWidthVerticalHeight, activeWidthVerticalWidth);
        break;           
      }
});
document.querySelector('.form-input').addEventListener('focus', (e)=>{
 console.log();
 e.target.parentNode.style.backgroundColor= "white";
});
document.querySelector('.form-input').addEventListener('focusout', (e)=>{
  console.log();
  e.target.parentNode.style.backgroundColor= "transparent";
});

document.getElementById("icon-ambur").addEventListener('click', (e)=>{
  e.target.nextElementSibling.classList.toggle('check');

  const mainCont = document.getElementById("contMain");
  mainCont.classList.toggle("lg:w-10/12");
  mainCont.classList.toggle("lg:w-11/12");
  
  const data = document.getElementById('accordian');
  let picks = data.getElementsByClassName('active');
  let activeWidthVerticalHeight = picks[0].offsetHeight;
  let activeWidthVerticalWidth = picks[0].offsetWidth;
  let active = document.querySelector('.selector-active');
  
  active.style.top = picks[0].offsetTop + "px";
  active.style.left = picks[0].offsetLeft + "px";
  active.style.height = activeWidthVerticalHeight + "px";
  active.style.width = activeWidthVerticalWidth + "px";
  /* transition-duration: 3s; */
})