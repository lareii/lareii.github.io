<script>
import TheWindow from './components/TheWindow.vue';
import TheTerminal from './components/TheTerminal.vue';
import TheButton from './components/TheButton.vue';

export default {
  components: {
    TheWindow,
    TheTerminal,
    TheButton,
  },
  methods: {
    changeEmoji() {
      const emoji = document.getElementById('emoji')

      emoji.innerText = (emoji.innerText == '✨' ? '✌️' : '✨')
      document.title = (document.title == '✨' ? '✌️' : '✨')
    }
  }
}
</script>

<template>
  <main class="sm:pt-20 relative max-w-screen-md mx-auto p-5">
    <TheWindow class="mb-3" title="about_meeee.md" :decorations="3">
      <div class="font-black text-5xl">
        it's 
        <span class="whitespace-nowrap bg-[var(--color-quinary)]">emirhan!<span class="text-[10px]">a.k.a. larei</span>
        </span>
        &nbsp;
        <span id="emoji" @dblclick="changeEmoji" class="text-[2rem] select-none">✨</span>
      </div>
      <div class="font-bold text-lg mb-2">
        17 years-old, university student. self-taught developer, open-source enthusiast. programming, music, math. <i>*insert here some lorem
          ipsum*</i>
      </div>
    </TheWindow>

    <div class="flex max-sm:flex-col gap-3 mb-3">
      <TheWindow class="sm:basis-1/3" :decorations="1" color="quaternary" title="todo_list.txt">
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
        <TheButton color="secondary" class="w-12 text-center">
          <a href="https://github.com/lareii" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </TheButton>
        <TheButton color="tertiary" class="w-12 text-center">
          <a href="https://www.linkedin.com/in/emirhan-b-38a913297/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
        </TheButton>
        <TheButton color="quaternary" class="w-12 text-center">
          <a href="https://discord.com/users/748539900793716887" target="_blank">
            <font-awesome-icon icon="fa-brands fa-discord" />
          </a>
        </TheButton>
        <TheButton color="quinary" class="w-12 text-center">
          <a href="https://reddit.com/u/lareidev" target="_blank">
            <font-awesome-icon icon="fa-brands fa-reddit" />
          </a>
        </TheButton>
        <TheButton color="senary" class="w-12 text-center">
          <a href="https://open.spotify.com/user/800b0v2zx3p2n6apxfh2bwcfn" target="_blank">
            <font-awesome-icon icon="fa-brands fa-spotify" />
          </a>
        </TheButton>
        <TheButton color="septenary" class="w-12 text-center">
          <a href="https://mastodon.com.tr/@larei" target="_blank">
            <font-awesome-icon icon="fa-brands fa-mastodon" />
          </a>
        </TheButton>
      </div>
    <TheButton color="octonary" class="w-fit">
      <a class="font-bold"
        href="https://github.com/lareii/lareii.github.io" target="_blank">
        gimme a ⭐
      </a>
    </TheButton>
    </div>
  </main>

  <div class="bg-[var(--color-primary)]">1</div>
  <div class="bg-[var(--color-secondary)]">2</div>
  <div class="bg-[var(--color-tertiary)]">3</div>
  <div class="bg-[var(--color-quaternary)]">4</div>
  <div class="bg-[var(--color-quinary)]">5</div>
  <div class="bg-[var(--color-senary)]">6</div>
  <div class="bg-[var(--color-septenary)]">7</div>
  <div class="bg-[var(--color-octonary)]">8</div>
  
  
</template>