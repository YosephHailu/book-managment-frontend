<template>
  <BookItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <span class="green"> {{ book.title }} </span> <br />
      <small> {{ book.author }} </small>
    </template>
    <p style="border-top: 1px solid hsla(160, 100%, 37%, 0.5)">{{ book.summery }}</p>
    <span href="" class="m-5" >EDIT</span>
    <span href="" class="m-5 text-red" @click="$emit('onDeleteBook')">DELETE</span>
  </BookItem>
</template>

<script lang="ts">
import BookItem from './BookItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

export default {
  name: 'BookSContainer',
  components: { BookItem, DocumentationIcon },
  props: ['book', 'onDeleteBook']
}
</script>
