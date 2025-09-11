# Rendering Configuration Cases

The rendering behavior of your application can be configured by combining three key boolean flags: `ssr` (Server-Side Rendering), `csr` (Client-Side Rendering), and `prerendering`. Here are the common configurations and their use cases.

---

### **1. Hybrid Rendering (Default)**

**Configuration:**
- `ssr: true`
- `csr: true`
- `prerendering: false`

This is the standard, **hybrid mode** for a modern web application.
- **SSR** handles the initial page load on the server, providing a fast "first paint" and better SEO.
- **CSR** takes over after the page is loaded, allowing for dynamic updates and client-side navigation without full page reloads. This is often referred to as "hydration."

**Use Case:** Ideal for most dynamic applications with user authentication, real-time data, and complex user interfaces.

---

### **2. Static Site Generation (Prerendering)**

**Configuration:**
- `ssr: true` (at build time)
- `csr: true` (for hydration)
- `prerendering: true`

When a page is prerendered, it is rendered to static HTML at **build time**.
- The server generates the HTML and CSS for a given page, saving it as a static file.
- The client then loads this static file. If `csr` is also `true`, the page is "hydrated" with JavaScript, making it interactive.

**Use Case:** Perfect for content-heavy pages that don't change often, such as marketing sites, blogs, and documentation. This method provides the fastest possible load times and minimal server costs.

---

### **3. Client-Side Rendering (CSR) Only**

**Configuration:**
- `ssr: false`
- `csr: true`
- `prerendering: false`

In this mode, the server only sends a basic HTML shell. All rendering and data fetching happen on the client's browser using JavaScript.
- The user sees a blank page or a loading spinner until the JavaScript bundle is downloaded and executed.

**Use Case:** Suitable for web applications that require user authentication before any content is displayed, or for Single Page Applications (SPAs) that don't need initial SEO benefits.

---

### **4. Fully Static (No Client-Side JavaScript)**

**Configuration:**
- `ssr: true` (or `prerendering: true`)
- `csr: false`

This configuration creates a fully static, non-interactive page.
- The HTML is generated on the server (either at build time or on request).
- No JavaScript is sent to the client to handle client-side routing or interactivity. The page behaves like a classic, static website.

**Use Case:** Excellent for simple pages where interactivity is not needed, such as legal pages, privacy policies, or extremely lightweight landing pages.