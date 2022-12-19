<template>
  <div>
    
      <input type="text" v-model="nama" class="bg-slate-200">
      <input type="text" v-model="kelas" class="bg-slate-200">
      <button class="text-white bg-sky-500 py-2 px-5 text-lg rounded-md" @click="saveData">simpan</button>

  </div>
</template>

<script>

import db from '../config/firebase.js'
import { collection, addDoc } from "firebase/firestore"; 
 // import firebase from 'firebase/app'
  export default {
 data(){
  return{
    nama:"",
    kelas:""
  }
  
 },
 onCreated(){
  this.saveData()
 },

    methods: {
      async saveData(){
       const docRef = await addDoc(collection(db, "orang"), {
  nama:this.nama,
  kelas: this.kelas,

}
);
  alert("sukses")
  this.nama=''
  this.kelas=''
console.log("Document written with ID: ", docRef.id);

        // console.log(this.nama)
        // console.log(this.kelas)
      //   let obj = {
      //     nama: this.nama,
      //     kelas: this.kelas,
      //   }
      //   db.firestore.collection("orang").add(obj).then(doc=>{
      //     alert('data berhasil di tambahkan'+doc.id)
      //     this.nama = ''
      //     this.kelas = ''
      //   }).catch(e=>{
      //     console.log(e)
      //   })
      // }
    },
    }
  }
</script>

<style lang="scss" scoped>

</style>