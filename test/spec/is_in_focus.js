describe('is_in_focus', function () {
  
   //ELEMENTS capable of being focused on
  var ELEMENTS = ['a_link','an_input','a_radio_button','a_checkbox','a_button','a_submit','a_textarea'];
  
  for (var i=0; i < ELEMENTS.length; i++) (function(id){
    
    describe('called on '+id.replace(/_+/g,' '), function () {

      it('should return false when the element is not in focus', function() {
        var element = document.getElementById(id);
        document.body.focus();
        expect(is_in_focus(element)).toEqual(false);
      });

      it('should return true when the element is in focus', function() {
        var element = document.getElementById(id);
        element.focus();
        expect(is_in_focus(element)).toEqual(true);
      });

    });
    
  })(ELEMENTS[i]);

  
});