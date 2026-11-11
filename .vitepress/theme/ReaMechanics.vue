<script setup>
import { ref, computed, onUnmounted } from 'vue'
const x = ref(50)
const count = ref(12)
const rotation = ref(0)
const pan = computed(() => (Number(x.value) / 50 - 1).toFixed(2))
const dots = computed(() => Array.from({ length: Number(count.value) }, (_, i) => {
  const a = (i * 360 / Number(count.value) + Number(rotation.value)) * Math.PI / 180
  return { x: 180 + Math.cos(a) * 68, y: 90 + Math.sin(a) * 68 }
}))
let context
const audioStatus = ref('Optional: listen with headphones to hear the left/right position.')
async function play() {
  try {
    context ??= new (window.AudioContext || window.webkitAudioContext)()
    await context.resume()
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    const panner = context.createStereoPanner()
    panner.pan.value = Number(pan.value)
    oscillator.frequency.setValueAtTime(480, context.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(180, context.currentTime + .18)
    gain.gain.setValueAtTime(.08, context.currentTime)
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .25)
    oscillator.connect(gain); gain.connect(panner); panner.connect(context.destination)
    oscillator.start(); oscillator.stop(context.currentTime + .26)
    audioStatus.value = 'Played a short synthesized cue at pan ' + pan.value + '.'
  } catch { audioStatus.value = 'Audio is unavailable in this browser. The visual example still works.' }
}
onUnmounted(() => { context?.close() })
</script>

<template>
  <section class="mechanics-demo" aria-label="Interactive game mechanics examples">
    <div class="mechanic">
      <h3>Position becomes sound</h3>
      <p>Move the event across the court. The same position can drive animation and audio.</p>
      <svg viewBox="0 0 360 150" role="img" :aria-label="'Game event at '+x+' percent of the court'">
        <rect x="10" y="15" width="340" height="110" rx="6" fill="none" stroke="currentColor" opacity=".3" />
        <path d="M180 15v110M10 45h50v50H10M350 45h-50v50h50" fill="none" stroke="currentColor" opacity=".25" />
        <circle cx="180" cy="70" r="28" fill="none" stroke="currentColor" opacity=".25" />
        <circle :cx="20+Number(x)*3.2" cy="70" r="12" fill="#e68b48" />
        <text x="12" y="144" fill="currentColor" font-size="11">LEFT</text><text x="315" y="144" fill="currentColor" font-size="11">RIGHT</text>
      </svg>
      <label>Event position <output>{{ x }}%</output><input v-model="x" type="range" min="0" max="100" step="1" /></label>
      <p class="formula">Normalized pan = {{ pan }} <span>−1 left · 0 center · +1 right</span></p>
      <button @click="play">Play a short cue</button>
      <p role="status" class="demo-status">{{ audioStatus }}</p>
    </div>
    <div class="mechanic">
      <h3>A pattern is a rule</h3>
      <p>Change the count and rotation. One formula positions every marker in the ring.</p>
      <svg viewBox="0 0 360 180" role="img" :aria-label="count+' markers in a ring rotated '+rotation+' degrees'">
        <circle cx="180" cy="90" r="68" fill="none" stroke="currentColor" opacity=".2" />
        <line v-for="(dot,i) in dots" :key="'line'+i" x1="180" y1="90" :x2="dot.x" :y2="dot.y" stroke="currentColor" opacity=".15" />
        <circle cx="180" cy="90" r="5" fill="currentColor" />
        <circle v-for="(dot,i) in dots" :key="i" :cx="dot.x" :cy="dot.y" r="5" :fill="i===0?'#e68b48':'#6e9674'" />
      </svg>
      <label>Marker count <output>{{ count }}</output><input v-model="count" type="range" min="3" max="24" step="1" /></label>
      <label>Rotation <output>{{ rotation }}°</output><input v-model="rotation" type="range" min="0" max="360" step="5" /></label>
      <p class="formula">angle(i) = i × 360° / {{ count }} + {{ rotation }}°</p>
    </div>
  </section>
</template>

<style scoped>
.mechanics-demo{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:24px 0}.mechanic{border:1px solid var(--vp-c-divider);border-radius:10px;padding:20px;background:var(--vp-c-bg-soft)}.mechanic h3{margin:0 0 10px;font-size:17px}.mechanic p{font-size:13px;line-height:1.6}.mechanic svg{width:100%;height:auto;display:block;margin:12px 0}.mechanic label{display:block;font-size:12px;font-weight:600;margin:10px 0}.mechanic output{float:right;font-variant-numeric:tabular-nums}.mechanic input{display:block;width:100%;accent-color:var(--vp-c-brand-1);margin-top:10px}.formula{font-family:var(--vp-font-family-mono);font-size:11px!important}.formula span{display:block;color:var(--vp-c-text-2);font-family:var(--vp-font-family-base);margin-top:5px}.mechanic button{border:1px solid var(--vp-c-brand-1);border-radius:6px;color:var(--vp-c-brand-1);padding:7px 12px;font-size:12px;font-weight:600}.mechanic button:focus-visible,.mechanic input:focus-visible{outline:2px solid var(--vp-c-brand-1);outline-offset:4px}.demo-status{font-size:11px!important;color:var(--vp-c-text-2)}@media(max-width:900px){.mechanics-demo{grid-template-columns:1fr}}
</style>
