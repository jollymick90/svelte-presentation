import Agenda from "./components/slides/Agenda.svelte";
import Whatis from "./components/slides/Whatis.svelte";

export const list = {
    1: Agenda,
    2: Whatis
}
export type SlideKeys = keyof typeof list;

export const slides: SlideKeys[] = [
    1,2
    //,2,3,4,5,6
];