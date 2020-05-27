 export function scrollToTriggerAimation(posClass, classStyle) {
  let scrollTop = document.documentElement.scrollTop;
  let pos = document.getElementById(posClass)
  let posOffset = pos&&pos.offsetTop;

  if (!pos || pos.contains(classStyle)) return;

  if(scrollTop >= posOffset) {
     pos.classList.addClass(classStyle)
  }
}