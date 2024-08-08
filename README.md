# History Matters

## Project Overview

The "History Matters" project is an educational quiz game designed to test users' knowledge of historical facts. The game is built using HTML, CSS, and JavaScript and is optimized for both larger devices (like laptops) and mobile devices.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Testing](#testing)
4. [References](#references)

## Features

- **Interactive Quiz:** Users answer multiple-choice questions on historical events.
- **Responsive Design:** Optimized for various screen sizes from mobile to desktop.
- **Dynamic Content:** Questions and answers are loaded dynamically from a separate JavaScript file.
- **Modal Popups:** Used for displaying additional information and confirmations.
- **Timer:** Countdown timer for each question.
- **Restart Button:** Allows users to restart the quiz.

## Technologies Used

- **HTML:** Structuring the content.
- **CSS:** Styling the interface with custom fonts and responsive design.
- **JavaScript:** Handling dynamic content, user interactions, and game logic.

## Testing

The following testing methods were employed to ensure a smooth and enjoyable user experience:

1. **Functional Testing:** Ensuring all features work as intended.
2. **Compatibility Testing:** Checking the game on different devices and browsers.
3. **User Feedback:** Collecting feedback from users to improve the game.

### Validator Testing

![CSS Validator](assets/images/css%20validator.png)
*CSS Validator screenshot showing the validation results.*

### Lighthouse Testing

![Lighthouse Testing](assets/images/lighthouse%20testing.png)
*Lighthouse testing report showing performance and accessibility metrics.*

The project is currently deployed and can be accessed [here](https://github.com/collinsevan/history-matters/deployments/github-pages).

## References

### JavaScript Code References

- **DOMContentLoaded Event Listener:**
  - **Source:** [MDN Web Docs - DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
  - **Explanation:** The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed.

- **Query Selector and Event Listeners:**
  - **Source:** [MDN Web Docs - Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  - **Source:** [MDN Web Docs - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  - **Explanation:** Using `document.querySelector` to select elements and `addEventListener` to add event listeners to these elements.

- **Fisher-Yates Shuffle Algorithm:**
  - **Source:** [The Modern JavaScript Tutorial - Shuffle an array](https://javascript.info/task/shuffle)
  - **Explanation:** The Fisher-Yates (aka Knuth) Shuffle for shuffling an array.

- **setInterval and clearInterval for Timer:**
  - **Source:** [MDN Web Docs - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
  - **Source:** [MDN Web Docs - clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
  - **Explanation:** Using `setInterval` to create a timer and `clearInterval` to stop the timer.

- **Handling Click Events Outside of a Modal:**
  - **Source:** [Stack Overflow - Close modal by clicking outside](https://stackoverflow.com/questions/36936620/how-to-close-a-modal-on-click-outside-of-it)
  - **Explanation:** Detecting and handling clicks outside of a modal to close it.

### HTML Code References

- **Basic HTML Structure:**
  - **Source:** [MDN Web Docs - HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - **Explanation:** The basic structure of an HTML document including doctype, head, and body sections.

- **Meta Tags:**
  - **Source:** [MDN Web Docs - HTML: Meta elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
  - **Explanation:** Usage of meta tags for character set, viewport settings, and SEO-related metadata.

- **ARIA Attributes for Accessibility:**
  - **Source:** [MDN Web Docs - ARIA: Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
  - **Explanation:** Adding ARIA attributes to improve accessibility.

- **Google Fonts:**
  - **Source:** [Google Fonts](https://fonts.google.com/)
  - **Explanation:** Using Google Fonts to include custom fonts in your web page.

### CSS References

- **Google Fonts Import:**
  - **Source:** [Google Fonts](https://fonts.google.com/)
  - **Explanation:** Importing fonts using `@import url`.

- **General CSS Styling:**
  - **Source:** [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - **Explanation:** General CSS rules for styling elements including `*`, `body`, and other common selectors.

- **Media Queries:**
  - **Source:** [MDN Web Docs - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
  - **Explanation:** Using media queries to apply styles based on screen size.

### Additional References

- **Font Awesome Icons:**
  - **Source:** [Font Awesome](https://fontawesome.com/)
  - **Explanation:** Including Font Awesome icons using their CDN.

- **Modal and Navigation Bar Examples:**
  - **Source:** Various online tutorials and documentation on creating modals and navigation bars.
  - **Explanation:** Common patterns and practices for implementing modals and navigation bars.

### Dynamically Loaded HTML References

- **Dynamically Loading HTML Content:**
  - **Source:** [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - **Explanation:** Using the Fetch API to load HTML content dynamically from a separate JavaScript file.
  - **Source:** [MDN Web Docs - HTMLTemplateElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
  - **Explanation:** Utilizing `<template>` elements for loading and rendering HTML snippets dynamically.

### Projects for Inspiration

- **Pic-Phonics:**
  - **Source:** [GitHub - Pic-Phonics](https://github.com/elomasney/Pic-Phonics)
  - **Explanation:** A project focusing on interactive phonics games.

- **Anagram Solver:**
  - **Source:** [GitHub - Anagram Solver](https://github.com/elainebroche-dev/ms2-anagram)
  - **Explanation:** A project demonstrating the implementation of anagram solving logic.

