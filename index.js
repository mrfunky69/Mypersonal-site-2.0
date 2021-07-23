var i =40;
while( i < 1500 ) {
  $(".top_cloud").animate({right: i});
  $(".bottom_cloud").animate({left: i});
  i = i+60;

}
