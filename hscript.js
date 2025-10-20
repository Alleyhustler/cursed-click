let linkList = '<ul> <li><a href="/index.html">Home</a></li>' + 
'<li><a href="/about.html">About</a></li>' +
'<li><a href="/updates.html">Updates</a></li>' +
'<li><a href="/art-gallery.html">Art</a></li>' +
'<li><a href="/comics/comic-directory.html">Comics</a></li>' +
'<li><a href="/extras/extra-directory.html">Extras</a></li>' +
'<li><a href="/scrapbook.html">Scrapbook</a></li>' +
'<li><a href="/guest/guestbook.html">Guestbook</a></li> </ul>';

if (document.getElementById("header-links")) {
  document.getElementById("header-links").innerHTML = linkList;
}

