<!--
{
    "title": "LinuxのカーネルをビルドしてVirtualBoxで動かしてみた",
    "date": "2019-06-01",
    "description": "GMO AD Partners様の記事を参考にカーネルをビルドしてみました。ちょっとした忘備録です。"
}
-->

LinuxカーネルをビルドしてVirtualBoxで動かすチャレンジ、以前失敗していたのでもう一度試してみた。参考にしたサイトのリンクとともに、（個人的に）ハマった・ハマりそうなところの解決法を忘備録として書いておきます。

# Linux仮想マシンの用意

LinuxカーネルソースをコンパイルするためにVMWare Workstation Player上のLinux仮想マシンを用意する。

Linuxカーネルをビルドするために、Lubuntuのディスクイメージをダウンロードする。最新の19.04をDLした。

https://lubuntu.net/downloads/

VMWare Workstation Playerで仮想マシンを新規作成してインストールする。適当に2コア・RAM2GBくらいを割り当てる。自分の環境ではRAM1GBではメモリ不足でFirefoxが満足に動作しなかった（というか完全にハングアップした）。
デスクトップ環境もLXDEからLXQtへと大幅に変わっていてびっくりした。近代的になった気がします。

apt-getする前に接続先のサーバを国内に変更

```
sudo sed -i.bak -e "s%http://[^ ]\+%http://ftp.jaist.ac.jp/pub/Linux/ubuntu/%g" /etc/apt/sources.list
```

パッケージをアップデート

```
sudo apt update
sudo apt upgrade
```

open-vm-tools（VMWare Toolsの代わり）をインストール

```
sudo apt install open-vm-tools
sudo apt install open-vm-tools-desktop
```

Fcitx Mozcをインストールする。以下のコマンドを実行し、再起動、Fcitxの設定でMozcを一番上に移動するだけで日本語入力ができた。

```
sudo apt install fcitx-mozc
```

# Linuxカーネルのビルド

ここからはGMO AD Partners様のTech Blogを参考に進めていく。
https://techblog.gmo-ap.jp/2016/05/31/本家linux-カーネルをコンパイルして仮想pcで起動する/

makeする際に必要な以下のパッケージを予めインストールしておく（インストールしないとmakeの途中でエラーで中断する）。ビルドするLinuxディストリビューションのインストール構成によっては更に沢山のパッケージを入れる必要があると思います。

flex, bison, libssl-dev libelf-dev 

# grubブートローダのインストール

CentOSのレスキューモードからはgrubがインストールできなかった（grub2-installでmodinfo.shが無いと怒られた）ので、Ubuntu系OSのLiveイメージ（ISO）を使う。Liveイメージから起動して、GMO様の解説の通りにmountしたりgrub-installしたりして、GRUBインストールを行う。但し、Ubuntu環境ではgrub2-installは無いので、grub-installを使う。

Installation finished. No error reportedが表示されたらOK。

# ブートする

これも解説どおりにVirtualBoxを用いてブートする（コンパイル時にVMWareを使っているのは個人の趣味です）。

```
grub > linux /bzImage
grub > boot
```

下記のようなKernel Panicが表示されます。多分正常に実行できてます。ここから先のプログラムを作ることもできるそうですが、今回はここまで。

![カーネルパニック](./images/01/linuxKernelPanic.png)

# ゲストOSのGRUBを吹っ飛ばした！！！

grub-installしてる最中にゲストOS本体のGRUBをいじってしまってGRUB SHELL画面からゲストOSが起動しなくなった、、、が下記リンクを見て無事復旧した。

http://niwatako.info/20101206/article629.html

# vdiファイルのマウントの仕方

qemu-nbdを使う。http://www.ubuntugeek.com/how-to-mount-virtualbox-drive-imagevdi-on-ubuntu-16-10.htmlを参考にする。

```
sudo modprobe nbd
sudo qemu-nbd -c /dev/nbd0 sda.vdi
sudo mount /dev/nbd0p1 /mnt
```

アンマウント

```
sudo umount /mnt
sudo qemu-nbd -d /dev/nbd0
```
