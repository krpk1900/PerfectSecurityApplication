<template>
  <button
      type="button"
      @click="submit()"
  >
    送信
  </button>

</template>

<script>
import firebase from '@/plugins/firebase'
let database = firebase.database()
export default {
  data () {
  },
  methods: {
    submit () {
      database.ref("users").push({
        id: "id",
      });
      console.log('送信しました')
    }
  },
}
</script>
