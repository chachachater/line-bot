

<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="https://qr-official.line.me/sid/L/807tbena.png" alt="QRCode">
  </a>
  <p>(可以用 line 掃描來直接使用)</p>
  <h3 align="center">個人用 Line-bot</h3>
</div>


<!-- ABOUT THE PROJECT -->
## line-bot 介紹

![Animation](https://user-images.githubusercontent.com/71329979/138020126-e0e189b3-af43-414d-a4c2-88fd16339c16.gif)

✨智慧手機已經成為大多數人日常生活中不可或缺的一部分，每天定期滑 FB、IG、twitter、line 之類的社交軟體更是不可少的日常任務( •̀ ω •́ )✧。
為了能夠定期、及時取得最新資訊，但又不想每個社群 app 都慢慢滑，只想透過 line 就可以取得其他社群 app 的通知，這篇系列文章就是想解決這個問題，白話來講就是想以更懶的方式來滑手機。
本文以 twitter 爬蟲為範例，示範如何寫出一個 「每天晚上 12 點定期去爬某位推特的最新三篇推文，並且通過 line 來回傳資料」 的 line bot。

更詳細的開發過程方法請見👉[這裡](https://blog.errorbaker.tw/posts/umer/line-bot/)


### Built With

部署在 1 年期限的AWS EC2 Ubuntu 主機上，使用 python 的 TWINT 套件定期取得資料並回傳給 line-bot，接著 lint-bot 透過 express 寫成的 api 來傳送資料給使用者。

* [TWINT - Twitter Intelligence Tool](https://github.com/twintproject/twint)
* [Expressjs](https://github.com/expressjs/express)
