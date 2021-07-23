var i =40;
while( i < 5000 ) {
  $(".top_cloud").animate({right: i});
  $(".bottom_cloud").animate({left: i});
  i = i+60;
  if(i>1499)i=0;

}
