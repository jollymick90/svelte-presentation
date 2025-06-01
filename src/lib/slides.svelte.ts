import AboutMe from "./components/slides/AboutMe.svelte";
import Agenda from "./components/slides/Agenda.svelte";
import Title from "./components/slides/Title.svelte";
import Whatis from "./components/slides/Whatis.svelte";

export const summary = {
    '01': Title,
    '02': AboutMe,
    '11': Agenda,
    '22': Whatis
}
export type SlideKeys = keyof typeof summary;

export const slidePages: SlideKeys[] = [
    '01',
    '02',
    '11',
    '22'
];

export let currentSlideIndex = $state(0);
export let currentSlide = $state<SlideKeys>('01');
export const slideStore = $state({
    currentIndex: 0,
    currentSlideKey: '01' as SlideKeys
})