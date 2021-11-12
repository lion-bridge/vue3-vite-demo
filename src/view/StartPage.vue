<script setup lang="ts">
import vditor from '@/components/Vditor.vue'

const getHtml = (html?: string) => {
  console.log('html=',html)
}
const onDeliver = () => {
  console.log('发布文章按钮=', vditor?.ref)
}
</script>
<!-- emit怎么使用？？ -->
<template>
  <div class="start_page">
    <vditor
      :title="'vditor编辑'"
      @get-html="getHtml"
    />
    <div>
      <button @click="onDeliver">发布文章</button>
    </div>
  </div>
</template>

<style lang="less" >

</style>