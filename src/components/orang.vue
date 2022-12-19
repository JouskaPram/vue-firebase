<template>
  <div>

  </div>
</template>

<script>
import db from '../config/firebase.js' 
import {doc,getDocFromCache} from 'firebase/firestore'
export default {
  setup () {
    

    return {}
  },
  created(){
    this.getOrang()
  },
  methods:{
    async getOrang(){
     const docRef = doc(db, "kelas", "nama");
const docSnap = await getDocFromCache (docRef);
console.log(docSnap.data())
    }
  }
}
</script>

<style lang="scss" scoped>

</style>