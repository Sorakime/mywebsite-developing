window.addEventListener('DOMContentLoaded',()=>{
  document.body.innerHTML=`<header><h1>Sorakime<a href="/mncr/" style="font-size: 10px;">Do you want to go to mncrS?</a></h1></header>
  ${document.body.innerHTML}`
  document.querySelector('main').innerHTML=`${document.querySelector('main').innerHTML}
  <footer>
    <div>
      <span>
        <h4>ページ</h4>
        <p><a href="/me/sitemap">サイトマップ</a></p>
        <p><a href="/me/music/">音楽</a></p>
      </span>
      <span>
        <h4>SNSなど</h4>
        <p><a href="https://twitter.com/Sorakime_" target="_blank">Twitter</a>
        <p><a href="https://www.instagram.com/sorakime_">Instagram</a></p>
        <p><a href="https://www.youtube.com/channel/UCtTYek-N2sjl_9z-GS-IjAA"   arget="_blank">YouTube</a></p>
      </span>
      <span>
        <h4><span></span></h4>
        <p><a href="https://note.com/sorakime">note</a></p>
        <p><a href="https://anchor.fm/Sorakime">Anchor</a></p>
        <p><a href="https://github.com/Sorakime">GitHub</a></p>
    </span>
      <span>
        <h4>所属グループ</h4>
        <p><a href="https://escgrp.org">Escape Group</a></p>
        <p><a href="https://vcborn.com">VCborn</a></p>
      </span>
      <span>
        <h4>必読</h4>
        <p><a href="/me/agreement">規約など</a></p>
    </div>
    <small>Copyright 2021 Sorakime All rights reserved.</small>
  </footer>`;
})
