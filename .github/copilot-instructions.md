# Copilot Instructions for NLW-20---Agents

## Project Overview
This is a simple web application with static frontend files. The main files are:
- `index.html`: Main HTML structure and UI elements
- `script.js`: Handles DOM interactions and form submission logic
- `style.css`: Custom styles for the UI
- `assets/`: Contains images used in the UI

## Architecture & Data Flow
- All logic is client-side JavaScript. There is no backend or build system.
- The form (`form` element) collects user input (API key, game selection, question) and triggers the `enviarFormulario` function on submit.
- DOM elements are accessed by their IDs and updated directly.
- No frameworks or external JS libraries are used.

## Developer Workflow
- Edit HTML, JS, and CSS files directly. No build or test commands are required.
- To preview changes, open `index.html` in a browser.
- No package manager, dependencies, or environment setup required.

## Project-Specific Patterns
- All DOM access uses `document.getElementById`.
- Event listeners are attached directly in `script.js`.
- Form submission is handled by preventing default behavior and running custom logic in `enviarFormulario`.
- UI updates (e.g., showing AI responses) are done by setting `.innerText` or `.value` on DOM elements.

## Integration Points
- The project expects an API key and game selection from the user, but does not currently integrate with any external APIs.
- All assets are local and referenced via relative paths.

## Example: Form Handling
```javascript
const enviarFormulario = (event) => {
    event.preventDefault()
    // Custom logic here
}
form.addEventListener('submit', enviarFormulario)
```

## Key Files
- `index.html`: UI structure
- `script.js`: Main logic
- `style.css`: Styles
- `assets/`: Images

## Conventions
- Keep all logic in `script.js`.
- Use clear, descriptive IDs for DOM elements.
- Keep UI responsive and simple.

---
For questions or improvements, update this file to document new patterns or workflows.
