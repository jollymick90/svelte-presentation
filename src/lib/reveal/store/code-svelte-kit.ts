export const routingLibrary = `
import { Router, Route, Link } from "svelte-routing";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";

</script>
<Router>
<Route path="/" component={Home} />
<Route path="/about" component={About} />
</Router>
`;

export const routingSvelteKit = `
# Routing Overview

- **\`+page.svelte\`**: 
User Interface: This is the page!
- **\`+page.server.js\`**: 
Server side loading data and prerendering config
- **\`+layout.svelte\`**: 
Common structure pages (header, footer, sidebar, ...)
- **\'+server.js\`**: 
Build your API REST-like

`;

export const pageConfiguration = `
 // +page.ts Hybrid Rendering
 export const ssr = true;
 export const csr = true;
 export const prerendering = false;

`;

