<template>
  <div>
    <McvLoading v-if="isLoading" />
    <McvErrorMessage v-if="error" :message="'foo is broken'" />
    <div v-if="popularTags" class="sidebar">
      <p>Popular tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{name: 'tag', params: {slug: popularTag}}"
          class="tag-default tag-pill"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
import McvLoading from '@/components/Loading'
import McvErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'McvPopularTags',
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      error: (state) => state.popularTags.error,
      popularTags: (state) => state.popularTags.data,
    }),
  },
  components: {
    McvLoading,
    McvErrorMessage,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  },
}
</script>