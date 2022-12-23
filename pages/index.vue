<template>
  <div>
    <div class="relative flex justify-end">
      <div class="z-20 mt-6 mr-6 mb-6 h-[150vh] w-[380px] rounded bg-sky-400 p-3">2</div>

      <div class="absolute inset-0 z-10 w-full bg-yellow-300">
        <div class="sticky top-12 h-[900px] w-full bg-purple-300">
          <img
            class="h-full w-full object-cover object-center"
            :srcset="`https://ecosaau.imgix.net/846/pillow.jpg?w=3840 3840w,
                      https://ecosaau.imgix.net/846/pillow.jpg?w=1980 1980w,
                      https://ecosaau.imgix.net/846/pillow.jpg?w=1280 1280w,
                      https://ecosaau.imgix.net/846/pillow.jpg?w=768 768w`"
            :src="`https://ecosaau.imgix.net/846/pillow.jpg`"
            sizes="100vw"
            loading="lazy"
          >
        </div>
      </div>
    </div>
    <div class="h-[20vh] bg-gray-100 p-3">below</div>
  </div>
</template>
