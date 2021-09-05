function navopen() { //open navigation
  let navcts=document.getElementsByTagName('nav-cts')[0];
  document.getElementsByTagName('nav-btn')[0].setAttribute('onclick','navclose();');
  navcts.setAttribute('id','navbtn');
}
function navclose() { //close navigation
  let navcts=document.getElementsByTagName('nav-cts')[0];
  navcts.removeAttribute('id');
  document.getElementsByTagName('nav-btn')[0].setAttribute('onclick','navopen();');
}

document.body.innerHTML=`<header id="hdr">
  <nav-btn onclick="navopen();"></nav-btn>
  <span></span>
  <a href="/mncr/">
    monochrome Project.
  </a>
</header>
<nav-cts>
  <developer-detail>
    <h2 style="font-size: 35px;">Sorakime</h2>
    奈良県在住の年齢顔職業不詳の謎の人。変人だったり暇人だったりって言われても仕方がない人。<br>
    たまに作曲とかしてるけど、あまり上手くはない。Web技術が好きですかね。<br>
    <a href="https://www.youtube.com/channel/UCtTYek-N2sjl_9z-GS-IjAA">YouTube</a>とか、
    <a href="https://sorakime.theblog.me/">ブログ</a>、<br>
    <a href="https://instagram.com/sorakime_">Instagram</a>とか。あとは<br>
    <a href="https://github.com/Sorakime">GitHub</a>。あ、そうそう。<br>
    <a href="https://twitter.com/Sorakime_">Twitter</a>もやってるよ。<br>
  </developer-detail>
  <pages-view>
    <h2>Pages List</h2>
    <a href="/mncr/about">About</a>
    <a href="/mncr/project/">Projects</a>
</nav-cts>
${document.body.innerHTML}`;
