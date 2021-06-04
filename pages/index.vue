<template>
  <div>
    <button type="button" @click="submit(); dataCount()">送信</button>
    <p>あなたは世界一堅牢なセキュリティを突破した{{ count }}人目のハッカーです。</p>
  </div>

</template>

<script>
import firebase from '@/plugins/firebase'
let database = firebase.database()
export default {
  data () {
    return {
      count: 0,
    }
  },
  methods: {
    submit () {
      database.ref("users").push({
        id: "id",
      });
      console.log('送信しました')
    },
    dataCount () {
      database.ref("users").once('value', parent => {
        this.count = parent.numChildren()
        console.log(this.count)
      });
    }
  },
}
</script>
