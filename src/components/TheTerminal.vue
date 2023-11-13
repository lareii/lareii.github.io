<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      ps1: '[you@larei.is-a.dev ~]$&nbsp;',
      terminal: ref(null),
      input: ref(null),
      history: ref(null),
      prompt: ref(null),
      cmd_history: ref([""]),
      audio: ref(null),
      count: ref(0),
    }
  },
  mounted() {
    this.terminal = this.$parent.$el.children.item(1).children.item(0)
    this.input = this.$refs.input
    this.history = this.$refs.history
    this.prompt = this.$refs.prompt

    this.history.innerHTML = 'get started with typing "help"' + '<br>'
    this.prompt.innerHTML = this.ps1

    this.audio = new AudioContext()

    this.terminal.addEventListener('click', () => {
      this.input.focus()
    })

    this.terminal.addEventListener('keydown', (event) => {
      let key = event.which
      
      // arrow keys for switch command
      if (key == 38) {
        if (this.count > -this.cmd_history.length + 1) {
          this.count -= 1
        } else {
          this.beep()
        }

        this.input.value = this.cmd_history.at(this.count)
      }

      if (key == 40) {
        if (this.count < 0) {
          this.count += 1
          this.input.value = this.cmd_history.at(this.count)
        } else {
          this.beep()
        }
      }

      if (key == 8 && this.input.value == '') {
        this.beep()
      }
    })
  },
  methods: {
    append_history(cmd, value) {
      this.history.innerHTML += value
      this.history.innerHTML += '<br>'
      this.cmd_history.push(cmd)
    },
    beep() {
      let osc = this.audio.createOscillator()
      let gain = this.audio.createGain()

      osc.connect(gain);
      gain.connect(this.audio.destination)

      gain.gain.value = 0.07

      osc.start(this.audio.currentTime)
      osc.stop(this.audio.currentTime + 0.1)
    },
    cmdin(event) {
      if (event.key === 'Enter') {
        this.history.innerHTML += this.ps1 + this.input.value + '<br>'
        this.cmdout(this.input.value)
        this.input.value = ''

        this.terminal.scrollTo(0, this.terminal.scrollHeight)
      }
    },
    cmdout(cmd) {
      if (cmd == '') {
        return
      } else if (cmd == 'clear') {
        this.history.innerHTML = ''
        this.append_history(cmd, '')
      } else if (cmd == 'help') {
        this.append_history(cmd, 'help: guess what?<br>ls: lists directory contents.<br>cat: prints the file content.<br>clear: clears the terminal history.<br>')
      } else if (cmd == 'whoami') {
        this.append_history(cmd, 'you')
      } else if (cmd == 'ls') {
        this.append_history(cmd, 'about_me.md&nbsp;&nbsp;&nbsp;&nbsp;todo_list.md')
      } else if (cmd.startsWith('cat')) {
        let file = cmd.split(' ')[1]

        if (file) {
          if (file == 'about_me.md') {
            this.append_history(cmd, "it's emirhan!<br>emirhan (aka larei), 17 years-old, mathematics student. self-taught developer, open-source enthusiast. programming, music, math. *insert here some lorem ipsum*")
          } else if (file == 'todo_list.md') {
            this.append_history(cmd, '- birth<br><br>- learn<br>- explore<br>- study<br>- university<br>- career<br>- work<br>- love<br>- die')
          } else {
            this.append_history(cmd, 'error: file not found.')
          }
        } else {
          this.append_history(cmd, 'error: file not specified.')
        }
      } else {
        this.append_history(cmd, 'command not found: ' + cmd)
      }
    },
  }
}
</script>

<template>
  <div class="font-mono">
    <div ref="history" class="flex items-center text-sm"></div>
    <div class="flex items-center text-sm">
      <div ref="prompt" id="prompt"></div>
      <input @keydown="cmdin" ref="input" class="w-full bg-transparent outline-none" type="text">
    </div>
  </div>
</template>