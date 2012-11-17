function genericOnClick(info, tab) {
  var url = info.linkUrl;
  url.match(/\/status\/([0-9]+)/);
  var status_id = RegExp.$1;
  var hateda_str = "twitter:"+ status_id +":detail";
  var clip = document.getElementById("clipboard_area");
  clip.value = hateda_str;
  clip.select();
  document.execCommand("copy");
}

var context = "link";
var title = "Copy link with hateda format";
var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
