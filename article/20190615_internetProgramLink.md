<!--
{
    "title": "ネット配信番組の放送予定を知るためのリンク集",
    "date": "2019-06-15",
    "description": ""
}
-->

最近はネット配信番組が増えていますが、配信サービスも同時に増えたため目的の番組を見つけることが難しくなっている気がします。各種配信サイトの配信予定を簡単に巡回できるようにリンク集を作りました。完全に自分用ですが...💦

# 公式サイトから情報を得る
### YouTube

検索すると出てくる[ライブ](https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig)から配信中のもの、今後の配信予定、過去の配信アーカイブを見ることができます。

### ニコニコ生放送

ニコ生は[トップページ](https://live.nicovideo.jp/)から現在放送中の注目番組と、これからの注目番組、人気の予約されている番組などを見ることができます。

### AbemaTV

頑張って[番組表](https://abema.tv/timetable)を凝視しましょう。特に人気の番組は[ランキング](https://abema.tv/ranking/reservation)から閲覧できます。

### LINE LIVE

[トップページ](https://live.line.me/)の最下部の「配信予定」という欄に今後の公式配信の予定が掲載されています。

### TVer

[LIVE](https://tver.jp/l)よりライブ配信予定の番組を見ることができます。

### OPENREC

[人気のライブ](https://www.openrec.tv/popular/live)から現在配信中の人気番組、[配信予定](https://www.openrec.tv/schedule)から今後配信される公式アカウントの番組を見ることができます。

### FRESH LIVE

現在放送中の番組は[トップページ](https://freshlive.tv/)から、今後の配信予定は[すべての放送予定](https://freshlive.tv/programs/upcoming)から閲覧できます。

### Radiko

[公式サイトの番組表](http://radiko.jp/#!/timetable)も良いですが、[こちらのサイト](http://tools.half-moon.org/radikoepg/)も便利です。Androidスマートフォンでは[ラジ番](https://play.google.com/store/apps/details?id=tsuyogoro.sugorokuon&hl=ja)というアプリを使うことで自由自在に好きな放送局の番組表を見ることができます。

### 文化放送A&G

[公式サイト](https://www.agqr.jp/)の[番組表](https://www.agqr.jp/timetable/streaming.html)から。

# YouTube登録済みチャンネルの配信予定を確認する
[登録チャンネル一覧](https://www.youtube.com/feed/subscriptions)ページで、ブラウザのデベロッパーツールを開き、以下のスクリプトを実行します。ライブ配信・プレミア公開以外の動画が消えて見やすくなります。ページの再読込でもとに戻ります。

```JavaScript
Array.prototype.forEach.call(document.querySelectorAll('ytd-grid-video-renderer'), (el, index) => {
    if(!el.querySelector('#buttons').hasChildNodes() && el.querySelectorAll('ytd-badge-supported-renderer > .badge').length == 0){
        el.parentNode.removeChild(el);
    }
});
```

# バーチャルユーチューバーの配信予定
[バーチャルユーチューバーランキング](https://virtual-youtuber.userlocal.jp/schedules)のライブ配信予定が便利です。

# 音楽ナタリー
音楽ナタリーで「生配信」と[検索](https://natalie.mu/search?query=%E7%94%9F%E9%85%8D%E4%BF%A1&g=music)すれば各ジャンルの歌手のネット配信情報が手に入ります。