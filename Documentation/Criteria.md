# Menu

- <a href="/Readme.md">Project Breifing (Readme.me)</a>
- <a href="Feedback_Notes.md">Feedback & Notes</a>
- Criteria Notes & References - <b>You are here</b>
---

### Criteria & Notes 

#### **Purpose of this page**

This page is specifically built to make clear and direct links between the functionality of QuickQuiz, and the criteria of the Level 5 Web Development Course. 

It also serves as a checklist for myself to make sure I've covered all the criteria requirements.

---

### Project 2: Interactive Front End Development Criteria

#### Criteria 1:

- 1.1 Design for accessibility, UX, structure, and purpose. You need to
design a web application that:
    
    - Is accessible (e.g. readable by screen readers, has good colour contrast, can be used with a keyboard, etc.).
    
    - Follows good User Experience (UX) principles (e.g. easy to use, logical layout, clear design).
    
    - Has a structured layout (e.g. consistent sections, proper use of headers and containers).

    - Includes a navigation model (e.g. menus or links to move between parts of the site)

    - Clearly meets its intended purpose (e.g. if it’s a booking system, users should be able to book something easily).

- 1.2 Design user interactivity. You must design features that allow the user to:

    - Start and control actions (e.g. clicking buttons, filling forms, selecting options).

    - Receive feedback (e.g. error messages, success messages, visual changes when something happens).

- 1.3 Write custom code for a responsive web application. You should
write your own HTML, CSS and JavaScript, not rely on pre-built frameworks.

    - Be responsive (work well on different screen sizes, like phones, tablets, laptops).
        - I cover this in my css @media sections, and this can be tested on desktop my resizing the screen so that the width falls below 600px. You will observe the button size and positions changing, and the text moving position to make better use of the smaller screen.

    - Contain at least one HTML page, though multiple pages are encouraged.
    - Include significant interactive functionality (not just a static page—buttons, forms, sliders, etc.).


- 1.4 Write JavaScript to respond to user actions. Use JavaScript to:

    - React to what the user does (e.g. clicking a button, submitting a form, moving the mouse).
    - Show relevant behaviour (e.g. showing/hiding sections, updating text, validating form input).

- 1.5 Implement good design and media choices. Your final interactive
web application should:

    - Use images or graphics that are clear (not blurry or pixelated).
    - Have text that is readable and not hidden behind elements.
    - Apply consistent styling (e.g. fonts, colours, spacing are uniform across the site).
    - Ensure the foreground (text or buttons) is not too distracting (e.g. no flashing animations that make it hard to focus).



#### Criteria 2:

- 2.5 Use external files and proper linking. You should:

    - Put JavaScript code in external .js files.
        - Located at /assets/js/app.js

    - Link these files at the bottom of the <body> (or in the <head> only if needed before the body loads).
        - I have ensured that the app.js is loaded at the eof, so that the UI is loaded and displayed to the user before loading this asset, for a faster UX.

    - Place CSS in external .css files, linked in the <head> section of your HTML.
        - I load up the style.css on line 7 of the index.html, in the head section.





- 2.9 Organise your project files. You should:

    - Group your files by type into separate folders. E.g. css/, js/, images/, fonts/
        - Completed

    - Keep the project tidy and structured, making it easy to find things
        - Completed