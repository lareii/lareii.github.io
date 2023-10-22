<script>
export default {
  props: {
    color: {
      type: String,
      default: 'secondary',
    },
    title: {
      type: String,
      default: 'title',
    },
    decorations: {
      type: Number,
      default: 0,
    },
  }
}
</script>

<template>
  <div :class="`bg-[var(--color-${color})] rounded-xl border-4 border-black shadow-solid`">
    <div class="p-2 flex items-center border-b-2 gap-2 border-black">
      <div v-for="_ in decorations" class="w-5 h-5 border-2 border-black bg-white rounded-xl"></div>
      <div class="grow text-center font-bold">{{ title }}</div>
    </div>
    <div class="p-2">
      <slot />
    </div>
  </div>
</template>