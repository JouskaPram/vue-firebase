<template>
  <div>
    <div class="w-1/4 bg-white m-auto mt-16 shadow-md p-3 rounded-md">
      

  <div class="my-3 text-center text-gray-700 font-semibold text-xl">
    Masukan Data
  </div>
  <div class="mb-6">
    <label for="Nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
    <input type="Nama" id="Nama" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" v-model="nama " required>
  </div>
  <div class="mb-6">
    <label for="kelas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">kelas</label>
    <input type="kelas" id="kelas" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="kelas" required>
  </div>

  <button type="submit" @click="saveData" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
  <router-link to="/" class="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-5 text-center">Kembali</router-link>


    </div>
    
    

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
        this.send=true
       const docRef = await addDoc(collection(db, "orang"), {
  nama:this.nama,
  kelas: this.kelas,

}
);
  // alert("sukses")
  // this.nama=''
  // this.kelas=''
console.log("Document written with ID: ", docRef.id);
if(docRef) {
        this.send = false
        this.$router.push('/orang')
        alert('data sukses ditambahkan')
      }

    },
    }
  }
</script>

<style lang="scss" scoped>

</style>