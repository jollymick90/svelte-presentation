import {
  ExampleSvelteComponent,
  GenericSlide,
  History,
  LetsStarted,
  OtherFrameworkComponent,
  Whatis,
  WhatIsKeyPoint,
  WhatIsSvelte,
} from '$lib/components/slides/whatis';
import type { Component } from 'svelte';

import {
  AboutMe,
  Agenda,
  Title,
} from './components/slides/intro';
import Bacarotech from './components/slides/intro/Bacarotech.svelte';
import ComponentLocalRepl
  from './components/slides/syntax/ComponentLocalRepl.svelte';
import ComponentSyntax from './components/slides/syntax/ComponentSyntax.svelte';
import ComponentSyntaxTutorial
  from './components/slides/syntax/ComponentSyntaxTutorial.svelte';

const SlidesComponent = Title;
export const summary = $state({
  'title': Title,
  'agenda': Agenda,
  'aboutme': AboutMe,
  'bacarotech': Bacarotech,
  'letsstartedtitle': LetsStarted,
  'component_others': OtherFrameworkComponent,
  'component_firstcomponent': ExampleSvelteComponent,
  'whatis': Whatis,
  'whatispart': WhatIsSvelte,
  'keypoints': WhatIsKeyPoint,
  'history': History,

  'syntax': ComponentSyntax,
  'tutorial': ComponentSyntaxTutorial,
  'localrepl': ComponentLocalRepl,

  'component_title': GenericSlide,
  'component_whatis': GenericSlide,


  'component_gettingstart': GenericSlide,
  'compiler_title': GenericSlide,
  'compiler_compileruntimeexecution': GenericSlide,
  'compiler_magic': GenericSlide,// ???
  'compiler_pureruntime': GenericSlide,
  'compiler_compiletime': GenericSlide,
  'compiler_howitworks': GenericSlide,
  'compiler_howitworks_parse': GenericSlide,
  'compiler_howitworks_analyze': GenericSlide,
  'compiler_howitworks_transform': GenericSlide,
  'compiler_compiledcomponent': GenericSlide,
  'compiler_benchmark': GenericSlide,
  'svelte_kit_title': GenericSlide,
  'svelte_kit_keypoints': GenericSlide,
  //'SVELTE_KIT_KEYPOINTS': GenericSlide,
})

export type SlideState = {
  currentIndex: number,
  currentSlideKey: SlideKeys,
  currentComponent: Component<any>
}
export type SlideKeys = keyof typeof summary;


export const slidePages: SlideKeys[] = [
  'title',
  'agenda',
  'aboutme',
  'bacarotech',
  'localrepl',
  'syntax',
  'letsstartedtitle',
  'whatis',
  'whatispart',
  'history',
  'tutorial'
];

export let currentSlideIndex = $state(0);
export let currentSlide = $state<SlideKeys>('title');

export const slideStore = $state<{ state: SlideState }>({
  state: {
    currentIndex: 0,
    currentSlideKey: 'title' as SlideKeys,
    currentComponent: Title
  }
})