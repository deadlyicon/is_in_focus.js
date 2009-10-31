describe('is_in_focus', function () {
  it('should return false when the element is not in focus', function() {
    var input = document.getElementById('an_input');
    document.body.focus();
    expect(is_in_focus(input)).toEqual(false)
  });
  
  it('should return true when the element is in focus', function() {
    var input = document.getElementById('an_input');
    input.focus();
    expect(is_in_focus(input)).toEqual(true)
  });
  
});