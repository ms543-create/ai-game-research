# Audio and music

We want sound that improves the game without making the experience noisy, slow to load, or dependent on a live generation service.

## Approaches to explore

| Approach | Candidate use | Test before adopting |
| --- | --- | --- |
| Web Audio synthesis | UI clicks, scoring cues, a buzzer | Loudness, variation, latency, mute behavior |
| AI sound generation | Crowd textures and short effects | Artifacts, consistency, cleanup effort, usage terms |
| Generated music | A menu loop or tension layer | Loop seams, musical consistency, file size, rights |
| Generated voice | Tutorial or fictional announcer | Intelligibility, timing, captions, appropriate voice permission |
| Hand-edited audio | Trim, normalize, and repair source material | Whether cleanup removes the perceived benefit of generation |

The [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) provides browser audio processing. [Tone.js](https://tonejs.github.io/) is another candidate for musical scheduling and synthesis. [ElevenLabs documentation](https://elevenlabs.io/docs/overview) is a starting point for researching generated sound and speech; specific models, export terms, and pricing must be verified before a trial.

## First sound pack

Use one shared brief: a correct-answer cue, an incorrect-selection cue, a round-clear cue, a final buzzer, and a short ambient loop. Compare a synthesized pack with a generated pack after both are integrated at similar loudness.

Record generation attempts, accepted clips, cleanup minutes, original and compressed size, duration, peak level, and audible problems. Use the same playback context for listening comparisons.

## Integration requirements

Audio must start in response to an appropriate player interaction and respect browser autoplay behavior. Provide mute and volume controls, pause or fade where appropriate, and avoid making essential information available only through sound. Test repeated playback and rapid scoring events.

Use original or appropriately permitted voices and music. Keep the provider and asset terms in the [asset record](./sources.md#asset-provenance-record).

See [EXP-002](./experiments.md#exp-002-sound-pack).
