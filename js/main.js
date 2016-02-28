$(function(){
  $(".photos.anim img").load(function(){
    $(this).addClass('show');
  })

  $('a.fullsizable').fullsizable({
    detach_id: 'wrapper'
  });
});
