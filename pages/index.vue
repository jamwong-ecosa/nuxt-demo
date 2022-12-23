<template>
  <div>
    <div class="relative flex justify-end">
      <div
        class="z-20 mt-16 mr-16 mb-16 flex h-[150vh] w-[380px] flex-col gap-3 rounded bg-white p-3 shadow-sm"
      >
        <div class="text-2xl text-blue-600">product name</div>
        <div class="h-24 bg-red-50 p-3">box 1</div>
        <div class="h-48 bg-orange-50 p-3">box 2</div>
        <div class="h-24 bg-yellow-50 p-3">box 3</div>
        <div class="h-12 bg-green-50 p-3">box 4</div>
        <div class="h-24 bg-lime-50 p-3">box 5</div>
        <div class="h-60 bg-purple-50 p-3">box 6</div>
      </div>

      <div class="absolute inset-0 z-10 w-full bg-yellow-300">
        <div class="sticky top-12 h-[900px] min-h-[calc(100vh-3rem)] w-full bg-purple-300">
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
    <div class="container mx-auto flex flex-col gap-8 py-8">
      <div class="h-[20vh] bg-gray-100 p-3 text-2xl">section 1</div>
      <div class="h-[20vh] bg-gray-200 p-3 text-2xl">section 2</div>
      <div class="h-[20vh] bg-gray-100 p-3 text-2xl">section 3</div>
    </div>
  </div>
</template>
