<template>
  <div>
    <div class="relative min-h-[50vh] lg:min-h-[70vh] xl:min-h-[95vh]">
      <Swiper
        :class="{ 'opacity-0': !init }"
        :modules="[Thumbs]"
        :thumbs="{ swiper: thumbsSwiper }"
        class="h-[calc(50vh-3.5rem)] transition-opacity duration-300 lg:h-[calc(70vh-3.5rem)] xl:h-[calc(95vh-5.5rem)]"
        loop
        @after-init="() => (init = true)"
      >
        <SwiperSlide v-for="(image, i) in data?.products[0].images" :key="i">
          <img
            class="h-full w-full object-cover object-center"
            :srcset="`https://ecosaau.imgix.net/${image.id}/${image.image}?w=3840 3840w,
                      https://ecosaau.imgix.net/${image.id}/${image.image}?w=1980 1980w,
                      https://ecosaau.imgix.net/${image.id}/${image.image}?w=1280 1280w,
                      https://ecosaau.imgix.net/${image.id}/${image.image}?w=768 768w`"
            :src="`https://ecosaau.imgix.net/${image.id}/${image.image}`"
            sizes="100vw"
            loading="lazy"
          >
        </SwiperSlide>
      </Swiper>

      <Swiper
        :class="{ 'opacity-0': !init }"
        :modules="[Thumbs]"
        class="my-2 !mx-2 h-10 transition-opacity duration-300 xl:my-3 xl:h-16"
        slides-per-view="auto"
        watch-slides-progress
        @swiper="setThumbsSwiper"
      >
        <SwiperSlide
          v-for="(image, i) in data?.products[0].images"
          :key="i"
          class="mx-1 !w-16 cursor-pointer overflow-hidden rounded-lg border-2 xl:mx-2 xl:!w-24"
        >
          <img
            class="h-full w-full object-cover object-center"
            :src="`https://ecosaau.imgix.net/${image.id}/${image.image}?w=120`"
            loading="lazy"
          >
        </SwiperSlide>
      </Swiper>

      <div
        class="top-6 right-12 z-10 w-full space-y-3 bg-slate-100 p-3 xl:absolute xl:min-h-[50vh] xl:w-96 xl:rounded-md xl:shadow"
      >
        <h3 class="text-2xl">title</h3>
        <div class="bg-green-300 p-3">box 1</div>
        <div class="h-32 bg-indigo-200 p-3">box 2</div>
        <div class="h-64 bg-red-200 p-3">box 2</div>
        <div class="h-32 bg-indigo-200 p-3">box 2</div>
        <div class="h-64 bg-yellow-200 p-3">box 2</div>
      </div>
    </div>

    <div class="min-h-64 container mx-auto h-full break-words bg-rose-50 p-3">
      {{ data?.products[0] }}
    </div>
  </div>
</template>

<script setup>
import { Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const init = ref(false)
const thumbsSwiper = ref(null)

function setThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper
}

const { data } = await useAsyncData('product', () =>
  $fetch('https://dev01.ecosa.com.au/module/ecosaamp/product?rewrite=pillow')
)
</script>

<style>
.swiper-slide-thumb-active {
  @apply border-rose-300;
}
</style>
