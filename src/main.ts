import { Howl } from 'howler'

let
  all: Howl | null = null,
  mp3: Howl | null = null,
  ogg: Howl | null = null,
  wav: Howl | null = null,
  webm: Howl | null = null

const load = (name: string, src: string[]) => {
  return new Howl({
    onload: () => console.log(`✅ ${name} loaded`),
    onloaderror: () => console.log(`❌ ${name} failed to load`),
    onplay: () => console.log(`🕺 ${name} played`),
    onplayerror: () => console.log(`😭 ${name} failed to play`),
    src,
  })
}

const play = (name: string, howl: Howl | null) => {
  if (howl) {
    howl.play()
  } else {
    console.log(`❌ ${name} is not loaded`)
  }
}

const unload = (name: string, howl: Howl | null) => {
  if (howl) {
    howl.unload()
    console.log(`🔕 ${name} unloaded`)
  } else {
    console.log(`❌ ${name} is not loaded`)
  }
}

//
// all
//
document.getElementById('load-all')?.addEventListener('click', () => {
  all = load('all', ['sound.mp3', 'sound.ogg', 'sound.wav', 'sound.webm'])
})

document.getElementById('play-all')?.addEventListener('click', () => {
  play('all', all)
})

document.getElementById('unload-all')?.addEventListener('click', () => {
  unload('all', all)
  all = null
})

//
// mp3
//
document.getElementById('load-mp3')?.addEventListener('click', () => {
  mp3 = load('mp3', ['sound.mp3'])
})

document.getElementById('play-mp3')?.addEventListener('click', () => {
  play('mp3', mp3)
})

document.getElementById('unload-mp3')?.addEventListener('click', () => {
  unload('mp3', mp3)
  mp3 = null
})

//
// ogg
//
document.getElementById('load-ogg')?.addEventListener('click', () => {
  ogg = load('ogg', ['sound.ogg'])
})

document.getElementById('play-ogg')?.addEventListener('click', () => {
  play('ogg', ogg)
})

document.getElementById('unload-ogg')?.addEventListener('click', () => {
  unload('ogg', ogg)
  ogg = null
})

//
// wav
//
document.getElementById('load-wav')?.addEventListener('click', () => {
  wav = load('wav', ['sound.wav'])
})

document.getElementById('play-wav')?.addEventListener('click', () => {
  play('wav', wav)
})

document.getElementById('unload-wav')?.addEventListener('click', () => {
  unload('wav', wav)
  wav = null
})

//
// webm
//
document.getElementById('load-webm')?.addEventListener('click', () => {
  webm = load('webm', ['sound.webm'])
})

document.getElementById('play-webm')?.addEventListener('click', () => {
  play('webm', webm)
})

document.getElementById('unload-webm')?.addEventListener('click', () => {
  unload('webm', webm)
  webm = null
})
