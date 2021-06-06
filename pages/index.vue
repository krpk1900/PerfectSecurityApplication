<template>
  <div>
    <button type="button" @click="submit(); dataCount()">送信</button>
    <p>あなたは世界一堅牢なセキュリティを突破した{{ count }}人目のハッカーです。</p>
    <!-- ステージ1 (ベーグルと犬) -->
    <RecaptchaDialogs
    target-name='ベーグル' stage-num='1' image-name1='bagel1.jpg' image-name2='dog1.jpg' image-name3='bagel2.jpg' image-name4='dog2.jpg'
    image-name5='bagel3.jpg' image-name6='dog3.jpg' image-name7='bagel4.jpg' image-name8='dog4.jpg' image-name9='bagel5.jpg' @success="isShowDialogs2 = true">
    </RecaptchaDialogs>
    <!-- ステージ2 (チワワとマフィン) -->
    <RecaptchaDialogs v-if="isShowDialogs2"
    target-name='チワワ' stage-num='2' image-name1='chihuahua1.jpg' image-name2='muffin1.jpg' image-name3='chihuahua2.jpg' image-name4='muffin2.jpg'
    image-name5='chihuahua3.jpg' image-name6='muffin3.jpg' image-name7='chihuahua4.jpg' image-name8='muffin4.jpg' image-name9='chihuahua5.jpg' @success="isShowDialogs3 = true">
    </RecaptchaDialogs>
    <!-- ステージ3 (モップとシープドッグ) -->
    <RecaptchaDialogs v-if="isShowDialogs3"
    target-name='モップ' stage-num='3' image-name1='mop1.jpg' image-name2='sheepdog1.jpg' image-name3='mop2.jpg' image-name4='sheepdog2.jpg'
    image-name5='mop3.jpg' image-name6='sheepdog3.jpg' image-name7='mop4.jpg' image-name8='sheepdog4.jpg' image-name9='mop5.jpg' @success="isShowDialogs4 = true">
    </RecaptchaDialogs>
    <!-- ステージ4 (フライドチキンとラブラドードル) -->
    <RecaptchaDialogs v-if="isShowDialogs4"
    target-name='フライドチキン' stage-num='4' image-name1='chicken1.jpg' image-name2='labradoodle1.jpg' image-name3='chicken2.jpg' image-name4='labradoodle2.jpg'
    image-name5='chicken3.jpg' image-name6='labradoodle3.jpg' image-name7='chicken4.jpg' image-name8='labradoodle4.jpg' image-name9='chicken5.jpg' @success="isShowDialogs5 = true">
    </RecaptchaDialogs>
  </div>

</template>

<script>
import firebase from '@/plugins/firebase'
import RecaptchaDialogs from '~/components/RecaptchaDialogs.vue'
let database = firebase.database()
export default {
  componets: {
    RecaptchaDialogs
  },
  data () {
    return {
      count: 0,
      isShowDialogs2: false,
      isShowDialogs3: false,
      isShowDialogs4: false,
      isShowDialogs5: false,
      isShowDialogs6: false,
    }
  },
  methods: {
    test () {
      console.log('うぇーい')
    },
    // firebase
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
    },
  },
}
</script>
