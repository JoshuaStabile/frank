export const STYLES = `
#scene { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;}
svg { image-rendering: pixelated; image-rendering: crisp-edges; }

/*
@font-face {
    font-family: 'ChicagoKare-Regular';
    src: url('/local/fonts/ChicagoKare-Regular.ttf') format('truetype');
}

#body {
  font-family: 'ChicagoKare-Regular' !important;
}
*/

/* voice-satellite overrides */

#voice-satellite-ui {
  display: none !important;
}

/*
#voice-satellite-ui .vs-rainbow-bar {
  display: none;
}

#voice-satellite-ui .vs-chat-container {
  bottom: 8vh !important;
}

#voice-satellite-ui .vs-chat-msg {
  color: black !important;
  display: none;
}

#voice-satellite-ui .vs-chat-msg.assistant:not(.thinking):not(.idle) {
  display: block !important;
  text-align: center !important; 
  width: 50% !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
*/

/**
 * system.css
 * Copyright (c) 2022 Sakun Acharige <sakun.co>
 */

:root {
  --box-shadow: 2px 2px;

  /* Spacing */
  --element-spacing: 8px;
  --grouped-element-spacing: 6px;
  --radio-width: 12px;
  --checkbox-width: 13px;
  --radio-label-spacing: 6px;

  /* Some detailed computations for radio buttons and checkboxes (from 98.css) */
  --radio-total-width-precalc: var(--radio-width) + var(--radio-label-spacing);
  --radio-total-width: calc(var(--radio-total-width-precalc));
  --radio-left: calc(-1 * var(--radio-total-width-precalc));
  --radio-dot-width: 6px;
  --radio-dot-top: calc(var(--radio-width) / 2 - var(--radio-dot-width) / 2);
  --radio-dot-left: calc(
    -1 * (var(--radio-total-width-precalc)) + var(--radio-width) / 2 - var(
        --radio-dot-width
      ) / 2
  );

  --checkbox-total-width-precalc: var(--checkbox-width) +
    var(--radio-label-spacing);
  --checkbox-total-width: calc(var(--checkbox-total-width-precalc));
  --checkbox-left: calc(-1 * var(--checkbox-total-width-precalc));
  --checkmark-width: 12px;
  --checkmark-top: 2px;
  --checkmark-left: 2px;

  /* ---- ⚫️ Colors ⚪️ ---- */
  /* Base Tokens */
  --sys-color-white: #FFFFFF;
  --sys-color-black: #000000;
  --sys-color-grey: #A5A5A5;
  --sys-color-darkgrey: #B6B7B8;

  /* Theme Tokens */
  --primary: var(--sys-color-white);
  --secondary: var(--sys-color-black);
  --tertiary: var(--sys-color-grey);

  /* Component Tokens */
  --disabled: var(--sys-color-darkgrey);
}

@font-face {
  font-family: Chicago;
  src: url("fonts/ChicagoFLF.woff") format("woff");
  src: url("fonts/ChicagoFLF.woff2") format("woff2");
}
@font-face {
  font-family: Monaco;
  src: url("fonts/monaco.woff") format("woff");
  src: url("fonts/monaco.woff2") format("woff2");
}

/* Fonts below are recreations by Giles Booth */
@font-face {
  font-family: Chicago_12;
  src: url("fonts/ChiKareGo2.woff") format("woff");
  src: url("fonts/ChiKareGo2.woff2") format("woff2");
}
@font-face {
  font-family: Geneva_9;
  src: url("fonts/FindersKeepers.woff") format("woff");
  src: url("fonts/FindersKeepers.woff2") format("woff2");
}
::-webkit-scrollbar {
  width: 22px;
  background-color: var(--primary);
}

::-webkit-scrollbar-track {
  background: linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%, var(--secondary)), linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%, var(--secondary));
  background-color: var(--primary);
  background-size: 4px 4px;
  background-position: 0 0, 2px 2px;
  width: 10px;
  border-left: 3px solid var(--secondary);
}

::-webkit-scrollbar-thumb {
  width: 20px;
  box-sizing: content-box;
  background-color: var(--primary);
  border: 2px solid var(--secondary);
  border-right: none;
}

::-webkit-scrollbar-button:horizontal:start:decrement,
::-webkit-scrollbar-button:horizontal:end:increment,
::-webkit-scrollbar-button:vertical:start:decrement,
::-webkit-scrollbar-button:vertical:end:increment {
  display: block;
}

::-webkit-scrollbar-button:vertical:start {
  background-repeat: no-repeat;
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-up.svg");
}
::-webkit-scrollbar-button:vertical:start:active {
  background-repeat: no-repeat;
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-up-active.svg");
}
::-webkit-scrollbar-button:vertical:end {
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-down.svg");
}
::-webkit-scrollbar-button:vertical:end:active {
  background-repeat: no-repeat;
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-down-active.svg");
}

::-webkit-scrollbar-button:horizontal:start {
  background-repeat: no-repeat;
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-left.svg");
}
::-webkit-scrollbar-button:horizontal:start:active {
  background-repeat: no-repeat;
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-left-active.svg");
}
::-webkit-scrollbar-button:horizontal:end {
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-right.svg");
}
::-webkit-scrollbar-button:horizontal:end:active {
  background-repeat: no-repeat;
  height: 23.38px;
  background-image: svg-load("./icon/scrollbar-right-active.svg");
}

body {
  background: linear-gradient(90deg, var(--primary) 21px, transparent 1%) center, linear-gradient(var(--primary) 21px, transparent 1%) center, var(--secondary);
  background-size: 22px 22px;
  background-attachment: fixed;
}

a {
  color: var(--secondary);
  text-decoration: underline;
}

hr {
  border-top: 0.15em solid var(--secondary);
}

/*.container {
  width: 50%;
  margin: 0 auto;
  display: block;
}
*/
h1,
.heading {
  font-family: Chicago;
  font-size: 1em;
}

h2 {
  font-family: Chicago;
  font-size: 2em;
}

/* buttons */
.standard-button {
  display: block;
  min-width: 59px;
  min-height: 20px;
}

/* dialogs & modals */
.standard-dialog {
  border: 2px solid;
  padding: 10px;
  box-shadow: var(--box-shadow);
  background-color: var(--primary);
}

.modal-dialog, .alert-box {
  width: auto;
  padding: 13px;
  background: var(--primary);
}

.modal-contents, .alert-contents {
  padding: 10px;
}

.modeless-dialog {
  height: 100%;
  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
  font-size: 18px;
  letter-spacing: -0.025em;
}

.inner-border {
  border-color: var(--secondary);
  border-top: 3.5px solid;
  border-bottom: 3.5px solid;
  border-left: 5px solid;
  border-right: 5px solid;
}
.outer-border {
  border-color: var(--secondary);
  border: 2px solid;
  padding: 3px;
}

/* title bar */
.title-bar {
  flex: none;
  display: flex;
  align-items: center;
  height: 1.5rem;
  margin: 0.1rem 0;
  padding: 0.2rem 0.1rem;
  background: linear-gradient(var(--secondary) 50%, transparent 50%);
  background-size: 6.6666666667% 13.3333333333%;
  background-clip: content-box;
}
.title-bar .title {
  padding: 0 0.5em;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.1;
  text-align: center;
  background: var(--primary);
  cursor: default;
  font-family: Chicago_12;
}

.inactive-title-bar {
  flex: none;
  display: flex;
  align-items: center;
  height: 1.5rem;
  margin: 0.1rem 0;
  padding: 0.2rem 0.1rem;
  background-size: 6.6666666667% 13.3333333333%;
  background-clip: content-box;
}
.inactive-title-bar .title {
  padding: 0 0.5em;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.1;
  text-align: center;
  cursor: default;
  font-family: Chicago_12;
  color: var(--tertiary);
}

.title-bar button {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 0.2rem;
  border: 4px solid var(--secondary);
  background-color: var(--primary);
  cursor: pointer;
  transform: scale(0.5);
}
.title-bar button span {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
.title-bar button.close::before, .title-bar button.close::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}
.title-bar button.close::before {
  background: linear-gradient(var(--secondary) 0%, var(--secondary) 100%) left center, linear-gradient(var(--secondary) 0%, var(--secondary) 100%) right center, linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center top, linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center bottom;
  background-size: 30% 4px, 30% 4px, 4px 30%, 4px 30%;
  background-repeat: no-repeat;
}
.title-bar button.close::after {
  background: linear-gradient(var(--secondary) 0%, var(--secondary) 100%) left center, linear-gradient(var(--secondary) 0%, var(--secondary) 100%) right center, linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center top, linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center bottom;
  background-size: 22.5% 3.6363636364px, 22.5% 3.6363636364px, 3.6363636364px 22.5%, 3.6363636364px 22.5%;
  background-repeat: no-repeat;
  transform: rotate(45deg) scale(1.1);
}
.title-bar button.close:active::before, .title-bar button.close:active::after {
  opacity: 1;
}
.title-bar button.resize {
  background: linear-gradient(var(--secondary) 0%, var(--secondary) 100%) left 58%, linear-gradient(to bottom, var(--secondary) 0%, var(--secondary) 100%) 58% top;
  background-size: 60% 4px, 4px 60%;
  background-repeat: no-repeat;
  background-color: var(--primary);
}
.title-bar button.resize:active {
  background: var(--primary);
}
.title-bar button.hidden {
  visibility: hidden;
}

.window {
  flex-direction: column;
  margin: 1rem;
  min-width: 320px;
  overflow: hidden;
  background-color: var(--primary);
  border: 0.1em solid var(--secondary);
  font-family: "Inconsolata", Menlo, Chicago, Geneva;
}
.window-pane {
  overflow-y: scroll;
  height: 100%;
  padding: 1rem 2rem;
  font-size: 18px;
  letter-spacing: -0.025em;
  /*margin-bottom: 1rem;*/
}
.window-pane::-webkit-scrollbar {
  width: 22px;
  background-color: var(--primary);
}
.window-pane::-webkit-scrollbar-track {
  background: linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%, var(--secondary)), linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%, var(--secondary));
  background-color: var(--primary);
  background-size: 4px 4px;
  background-position: 0 0, 2px 2px;
  width: 10px;
  border-left: 4px solid var(--secondary);
}
.window-pane::-webkit-scrollbar-thumb {
  width: 20px;
  box-sizing: content-box;
  background-color: var(--primary);
  border: 2px solid var(--secondary);
  border-right: none;
}

.separator {
  flex: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /*padding: 0.4rem 0.8rem;*/
  border-top: 0.1rem solid var(--secondary);
  border-width: 0.1rem 0;
  font-size: 1rem;
}

.details-bar {
  flex: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4rem 0.8rem;
  border: 0.1rem solid var(--secondary);
  border-width: 0.1rem 0;
  font-size: 1rem;
  font-weight: 100;
}


/* buttons */
.btn, .btn-default {
  min-height: 20px;
  min-width: 59px;
  padding: 0 20px;
  text-align:center;
  background: var(--primary);
  border-style: solid;
  border-width: 5.5px;
  border-image: url("./icon/button.svg") 30 stretch;
  color: var(--secondary);
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-family: Chicago_12;
  cursor: pointer;
}

.btn:active {
  background: var(--secondary);
  border-radius:6px;
  color: var(--primary);
  font-family: Chicago_12;
}

.btn:disabled {
  min-height: 20px;
  min-width: 59px;
  text-align:center;
  background: var(--primary);
  border-style: solid;
  border-width: 5.5px;
  border-image: url("./icon/button.svg") 30 stretch;
  color: var(--disabled);
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-family: Chicago_12;
}

.btn-default {
  border-image: url("./icon/button-default.svg") 60 stretch;
  border-width: 0.5em;
}

.btn-default:active {
  border-radius: 12px;
}

/* text input */
input  {
  border: 1.5px solid var(--secondary);
  font-family: Chicago_12;
  font-size: 18px;
  padding-left: 5px;
}

input:focus  {
  outline:none;
}

input[type="text"]:focus-visible,
input[type="email"]:focus-visible,
input[type="password"]:focus-visible,
input[type="number"]:focus-visible,
input[type="date"]:focus-visible,
input[type="time"]:focus-visible,
input[type="datetime"]:focus-visible,
input[type="datetime-local"]:focus-visible,
input[type="month"]:focus-visible,
input[type="week"]:focus-visible,
input[type="search"]:focus-visible,
input[type="tel"]:focus-visible,
input[type="color"]:focus-visible,
textarea:focus {
  background: var(--secondary);
  color: var(--primary);
}

input[type="radio"] + label::before {
  border-image: svg-load("./icon/radio-border.svg");
  width: 20px;
  height: 20px;
}

input[type="checkbox"] + label::before {
  border: 1.5px solid var(--secondary);
  width: 20px;
  height: 20px;
}

input[type="radio"],
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
  background: 0;
  position: fixed;
  opacity: 0;
  border: none;
}

input[type="radio"] + label,
input[type="checkbox"] + label {
  line-height: 13px;
  padding-left: 5px;
}

input[type="radio"] + label {
  position: relative;
  margin-left: var(--radio-total-width);
}

input[type="radio"] + label::before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(-1 * (var(--radio-total-width-precalc)));
  display: inline-block;
  width: var(--radio-width);
  height: var(--radio-width);
  margin-right: var(--radio-label-spacing);
  background: svg-load("./icon/radio-border.svg");
}

input[type="radio"]:focus-visible + label::before,
input[type="radio"]:hover + label::before {
  background-image: svg-load("./icon/radio-border-focused.svg");
}

input[type="radio"]:checked + label::after {
  content: "";
  display: block;
  width: var(--radio-dot-width);
  height: var(--radio-dot-width);
  top: var(--radio-dot-top);
  left: var(--radio-dot-left);
  position: absolute;
  background: svg-load("./icon/radio-dot.svg");
}

input[type="checkbox"] + label {
  position: relative;
  margin-left: var(--checkbox-total-width);
}

input[type="checkbox"] + label::before {
  content: "";
  position: absolute;
  left: calc(-1 * (var(--checkbox-total-width-precalc)));
  display: inline-block;
  width: var(--checkbox-width);
  height: var(--checkbox-width);
  background: var(--button-highlight);
  box-shadow: var(--border-field);
  margin-right: var(--radio-label-spacing);
}

input[type="checkbox"]:focus-visible + label::before,
input[type="checkbox"]:hover + label::before {
  outline: 1px solid var(--secondary);
}

input[type="checkbox"]:checked + label::after {
  content: "";
  display: block;
  width: var(--checkmark-width);
  height: var(--checkmark-width);
  position: absolute;
  top: var(--checkmark-top);
  left: calc(
    -1 * (var(--checkbox-total-width-precalc)) + var(--checkmark-left)
  );
  background: svg-load("./icon/checkmark.svg");
  background-repeat: no-repeat;
}


input[type="checkbox"][disabled] + label::before {
  background: var(--surface);
}

input[type="checkbox"][disabled]:checked + label::after {
  background: svg-load("./icon/checkmark-disabled.svg");
}

.field-row {
  display: flex;
  align-items: center;
  font-family: Chicago_12;
  font-size: 1em;
}

[class^="field-row"] + [class^="field-row"] {
  margin-top: var(--grouped-element-spacing);
}

.field-row > * + * {
  margin-left: var(--grouped-element-spacing);
}

.apple {
  background: svg-load("./icon/apple.svg");
  height: 22px;
  width: 18px;
  background-repeat: no-repeat;
  border: none;
  display: inline-block;
  margin-right: 2px;
}

/* Form */
form {
  font-family: "Inconsolata", Menlo, Chicago, Geneva;
  font-size:14px;
}

/* select menu */
select {
  border: 1.5px solid;
  height: auto;
  width: 10rem;
  font-family: Chicago_12;
  font-size: 18px;
  background-image: svg-load("./icon/select-button.svg");
  background-position: top 2px right 2px;
  background-repeat: no-repeat;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  padding-left: 20px;
  -webkit-box-shadow: 2px 8px 0 0px var(--secondary);
	   -moz-box-shadow: 2px 8px 0 0px var(--secondary);
	        box-shadow: 2px 2px 0 -1px var(--secondary);
}

/* menu-bar */
ul[role] {
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
  font-family: Chicago_12;
  font-size: 1em;
}
ul[role="menu-bar"] {
  display: flex;
  background: var(--primary);
}
ul[role="menu-bar"] > [role="menu-item"] {
  position: relative;
  padding: 6px 10px;
}
ul[role="menu-bar"] > [role="menu-item"]:focus, ul[role="menu-bar"] > [role="menu-item"]:focus-within, ul[role="menu-bar"] > [role="menu-item"]:hover {
  background: var(--secondary);
  color: var(--primary);
  outline: none;
}
ul[role="menu-bar"] > [role="menu-item"][aria-haspopup="false"] * {
  color: inherit;
  background: inherit;
  text-decoration: none;
}
ul[role="menu"] {
  position: relative;
  min-width: 200px;
  background: var(--primary);
  color: initial;
  border: 1px solid;
  box-shadow: var(--box-shadow);
}
ul[role="menu"]::before {
  content: "";
  pointer-events: none;
  position: absolute;
  left: 28px;
  width: 2px;
  box-shadow: inset 1px 0 rgba(0, 0, 0, 0.15), inset -1px 0 var(--primary);
}
[role="menu-item"] ul[role="menu"] {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 99;
}
ul[role="menu"] > [role="menu-item"] > a, ul[role="menu"] > [role="menu-item"] > button, ul[role="menu"] > [role="menu-item"][aria-haspopup="true"] {
  all: unset;
  position: relative;
  padding: 5px 20px;
  display: block;
  width: 100%;
  box-sizing: border-box;

}
ul[role="menu"] > [role="menu-item"] > a:hover, ul[role="menu"] > [role="menu-item"] > button:hover, ul[role="menu"] > [role="menu-item"][aria-haspopup="true"]:hover, ul[role="menu"] > [role="menu-item"] > a:focus, ul[role="menu"] > [role="menu-item"] > button:focus, ul[role="menu"] > [role="menu-item"][aria-haspopup="true"]:focus {
  background: var(--secondary);
  color: var(--primary);
}
ul [role="menu-item"] {
  position: relative;
}
ul [role="menu-item"]:focus > [role="menu"], ul [role="menu-item"]:focus-within > [role="menu"] {
  display: block;
}
ul [role="menu-item"].divider::after {
  content: "";
  pointer-events: none;
  display: block;
  padding: 0;
  border-top: 1.5px dotted var(--secondary);
}

/* styles specific to demo page */
.menu-items > li {
  margin-bottom: 1rem;
}

:root {
    --system7-bg: #ffffff;
    --system7-text: #000000;
    --system7-window-bg: #ffffff;
    --system7-border: #000000;
    --system7-menubar-bg: #ffffff;
    --system7-titlebar-active: linear-gradient(
        to bottom,
        #d8d8d8 0%,
        #d8d8d8 4px,
        #000000 4px,
        #000000 5px,
        #d8d8d8 5px,
        #d8d8d8 7px,
        #000000 7px,
        #000000 8px,
        #d8d8d8 8px,
        #d8d8d8 10px,
        #000000 10px,
        #000000 11px,
        #d8d8d8 11px,
        #d8d8d8 13px,
        #000000 13px,
        #000000 14px,
        #d8d8d8 14px,
        #d8d8d8 16px,
        #000000 16px,
        #000000 17px,
        #d8d8d8 17px,
        #d8d8d8 19px,
        #000000 19px,
        #000000 20px,
        #d8d8d8 20px,
        #d8d8d8 22px
    );
    --system7-titlebar-inactive: #FFFFFF;
}

html, body {
margin: 0;
padding: 0;
overflow: hidden;
height: 100vh;
}

.system7 {
    background-color: var(--system7-bg);
    font-family: 'ChicagoFLF', -apple-system, sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.menubar {
    position: relative;  /* Important for dropdown positioning */
    height: 22px;
    background: var(--system7-menubar-bg);
    border-bottom: 1px solid var(--system7-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    z-index: 1000;
}

.menu-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
}

.menubar-left {
    display: flex;
    align-items: center;
}

.menubar-right {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 10px;
}

.desktop {
    flex: 1;
    position: relative;
    overflow: hidden !important;
    overflow-y: hidden;
    background: url('/assets/images/backgrounds/MacOS.jpg') no-repeat center center fixed;
    background-size: cover;
    padding-right: 20px;
}

.menubar-item {
    padding: 2px 8px;
    cursor: default;
    display: flex;
    align-items: center;
    gap: 5px;
}

.menubar-item:hover {
    background: #000;
    color: #fff;
}

.menubar-item img {
    width: 16px; /* Increased width */
    height: 16px; /* Increased height */
}

.window {
    position: absolute;
    background: var(--system7-window-bg);
    border: 1px solid var(--system7-border);
    min-width: 200px;
    min-height: 100px;
    box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
    resize: both;
    overflow: hidden;
}

.window-titlebar {
    background: var(--system7-titlebar-active);
    color: white;
    padding: 2px 5px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    position: relative;
}

.window-title {
    text-align: center;
    flex-grow: 1;
    background: #ffffff;
    color: black;
    padding: 0 5px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}


.window-titlebar.inactive .window-title {
    background: #ffffff;
}

.window-close {
    width: 12px;
    height: 12px;
    border: 1px solid #000;
    background: #fff;
    cursor: pointer;
    position: relative;
}

.window-close:active {
    background: #000;
}


.window-content {
    padding: 10px;
    overflow: auto;
    height: calc(100% - 42px);
    position: relative;
    font-family: Arial, Geneva, sans-serif; /* Ensure text uses Arial */
}

.window-content img {
    max-width: 100%; /* Ensure images resize to the current width of the page */
    height: auto;
}

.window-content::-webkit-scrollbar-button:vertical:increment {
    display: none;
}

/* Resize handle 
.window {
    resize: both;
}
*/

.window-resizer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 14px;
    height: 14px;
    background: #dedede;
    border: 1px solid #000;
    box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #bcbcbc;
    cursor: se-resize;
    z-index: 1;
}


.window.resizable::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 14px;
    height: 14px;
    background: #c0c0c0;
    border: 1px solid #000;
    cursor: se-resize;
}

/* Icons in folder windows keep their grid layout */
.folder-window .desktop-icon {
    position: relative;
    width: 100px; /* Adjusted width */
    height: 100px; /* Adjusted height */
}

/* Desktop-specific icon styling */
.desktop > .desktop-icon {
    position: absolute;
    right: 20px;
    width: 100px;
    text-align: center;
    margin-bottom: 20px;
}


.folder-window .window-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px); /* Adjusted column width */
    grid-auto-rows: 100px; /* Adjusted row height */
    gap: 10px;
    padding: 10px;
    justify-content: start;
}

.desktop-icon {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 100px;
    cursor: pointer;
    padding: 5px;
}

.desktop-icon:hover .desktop-icon-label {
    background: #000;
    color: #fff;
}

.desktop-icon img {
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
    pointer-events: none;
}

.desktop-icon-label {
    text-align: center;
    color: var(--system7-text);
    font-size: 12px;
    word-wrap: break-word;
    padding: 1px 4px;
    pointer-events: none;
    font-family: Arial, Geneva, sans-serif;
    background: #fff;
    border: 1px solid #000;
    max-width: 90px;
    overflow-wrap: break-word;
}

.desktop-icon.alias .desktop-icon-label {
    font-style: italic;
}

.dropdown-menu {
    position: fixed;  /* Changed from absolute */
    display: none;
    background: var(--system7-menubar-bg);
    border: 1px solid var(--system7-border);
    box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
    padding: 2px 0;
    min-width: 160px;
    z-index: 1001;  /* Above menubar */
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 2px 20px;
    cursor: default;
    white-space: nowrap;
}

.dropdown-item:hover {
    background: #000;
    color: #fff;
}

.dropdown-divider {
    height: 1px;
    background: var(--system7-border);
    margin: 2px 0;
}


@media (max-width: 768px) {
    .window {
        width: calc(100% - 20px) !important; /* Add 10px padding on each side */
        height: calc(100% - 30px) !important; /* Adjusted for top bar + padding */
        top: 25px !important; /* Slightly more space from the top */
        left: 10px !important; /* Add left padding */
        resize: none;
        max-width: 500px; /* Prevent windows from getting too wide */
        margin: 0 auto; /* Center the window if screen is wider than max-width */
    }

    /* Make sure content fits nicely */
    .window-content {
        padding: 8px;
        font-size: 14px; /* Slightly smaller text on mobile */
    }

    /* Ensure the About window specifically isn't too large */
    .window[style*="width: 400px"][style*="height: 225px"] {
        width: calc(100% - 40px) !important;
        max-width: 400px !important;
        max-height: 225px !important;
        left: 50% !important;
        transform: translateX(-50%);
    }

    /* Ensure the Access main security grid window specifically isn't too large */
    .window[style*="width: 230px"][style*="height: 250px"] {
        width: 230px !important;
        height: 250px !important;
        left: 50% !important;
        transform: translateX(-50%);
        resize: none !important;
    }
}

.clock {
    padding: 0 10px;
    color: var(--system7-text);
    font-family: 'ChicagoFLF', -apple-system, sans-serif;
}

/* Application menu specific styles */
.app-menu {
    padding: 2px 8px;
    min-width: 24px;
    height: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.app-menu .app-icon {
    width: 16px;
    height: 16px;
    pointer-events: none;
}

.app-menu .app-name {
    display: block;
}

#application-menu {
    min-width: 200px;
}

.window-content p.callout-sidebar {
    float: right;
    clear: both;
    width: 280px;
    margin: 2.5em 0 1.5em 1.5em;
    background: white;
    border: 1px solid black;
    box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
    font-family: 'ChicagoFLF', sans-serif;
    font-size: 13px;
    font-style: normal;
    position: relative;
    padding-top: 22px; /* matches titlebar height */
    padding: 22px 10px 10px 10px;
}

/* Flat System 7-style titlebar */
.window-content p.callout-sidebar::before {
    content: "Sidenote";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 22px;
    line-height: 22px;
    text-align: center;
    background: #d8d8d8;
    border-bottom: 1px solid black;
    font-weight: bold;
    font-size: 16px;
    font-family: 'ChicagoFLF', sans-serif;
    color: black;
}
`;