declare module 'animejs/lib/anime.es.js' {
  interface AnimeParams {
    targets?: unknown;
    autoplay?: boolean;
    loop?: boolean | number;
    direction?: 'normal' | 'reverse' | 'alternate';
    duration?: number;
    delay?: number | ((element: unknown, index: number, length: number) => number);
    easing?: string;
    [property: string]: unknown;
  }

  interface AnimeInstance {
    pause: () => void;
    play: () => void;
  }

  interface AnimeTimeline {
    add: (params: AnimeParams, offset?: number | string) => AnimeTimeline;
    pause: () => void;
    play: () => void;
  }

  interface AnimeFunction {
    (params: AnimeParams): AnimeInstance;
    timeline: (params?: AnimeParams) => AnimeTimeline;
    stagger: (value: number) => (element: unknown, index: number) => number;
    random: (min: number, max: number) => number;
    remove: (targets: unknown) => void;
  }

  const anime: AnimeFunction;
  export default anime;
}
