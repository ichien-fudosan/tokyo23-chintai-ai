# 東京23区 賃貸AI相談の前提文

> [!IMPORTANT]
> これは一般的な考え方をまとめたもので、法律・税務の個別の助言、重要事項説明、入居審査の判断ではありません。
> AIが示すお部屋は、空室を確かめたものではありません → [DISCLAIMER.md](DISCLAIMER.md)

東京23区でお部屋を借りる人が、ChatGPT や Claude に相談する前に読ませる文章（前提文）です。
株式会社イチエン不動産（東京23区の賃貸仲介）が、自社のお部屋探しサイトで配っている物と同じ文章を、ここにそのまま置いています。

今の版は **v2.8** です。直した日と理由は [CHANGELOG.md](CHANGELOG.md) にあります。

## なぜ公開するのか

AIにお部屋探しを相談する人が増えています。けれども、何も伝えずに聞くと、AIは実在しないお部屋を作ったり、空いているかのように答えたり、「借りるべきです」と決めつけたりすることがあります。

この前提文は、AIに次のことを守らせるための物です。当社がAIに何を指示しているかを、だれでも読めるようにしておきます。

## AIがすること、しないこと

| | 内容 |
|---|---|
| AIがすること | 「譲れないこと」「できれば欲しいこと」「まだ迷っていること」を、質問しながら一緒に整理する。大手3サイト（SUUMO・LIFULL HOME'S・アットホーム）から候補を探し、掲載ページへのリンクを付けて見比べる。最後に「お部屋探し希望シート」にまとめる。 |
| AIがしないこと | お部屋・金額・リンクを作らない。空室・正確な初期費用・審査・内見できる日は、推測で答えない。「借りるべき」「やめるべき」と決めない。国籍・年齢・職業などを理由に「借りられない」と決めない。街を「治安が良い」「住みやすい」と評価しない。名前・電話番号・住所・勤務先名を聞かない。 |
| 人が確かめること | 空室、初期費用の内訳、内見できる日、定期借家かどうか。これらは不動産会社の担当者が確かめます。 |

AIは会社の物ではなく、お使いの方ご自身の ChatGPT や Claude です。前提文のとおりに動くことを、当社が保証することはできません。違う動きをしたときは、[Issues](../../issues) で教えてください。

## 使い方

### 1. 全文を貼る（おすすめ）

下の一覧から住みたい区を選び、開いた文章を全部コピーして、AIの入力欄に貼って送ってください。AIが最初の質問を選択肢つきで聞いてきます。

区のページ（例: <https://heya.ichienfudosan.jp/ai/minato/>）を使うと、家賃や間取りをボタンで選んでからコピーできます。登録は要りません。

### 2. 短い文で始める

長い文章を貼る代わりに、前提文の置き場所をAIに読ませる方法です。次の文を貼って送ってください（港区の例）。

```
次のページを読んで、そこに書かれた手順のとおりに、私の部屋探しの相談を始めてください。 https://heya.ichienfudosan.jp/ai/minato/premise.txt
```

この方法は、2026年11月27日に ChatGPT（有料版・スマホ）で動くことを確かめました。ほかのAIや無料版では確かめていません。AIが「ページを開けません」と答えたときは、1 の方法を使ってください。

## 区ごとの前提文

| 区 | 前提文 | 区 | 前提文 |
|---|---|---|---|
| 港区 | [premise/minato.txt](premise/minato.txt) | 千代田区 | [premise/chiyoda.txt](premise/chiyoda.txt) |
| 中央区 | [premise/chuo.txt](premise/chuo.txt) | 新宿区 | [premise/shinjuku.txt](premise/shinjuku.txt) |
| 文京区 | [premise/bunkyo.txt](premise/bunkyo.txt) | 台東区 | [premise/taito.txt](premise/taito.txt) |
| 墨田区 | [premise/sumida.txt](premise/sumida.txt) | 江東区 | [premise/koto.txt](premise/koto.txt) |
| 品川区 | [premise/shinagawa.txt](premise/shinagawa.txt) | 目黒区 | [premise/meguro.txt](premise/meguro.txt) |
| 大田区 | [premise/ota.txt](premise/ota.txt) | 世田谷区 | [premise/setagaya.txt](premise/setagaya.txt) |
| 渋谷区 | [premise/shibuya.txt](premise/shibuya.txt) | 中野区 | [premise/nakano.txt](premise/nakano.txt) |
| 杉並区 | [premise/suginami.txt](premise/suginami.txt) | 豊島区 | [premise/toshima.txt](premise/toshima.txt) |
| 北区 | [premise/kita.txt](premise/kita.txt) | 荒川区 | [premise/arakawa.txt](premise/arakawa.txt) |
| 板橋区 | [premise/itabashi.txt](premise/itabashi.txt) | 練馬区 | [premise/nerima.txt](premise/nerima.txt) |
| 足立区 | [premise/adachi.txt](premise/adachi.txt) | 葛飾区 | [premise/katsushika.txt](premise/katsushika.txt) |
| 江戸川区 | [premise/edogawa.txt](premise/edogawa.txt) | | |

区ごとに違うのは、家賃の選択肢の幅、エリアと駅・路線の一覧、その区ならではの質問、検索の例、区役所の名前です。進め方と守ることは、23区とも同じです。

## 作った会社の立場

この前提文は、お部屋を借りる人の側に立って仲介する、株式会社イチエン不動産が作りました。当社は、契約が成立したときに、借主の方から仲介手数料（家賃の0.5か月分＋消費税）をいただく立場です。前提文には、AIがこの立場を隠さないこと、聞かれなければ宣伝しないこと、「今の部屋に住み続ける」も同じ重さの選択肢として扱うことを書いています。

AIとの会話の中身は、当社には届きません。届くのは、ご自身が公式LINEに送ると決めた物だけです。

## 間違いを見つけたら

制度の説明の間違い、古くなった数字、AIが前提文と違う動きをした例は、[Issues](../../issues) で教えてください。書き方は [CONTRIBUTING.md](CONTRIBUTING.md) にあります。お部屋探しのご相談そのものは、Issues ではなく公式LINE（<https://lin.ee/uJXGA6u>）へお願いします。

## 参考にしたもの

住宅の購入について同じ考え方の文章を公開している、株式会社TERASS の「[住宅購入AIフレームワーク](https://github.com/terass-inc/home-buying-framework)」の取り組みに学びました。この置き場の文章は、当社が賃貸向けに書いたものです。

## ライセンス

[CC BY-SA 4.0](LICENSE)（クリエイティブ・コモンズ 表示 - 継承 4.0 国際）です。出どころ（株式会社イチエン不動産、この置き場のURL）を書けば、写す・直す・仕事で使うことができます。直した物を配るときは、同じ条件で公開してください。

## 作った会社

株式会社イチエン不動産（東京都港区。宅地建物取引業免許 東京都知事（1）第113667号）
お部屋探しサイト: <https://heya.ichienfudosan.jp/>
