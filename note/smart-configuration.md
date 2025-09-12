example: 
Visible, non-interactive elements with a click event must be accompanied by a keyboard event handler. Consider whether an interactive element such as `<button type="button">` or `<a>` might be more appropriate
https://svelte.dev/e/a11y_click_events_have_key_events

<h2 onclick={()=>{window.alert("WTF")}} style="color:#0b2a4a">Final Thoughts</h2>