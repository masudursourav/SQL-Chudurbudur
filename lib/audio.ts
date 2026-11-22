/** Feedback sounds served from /public/audio. */

const AUDIO_BASE = '/audio/';

const WRITE_QUERY = 'ahovatije.mp3';
const SUCCESS = ['sucess.mp3', 'sucess 2.mp3', 'sucess 3.mp3', 'sucess 4.mp3'];
const FAILED = [
  'failed.mp3',
  'failed 2.mp3',
  'failed 3.mp3',
  'failed 4.mp3',
  'failed 5.mp3',
];

const lastPlayed: { success: string | null; failed: string | null } = {
  success: null,
  failed: null,
};

let current: HTMLAudioElement | null = null;

/** Pick a random clip, but never the same one twice in a row for this category. */
function pickNext(pool: readonly string[], previous: string | null): string {
  const choices = previous && pool.length > 1 ? pool.filter((file) => file !== previous) : pool;
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(file: string): void {
  if (typeof window === 'undefined') return;
  if (current) {
    current.pause();
    current.currentTime = 0;
  }
  current = new Audio(encodeURI(AUDIO_BASE + file));
  void current.play().catch(() => {
    // Browsers may block playback without user interaction — fail silently.
  });
}

/** UPDATE / INSERT / DELETE / any write attempt. */
export function playWriteQueryAudio(): void {
  play(WRITE_QUERY);
}

/** Correct answer — random success clip, no immediate repeats. */
export function playSuccessAudio(): void {
  const file = pickNext(SUCCESS, lastPlayed.success);
  lastPlayed.success = file;
  play(file);
}

/** Any other error or a wrong answer — random failed clip, no immediate repeats. */
export function playFailedAudio(): void {
  const file = pickNext(FAILED, lastPlayed.failed);
  lastPlayed.failed = file;
  play(file);
}
