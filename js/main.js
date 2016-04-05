$(function(){
  $(".photos.anim img").each(function(){
    window.setTimeout(function(){
      $(this).addClass('show');
    }.bind(this), Math.random() * 700);
  });

  $('a.fullsizable').fullsizable({
    detach_id: 'wrapper'
  });
});
