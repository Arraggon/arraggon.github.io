var ua = navigator.userAgent.toLowerCase();
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
var alertmessage="电脑端食用，效果更佳哦~~"
var once_per_session=1
function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) {
      offset += search.length
      end = document.cookie.indexOf(";", offset);
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}
function alertornot(){
if (get_cookie('alerted')==''){
loadalert()
document.cookie="alerted=yes"
}
}
function loadalert(){
alert(alertmessage)
}
if (once_per_session==0)
loadalert()
else
alertornot()
    }
