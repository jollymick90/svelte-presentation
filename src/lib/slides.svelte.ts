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

import {
  AboutMe,
  Agenda,
  Title,
} from './components/slides/intro';
import ComponentLocalRepl
  from './components/slides/syntax/ComponentLocalRepl.svelte';
import ComponentSyntax from './components/slides/syntax/ComponentSyntax.svelte';
import ComponentSyntaxTutorial
  from './components/slides/syntax/ComponentSyntaxTutorial.svelte';

export const summary = $state({    
    'title': Title,
    'agenda': Agenda,
    'aboutme': AboutMe,
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
export type SlideKeys = keyof typeof summary;

export const slidePages: SlideKeys[] = [
    'title',
    'localrepl',
    'syntax',
    'agenda',
    'aboutme',
    'letsstartedtitle',
    'whatis',
    'whatispart',
    'history',
    'tutorial'
    

];

export let currentSlideIndex = $state(0);
export let currentSlide = $state<SlideKeys>('title');
export const slideStore = $state({
    currentIndex: 0,
    currentSlideKey: 'title' as SlideKeys,
    currentComponent: Title
})