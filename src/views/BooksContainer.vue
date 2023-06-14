<template>
  <main style="margin-top: 5px">
    <div class="text-center">
      <h3 class="green main-header"> ALL BOOKS </h3>
    </div>
    <template v-for="book in books"  :key="book.id">
      <BookItemCard :book="book" @onDeleteBook="deleteBook"/>
    </template>
      
    <div style="position: relative;">
      <Pagination />
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import BookItemCard from '../components/BookItemCard.vue'
import Pagination from '../components/Pagination.vue'

import { ref, onMounted } from 'vue';

export default {
  name: 'BookSContainer',
  components: { BookItemCard, Pagination },
  setup() {
    let books = ref([]);

    const getList = () => {
      axios.get('/books').then((response) => {
        books.value = response.data.data;
      })
    }

    onMounted(() => {
      getList()
    })

    const deleteBook = (id) => {
      console.log(id);
    }

    return {books, deleteBook}
  }
}
</script>
