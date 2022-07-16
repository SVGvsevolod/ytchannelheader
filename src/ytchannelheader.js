var channelhead = document.getElementsByClassName("channel-header")[0];
var header = document.getElementById("c4-primary-header-contents");
var banner = document.getElementById("c4-header-bg-container");
var links = document.getElementById("header-links");
var updateBanner = function(){
banner.appendChild(header);
header.appendChild(links);
};
window.onpopstate=history.onpushstate=function(e){updateBanner()};