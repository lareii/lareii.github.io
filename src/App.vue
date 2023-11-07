<script>
import TheWindow from './components/TheWindow.vue';
import TheTerminal from './components/TheTerminal.vue';

export default {
  components: {
    TheWindow,
    TheTerminal,
  }
}
</script>

<template>
  <main class="sm:pt-20 relative max-w-screen-md mx-auto p-5">
    <TheWindow class="mb-3" title="about_me.md" :decorations="3">
      <div class="font-black text-5xl content-center">
        it's <span class="bg-[var(--color-quinary)]">emirhan!</span>
      </div>
      <div class="font-bold text-lg mb-2">
        emirhan (aka larei), 17 years-old, mathematics student. self-taught developer, open-source enthusiast. programming, music, math. <i>*insert here some lorem
          ipsum*</i>
      </div>
    </TheWindow>

    <div class="flex max-sm:flex-col gap-3 mb-3">
      <TheWindow class="sm:basis-1/3" :decorations="1" color="quaternary" title="todo_list.md">
        <div class="font-bold h-40 overflow-y-auto no-scrollbar">
          <div>- <s>birth</s></div>
          <div>- <s>learn</s></div>
          <div>- <s>explore</s></div>
          <div>- <s>study</s></div>
          <div>- university</div>
          <div>- career</div>
          <div>- work</div>
          <div>- love</div>
          <div>- die</div>
        </div>
      </TheWindow>

      <TheWindow class="sm:basis-2/3 sm:w-0" color="tertiary" title="terminal.sh" :decorations="1">
        <div class="h-40 w-full overflow-auto no-scrollbar whitespace-nowrap">
          <TheTerminal />
        </div>
      </TheWindow>
    </div>

    <div class="flex max-sm:flex-col justify-between items-center gap-3">
      <div class="flex flex-wrap justify-center text-2xl gap-2">
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-secondary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100" href="https://github.com/lareii" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-tertiary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100" href="https://www.linkedin.com/in/emirhan-b-38a913297/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-quinary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100" href="https://discord.com/users/748539900793716887" target="_blank">
          <font-awesome-icon icon="fa-brands fa-discord" />
        </a>
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-quaternary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100" href="https://reddit.com/u/lareidev" target="_blank">
          <font-awesome-icon icon="fa-brands fa-reddit" />
        </a>
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-senary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100" href="https://open.spotify.com/user/800b0v2zx3p2n6apxfh2bwcfn" target="_blank">
          <font-awesome-icon icon="fa-brands fa-spotify" />
        </a>
      </div>
      <a class="flex items-center justify-center h-12 px-2 font-bold bg-white shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100" href="https://github.com/lareii/lareii.github.io" target="_blank">
      gimme a ⭐
    </a>
    </div>
  </main>

  <!--
    <div class="bg-[var(--color-primary)]">1</div>
    <div class="bg-[var(--color-secondary)]">2</div>
    <div class="bg-[var(--color-tertiary)]">3</div>
    <div class="bg-[var(--color-quaternary)]">4</div>
    <div class="bg-[var(--color-quinary)]">5</div>
    <div class="bg-[var(--color-senary)]">6</div>
    <div class="bg-[var(--color-septenary)]">7</div>
    <div class="bg-[var(--color-octonary)]">8</div>
  -->

  
</template>