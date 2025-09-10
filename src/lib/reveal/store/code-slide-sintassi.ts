export const code01 = `
<script>
    import { $state } from 'svelte/state';
    let name = $state('Molly');
    let count = $state(0);
</script>

<h1>Hello {name}!</h1>

<button onclick={() => count++}>
    clicks: {count}
</button>

<style>
    h1 { color: tomato; }
</style>
`;

export const code02 = `
<script>
    import { $state } from 'svelte/state';
    let name = $state('Molly');
    let count = $state(0);
</script>

<h1>Hello {name}!</h1>

<button onclick={() => count++}>
    clicks: {count}
</button>

`;

export const code03 = `


<h1>Hello GDG Lecce!</h1>

`;



export const codeReacttivityReact = `
import { useState } from 'react';

const [age, setAge] = useState(28);

setAge(a => a + 1)
`;

export const codeReacttivityVue = `
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
count.value++
`;


export const codeReacttivitySignalAngular = `
import {signal} from '@angular/core';

const count = signal(0);
`;

export const codeReacttivitySignal = `
import { signal } from "@preact/signals-core";

const counter = signal(0);

// Read value from signal, logs: 0
console.log(counter.value);

// Write to a signal
counter.value = 1;
`;

export const codeReactivitySolid = `
import { createSignal, onCleanup } from "solid-js";

const [count, setCount] = createSignal(0);

`;

export const codeReacttivitySvelte = ``;

export const codeReactivity01 = `
<script>
	let name = "Michele"
	let count = 0
</script>

<h1>Hello {name}!</h1>

<input bind:value={name} />
<button onclick={() => count += 1}>
	clicks: {count}
</button>`;

export const codeReactivity02 = `
<script>
	let name = $state("Michele")
	let count = $state(0)
</script>

<h1>Hello {name}!</h1>

<input bind:value={name} />
<button onclick={() => count += 1}>
	clicks: {count}
</button>`;

export const codeReactivityDeep03 = `
<script>
    import { $state, $derived } from 'svelte/state';

    let numbers = $state([1, 2, 3, 4]);
    let total = $derived(numbers.reduce((t, n) => t + n, 0));

    function addNumber() {
        numbers.push(numbers.length + 1);
    }
</script>

<p>I numeri sono: {numbers.join(' + ')}</p>
<p>Il totale è: {total}</p>

<button onclick={addNumber}>
    Aggiungi un numero
</button>
`;

export const codeStyle01 = `
<h1>Hello Svelte</h1>
<style>
  h1 {
    color: hotpink;
  }
</style>

`;

export const codeStyle01Nested = `
<h1>Hello Svelte</h1>
<Nested></Nested>

<style>
  h1 {
    color: hotpink;
  }
</style>

`;
export const codeStyle02 = `
<h1>Hello GDG Lecce</h1>

<style>
  h1 {
    color: white;
  }
</style>

`;


export const codeBindingDirective01 = `
<script>
    import { $state } from 'svelte/state';

    let name = $state('Molly');
</script>

<h1>Benvenuta, {name}!</h1>

<p>Inserisci il nome:</p>
<input bind:value={name} />

{#if name === 'Molly'}
    <p>Sei tornata!</p>
{:else}
    <p>Ciao, {name}!</p>
{/if}
`;

