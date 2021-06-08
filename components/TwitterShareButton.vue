<template>
  <a
    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
    class="twitter-share-button"
    :data-url="dataUrl"
    :data-text="dataText"
    :data-lang="lang"
    :data-size="large"
    :data-show-count="showCount"
    :data-hashtags="dataHashtag"
  >
    Tweet
  </a>
</template>

<script>
export default {
  name: 'TwitterShareButton',
  props: {
    url: { type: String },
    text: { type: String },
    num: { type: String },
    hashtag: { type: String},
    lang: { type: String, default: 'ja' },
    large: { type: Boolean, default: false },
    showCount: { type: Boolean, default: false },
  },
  computed: {
    dataUrl () {
      return `https://sekigae.jp/
`
    },
    dataText () {
      return `あなたは【世界一堅牢なセキュリティ】を突破した【${this.num}】人目のハッカーです。
`
    },
    dataHashtag () {
      return '世界一堅牢なセキュリティ'
    },
  },
  // ボタン用スクリプトの読み込み
  mounted () {
    const twitterWidgetScript = document.createElement('script')
    twitterWidgetScript.src = 'https://platform.twitter.com/widgets.js'
    twitterWidgetScript.async = true
    document.body.appendChild(twitterWidgetScript)
  },
}
</script>

<style>
.twitter-share-button {

}
</style>
