(function(window) {
  
  window.getStyle = function getStyle(x,styleProp){
    if (x.currentStyle)
      var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
      var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
    return y;
  }
  
  function is_in_focus(element){
    return getStyle(element, 'list-style-image') == "url(http://focused.example.com/)"
  }
  
  window.is_in_focus = is_in_focus;
  
})(this);

