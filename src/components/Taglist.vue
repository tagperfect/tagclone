<template>
  <ul class="tag-list">
    <li v-for="tag in tagList" :key="tag" class="tag-default tag-pill tag-outline">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  name: 'McvTaglist',
  props: {
    tagList: {
      type: Array,
      required: true
    }
  }
}

</script>