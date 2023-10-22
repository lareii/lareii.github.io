<script>
export default {
  mounted() {
    const prompt = '[you@larei.is-a.dev ~]$&nbsp;'

    const terminal_element = this.$parent.$el.children.item(1).children.item(0)
    const prompt_element = document.getElementById('prompt')
    const input_element = document.getElementById('input')
    const history_element = document.getElementById('history')

    function process_command(value) {
      if (value == '') {
        return
      } else if (value == 'help') {
        history_element.innerHTML += 'help yourself' + '<br>'
      } else if (value == 'whoami') {
        history_element.innerHTML += 'you' + '<br>'
      } else if (value == 'clear') {
        history_element.innerHTML = ''
      } else {
        history_element.innerHTML += 'command not found: ' + value + '<br>'
      }
    }

    input_element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        history_element.innerHTML += prompt + input_element.value + '<br>'
        process_command(input_element.value)
        input_element.value = ''

        terminal_element.scrollTo(0, terminal_element.scrollHeight)
      }
    })

    terminal_element.addEventListener('click', (e) => {
      input_element.focus()
    })

    history_element.innerHTML = 'get started with typing "help"' + '<br>'
    prompt_element.innerHTML = prompt
  },
}
</script>

<template>
  <div class="font-mono">
    <div id="history" class="flex items-center text-sm"></div>
    <div class="flex items-center text-sm">
      <div id="prompt"></div>
      <input id="input" class="w-full bg-transparent outline-none" type="text">
    </div>
  </div>
</template>