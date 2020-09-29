
  var Links = {
    setColor: function(color){
      $('a').css("color",color);
    }
  };
  var Body = {
    setColor: function(color){
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
  };
  function nightDayHandler(self){
    if (self.value === 'night') {
      Body.setColor('white');
      Body.setBackgroundColor('black');
      self.value = 'day';
      Links.setColor('white');
    } else {
      Body.setColor('black');
      Body.setBackgroundColor('white');
      self.value = 'night';
      Links.setColor('black');
    }
  };
