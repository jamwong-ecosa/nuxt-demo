<template>
  <div>
    <div>story page</div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()

const { data } = await useAsyncData('pillow', async () => {
  console.log('called')
  $fetch('/api/hello')
  return await storyblokApi.get('cdn/stories/en-au/pillow')
})
</script>
