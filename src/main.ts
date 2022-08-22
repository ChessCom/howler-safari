import { Howl } from 'howler'

let
  all: Howl | null = null,
  mp3: Howl | null = null,
  ogg: Howl | null = null,
  wav: Howl | null = null,
  webm: Howl | null = null

//
// helpers
//
const load = (name: string, src: string[], html5: boolean) => {
  return new Howl({
    html5,
    onload: () => {
      console.log(`✅ ${name} loaded ${html5 ? '(html5)' : ''}`)
      document.getElementById(`${name}${html5 ? '-html5' : ''}`)!.classList.add('loaded')
    },
    onloaderror: () => console.log(`😱 ${name} failed to load ${html5 ? '(html5)' : ''}`),
    onplay: () => console.log(`🕺 ${name} played ${html5 ? '(html5)' : ''}`),
    onplayerror: () => console.log(`😭 ${name} failed to play ${html5 ? '(html5)' : ''}`),
    src,
  })
}

const play = (name: string, howl: Howl | null, html5: boolean) => {
  if (howl) {
    howl.play()
  } else {
    console.log(`❌ ${name} is not loaded ${html5 ? '(html5)' : ''}`)
  }
}

const unload = (name: string, howl: Howl | null, html5: boolean) => {
  if (howl) {
    howl.unload()
    console.log(`🔕 ${name} unloaded ${html5 ? '(html5)' : ''}`)
    document.getElementById(`${name}${html5 ? '-html5' : ''}`)!.classList.remove('loaded')
  } else {
    console.log(`❌ ${name} is not loaded ${html5 ? '(html5)' : ''}`)
  }
}

//
// all
//
document.getElementById('load-all')?.addEventListener('click', () => {
  all = load('all', ['sound.mp3', 'sound.ogg', 'sound.wav', 'sound.webm'], false)
})

document.getElementById('play-all')?.addEventListener('click', () => {
  play('all', all, false)
})

document.getElementById('unload-all')?.addEventListener('click', () => {
  unload('all', all, false)
  all = null
})

document.getElementById('load-all-html5')?.addEventListener('click', () => {
  all = load('all', ['sound.mp3', 'sound.ogg', 'sound.wav', 'sound.webm'], true)
})

document.getElementById('play-all-html5')?.addEventListener('click', () => {
  play('all', all, true)
})

document.getElementById('unload-all-html5')?.addEventListener('click', () => {
  unload('all', all, true)
  all = null
})

//
// mp3
//
document.getElementById('load-mp3')?.addEventListener('click', () => {
  mp3 = load('mp3', ['sound.mp3'], false)
})

document.getElementById('play-mp3')?.addEventListener('click', () => {
  play('mp3', mp3, false)
})

document.getElementById('unload-mp3')?.addEventListener('click', () => {
  unload('mp3', mp3, false)
  mp3 = null
})

document.getElementById('load-mp3-html5')?.addEventListener('click', () => {
  mp3 = load('mp3', ['sound.mp3'], true)
})

document.getElementById('play-mp3-html5')?.addEventListener('click', () => {
  play('mp3', mp3, true)
})

document.getElementById('unload-mp3-html5')?.addEventListener('click', () => {
  unload('mp3', mp3, true)
  mp3 = null
})

//
// ogg
//
document.getElementById('load-ogg')?.addEventListener('click', () => {
  ogg = load('ogg', ['sound.ogg'], false)
})

document.getElementById('play-ogg')?.addEventListener('click', () => {
  play('ogg', ogg, false)
})

document.getElementById('unload-ogg')?.addEventListener('click', () => {
  unload('ogg', ogg, false)
  ogg = null
})

document.getElementById('load-ogg-html5')?.addEventListener('click', () => {
  ogg = load('ogg', ['sound.ogg'], true)
})

document.getElementById('play-ogg-html5')?.addEventListener('click', () => {
  play('ogg', ogg, true)
})

document.getElementById('unload-ogg-html5')?.addEventListener('click', () => {
  unload('ogg', ogg, true)
  ogg = null
})

//
// wav
//
document.getElementById('load-wav')?.addEventListener('click', () => {
  wav = load('wav', ['sound.wav'], false)
})

document.getElementById('play-wav')?.addEventListener('click', () => {
  play('wav', wav, false)
})

document.getElementById('unload-wav')?.addEventListener('click', () => {
  unload('wav', wav, false)
  wav = null
})

document.getElementById('load-wav-html5')?.addEventListener('click', () => {
  wav = load('wav', ['sound.wav'], true)
})

document.getElementById('play-wav-html5')?.addEventListener('click', () => {
  play('wav', wav, true)
})

document.getElementById('unload-wav-html5')?.addEventListener('click', () => {
  unload('wav', wav, true)
  wav = null
})

//
// webm
//
document.getElementById('load-webm')?.addEventListener('click', () => {
  webm = load('webm', ['sound.webm'], false)
})

document.getElementById('play-webm')?.addEventListener('click', () => {
  play('webm', webm, false)
})

document.getElementById('unload-webm')?.addEventListener('click', () => {
  unload('webm', webm, false)
  webm = null
})

document.getElementById('load-webm-html5')?.addEventListener('click', () => {
  webm = load('webm', ['sound.webm'], true)
})

document.getElementById('play-webm-html5')?.addEventListener('click', () => {
  play('webm', webm, true)
})

document.getElementById('unload-webm-html5')?.addEventListener('click', () => {
  unload('webm', webm, true)
  webm = null
})