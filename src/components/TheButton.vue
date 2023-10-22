<script>
export default {
  props: {
    color: {
      type: String,
      default: 'secondary',
    },
  }
}
</script>

<template>
  <div :class="`bg-[var(--color-${color})] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none`">
    <slot />
  </div>
</template>