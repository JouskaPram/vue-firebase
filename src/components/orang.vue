<template>
  <div class="mt-5">
    <router-link to="/tambah" class="text-white font-semibold bg-sky-500 rounded-md py-2 px-5 mx-10 hover:bg-sky-400 hover:animation duration-700">Tambah Orang</router-link>
      <table class="w-1/3 m-auto mt-10 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr class="text-center text-slate-800 text-lg font-bold borfer-2 ">
            <td class="py-3 px-6">Nama</td>
            <td class="py-3 px-6">Kelas</td>
          </tr>
          
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="orang in orangs" :key="orang.nama">
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white ">{{ orang.nama }}</td>
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ orang.kelas }}</td>
          </tr>
    
        </tbody>
      </table>
  </div>
</template>

<script>
import db from '../config/firebase.js' 
import {query,getDocs,collection, orderBy} from 'firebase/firestore'
export default {
  setup () {
    

    },
    data() {
    return {
      orangs: []
    }
  },
  created(){ 
    this.getOrang()
  },
  methods:{
    async getOrang(){
      const querySnap = await getDocs(query(collection(db, 'orang'),orderBy("nama")));
      console.log(querySnap)  
      // add each doc to 'countries' array
      querySnap.forEach((doc) => {
        this.orangs.push(doc.data())
        
      })

    }}
}
</script>

<style lang="scss" scoped>

</style>