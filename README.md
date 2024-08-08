# History Matters - Interactive History Quiz Game

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Color Scheme](#color-scheme)
4. [User Experience](#user-experience)
5. [Testing](#testing)
6. [References](#references)
7. [Credits](#credits)

## Introduction

Welcome to **History Matters** - an engaging history quiz game that challenges your knowledge on various historical events and figures. Test your history IQ by playing this interactive and fun quiz game!

## Features

- **Interactive Gameplay:** Answer 10 randomized questions with a timer for each question.
- **Score Tracking:** Your score is displayed at the end of the quiz.
- **Responsive Design:** The game is accessible on various devices and screen sizes.
- **Modal Instructions:** Easy-to-understand instructions provided in a modal popup.
- **Exit Confirmation:** Prompts the user to confirm before exiting the game to avoid accidental exits.

## Color Scheme

- **Primary Color:** #2F191B (Dark Red)
- **Secondary Color:** #E2A946 (Gold)
- **Background Color:** #E8D4A3 (Light Beige)
- **Text Color:** #E8D4A3 (Light Beige) for text on the dark background, #2F191B (Dark Red) for text on the light background
- **Correct Answer Color:** #4CAF50 (Green)
- **Incorrect Answer Color:** #F44336 (Red)

## User Experience

The game is designed to be user-friendly and accessible. Key UX considerations include:

- **Clear Instructions:** Users are provided with clear instructions on how to play the game through a modal popup.
- **Responsive Design:** The layout adjusts to different screen sizes, ensuring a seamless experience on both mobile and desktop devices.
- **Feedback on Answers:** Users receive immediate visual feedback on their answers, with correct answers highlighted in green and incorrect answers in red.
- **Confirmation Modals:** To prevent accidental actions, modals are used for instructions and exit confirmation.

## Testing

The following UX testing methods were employed to ensure a smooth and enjoyable user experience:

1. **Usability Testing:** Observing users as they interact with the game to identify any usability issues.
2. **A/B Testing:** Testing different design variations to determine which one provides the best user experience.
3. **Feedback Collection:** Gathering feedback from users to understand their preferences and pain points.

## References

### JavaScript Code References

- **DOMContentLoaded Event Listener:**
  - Source: [MDN Web Docs - DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)
  - Explanation: The `DOMContentLoaded` event fires when the initial HTML document has been completely loaded and parsed.

- **Query Selector and Event Listeners:**
  - Source: [MDN Web Docs - Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  - Source: [MDN Web Docs - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  - Explanation: Using `document.querySelector` to select elements and `addEventListener` to add event listeners to these elements.

- **Fisher-Yates Shuffle Algorithm:**
  - Source: [The Modern JavaScript Tutorial - Shuffle an array](https://javascript.info/task/shuffle)
  - Explanation: The Fisher-Yates (aka Knuth) Shuffle for shuffling an array.

- **setInterval and clearInterval for Timer:**
  - Source: [MDN Web Docs - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
  - Source: [MDN Web Docs - clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
  - Explanation: Using `setInterval` to create a timer and `clearInterval` to stop the timer.

- **Handling Click Events Outside of a Modal:**
  - Source: [Stack Overflow - Close modal by clicking outside](https://stackoverflow.com/questions/32553158/detect-click-outside-div-using-javascript)
  - Explanation: Detecting and handling clicks outside of a modal to close it.

### HTML Code References

- **Basic HTML Structure:**
  - Source: [MDN Web Docs - HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Explanation: The basic structure of an HTML document including doctype, head, and body sections.

- **Meta Tags:**
  - Source: [MDN Web Docs - HTML: Meta elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
  - Explanation: Usage of meta tags for character set, viewport settings, and SEO-related metadata.

- **ARIA Attributes for Accessibility:**
  - Source: [MDN Web Docs - ARIA: Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
  - Explanation: Adding ARIA attributes to improve accessibility.

- **Google Fonts:**
  - Source: [Google Fonts](https://fonts.google.com/)
  - Explanation: Using Google Fonts to include custom fonts in your web page.

### CSS References

- **Google Fonts Import:**
  - Source: [Google Fonts](https://fonts.google.com/)
  - Explanation: Importing fonts using `@import url`.

- **General CSS Styling:**
  - Source: [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Explanation: General CSS rules for styling elements including `*`, `body`, and other common selectors.

- **Media Queries:**
  - Source: [MDN Web Docs - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
  - Explanation: Using media queries to apply styles based on screen size.

### Additional References

- **Font Awesome Icons:**
  - Source: [Font Awesome](https://fontawesome.com/)
  - Explanation: Including Font Awesome icons using their CDN.

- **Modal and Navigation Bar Examples:**
  - Source: Various online tutorials and documentation on creating modals and navigation bars.
  - Explanation: Common patterns and practices for implementing modals and navigation bars.