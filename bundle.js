(() => {
  // src/config/styles.js
  var STYLES = `
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

#scene {
  background-color: var(--system7-bg);
  font-family: 'ChicagoFLF', -apple-system, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--system7-text);
}}

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

  /* ---- \u26AB\uFE0F Colors \u26AA\uFE0F ---- */
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

  // src/applications/App.js
  var App = class {
  };

  // src/config/sprites.js
  var SPRITES = {
    FRANK: {
      IDLE: [
        `<?xml version="1.0" encoding="UTF-8"?>
<svg id="idle" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M200 180 l0 -20 20 0 20 0
0 -20 0 -20 80 0 80 0 0 20 0 20 20 0 20 0 0 20 0 20 -20 0 -20 0 0 -20 0 -20
-80 0 -80 0 0 20 0 20 -20 0 -20 0 0 -20z"/>
  </g></svg>`
      ],
      NEUTRAL: [
        `<?xml version="1.0" encoding="UTF-8"?>
<svg id="neutral" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M240 140 l0 -20 80 0 80 0
0 20 0 20 -80 0 -80 0 0 -20z"/>
  </g>
</svg>`
      ],
      JIBJAB: [
        `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M240 180 l0 -20 -20 0 -20
0 0 -20 0 -20 20 0 20 0 0 -20 0 -20 80 0 80 0 0 20 0 20 20 0 20 0 0 20 0 20
-20 0 -20 0 0 20 0 20 -80 0 -80 0 0 -20z m160 -40 l0 -20 -80 0 -80 0 0 20 0
20 80 0 80 0 0 -20z"/>
  </g>
</svg>`,
        `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_2" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M280 180 l0 -20 -20 0 -20
0 0 -20 0 -20 20 0 20 0 0 -20 0 -20 40 0 40 0 0 20 0 20 20 0 20 0 0 20 0 20
-20 0 -20 0 0 20 0 20 -40 0 -40 0 0 -20z m80 -40 l0 -20 -40 0 -40 0 0 20 0
20 40 0 40 0 0 -20z"/>
  </g>
</svg>`,
        `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M280 180 l0 -20 -20 0 -20
0 0 -40 0 -40 20 0 20 0 0 -20 0 -20 40 0 40 0 0 20 0 20 20 0 20 0 0 40 0 40
-20 0 -20 0 0 20 0 20 -40 0 -40 0 0 -20z m80 -60 l0 -40 -40 0 -40 0 0 40 0
40 40 0 40 0 0 -40z"/>
  </g>
</svg>`,
        `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M280 180 l0 -20 -20 0 -20
0 0 -20 0 -20 20 0 20 0 0 -20 0 -20 40 0 40 0 0 20 0 20 20 0 20 0 0 20 0 20
-20 0 -20 0 0 20 0 20 -40 0 -40 0 0 -20z m80 -40 l0 -20 -40 0 -40 0 0 20 0
20 40 0 40 0 0 -20z"/>
  </g>
</svg>`
      ]
    }
  };

  // src/applications/FrankApp.js
  var FrankApp = class extends App {
    constructor() {
      this._lastHassVoice = null;
      this._lastHassMedia = null;
      this._lastHassBpm = null;
      this._lastSprite = null;
      this._currentSprite = null;
    }
    init() {
      const entity = this.config.entity;
      const mediaEntity = this.config.media_entity;
      const bpmEntity = this.config.bpm_entity;
      const weatherEntity = this.config.weather_entity;
      const newVoiceState = entity && hass.states[entity] ? hass.states[entity].state.toLowerCase() : "idle";
      const newMediaState = mediaEntity && hass.states[mediaEntity] ? hass.states[mediaEntity].state.toLowerCase() : "paused";
      const newBpmState = bpmEntity && hass.states[bpmEntity] ? hass.states[bpmEntity].state : "120";
      if (this._lastHassVoice === newVoiceState && this._lastHassMedia === newMediaState && this._lastHassBpm === newBpmState) return;
      this._lastHassVoice = newVoiceState;
      this._lastHassMedia = newMediaState;
      this._lastHassBpm = newBpmState;
      const currentBpm = isNaN(parseFloat(newBpmState)) ? 120 : parseFloat(newBpmState);
      let effectiveState = "idle";
      if (["listen", "wake", "process", "think", "respond", "speak", "tts"].some((s) => newVoiceState.includes(s))) {
        effectiveState = newVoiceState;
      } else if (newMediaState === "playing") {
        effectiveState = "dancing";
      }
      if (this._currentState !== effectiveState || effectiveState === "dancing" && this._currentBpm !== currentBpm) {
        this._currentState = effectiveState;
        this._currentBpm = currentBpm;
        if (this.applyState) this.applyState(effectiveState, currentBpm);
      }
      const root = this.shadowRoot;
      const config = this.config;
      const el = {
        desktop: root.getElementById("desktop"),
        frankContainer: root.getElementById("frank-container")
      };
      this.handleResize = () => {
        this.updateSpriteScale();
      };
      window.addEventListener("resize", this.handleResize);
      let stateNow = "idle";
      let currentBaseLid = 0;
      const setSprite = (spr) => {
        el.frankContainer.innerHTML = spr;
        const svg = el.frankContainer.querySelector("svg");
        if (!svg) {
          console.log("[Frank] setSprite: no SVG found after injection");
          return;
        }
        this._lastSprite = this._currentSprite;
        this._currentSprite = svg;
        this.updateSpriteScale();
      };
      function idle_smile() {
        setSprite(SPRITES.FRANK.IDLE[0]);
      }
      this.idleTimer = null;
      this.danceTimer = null;
      this.danceLedTimer = null;
      this.talkAnim = null;
      this.respondTimer = null;
      const IDLE_BEHAVIORS = [
        { name: "smile", exec() {
          idle_smile();
        }, min: 5e3, max: 1e4, weight: 1 }
      ];
      const runNextIdleBehavior = () => {
        if (stateNow !== "idle") return;
        let r = Math.random() * IDLE_BEHAVIORS.reduce((s, b) => s + b.weight, 0), chosen = IDLE_BEHAVIORS[0];
        for (const b of IDLE_BEHAVIORS) {
          r -= b.weight;
          if (r <= 0) {
            chosen = b;
            break;
          }
        }
        chosen.exec();
        this.idleTimer = setTimeout(runNextIdleBehavior, chosen.min + Math.random() * (chosen.max - chosen.min));
      };
      this.startIdleCycle = () => {
        this.stopIdleCycle();
        this.idleTimer = setTimeout(runNextIdleBehavior, 2e3 + Math.random() * 3e3);
      };
      this.stopIdleCycle = () => {
        if (this.idleTimer) {
          clearTimeout(this.idleTimer);
          this.idleTimer = null;
        }
        if (this.pupilTimer) {
          clearTimeout(this.pupilTimer);
          this.pupilTimer = null;
        }
        if (this.glitchRaf) {
          cancelAnimationFrame(this.glitchRaf);
          this.glitchRaf = null;
        }
      };
      this.stopDanceCycle = () => {
        if (this.danceTimer) {
          clearTimeout(this.danceTimer);
          this.danceTimer = null;
        }
        if (this.danceLedTimer) {
          clearTimeout(this.danceLedTimer);
          this.danceLedTimer = null;
        }
      };
      this.startDanceCycle = (bpm) => {
        this.stopDanceCycle();
        let dancePhase = 0;
        let currentRoutine = Math.floor(Math.random() * 8);
        const currentBpm2 = Math.max(60, Math.min(200, bpm));
        const beatMs = 60 / currentBpm2 * 1e3;
        const beatSec = beatMs / 1e3;
        let expectedNextTick = performance.now() + beatMs;
        const step = () => {
          if (stateNow !== "dancing") return;
          if (dancePhase > 0 && dancePhase % 16 === 0) {
            let nextRoutine;
            do {
              nextRoutine = Math.floor(Math.random() * 8);
            } while (nextRoutine === currentRoutine);
            currentRoutine = nextRoutine;
          }
          const choreoBlock = currentRoutine;
          const isDownBeat = dancePhase % 2 === 0;
          const isQuadBeat = dancePhase % 4 === 0;
          const phaseMod4 = dancePhase % 4;
          const phaseMod8 = dancePhase % 8;
          let dirX = isDownBeat ? 1 : -1;
          if (this.danceLedTimer) clearTimeout(this.danceLedTimer);
          this.danceLedTimer = setTimeout(() => {
            if (stateNow === "dancing") {
            }
          }, beatMs * 0.3);
          let moveDur = beatSec;
          let bodyDur = beatSec * 2;
          const executeTick = () => {
            dancePhase++;
            const now = performance.now();
            expectedNextTick += beatMs;
            const delay = Math.max(0, expectedNextTick - now);
            this.danceTimer = setTimeout(step, delay);
          };
          executeTick();
        };
        step();
      };
      const startRespondAnim = () => {
        if (this.talkAnim) clearTimeout(this.talkAnim);
        const step = () => {
          if (this._currentSprite?.id !== "neutral") {
            setSprite(SPRITES.FRANK.NEUTRAL[0]);
          } else {
            const nextSprite = SPRITES.FRANK.JIBJAB[Math.floor(Math.random() * SPRITES.FRANK.JIBJAB.length)];
            setSprite(nextSprite);
          }
          const talkSpeed = config.talk_speed !== void 0 ? parseFloat(config.talk_speed) : 200;
          this.talkAnim = setTimeout(step, talkSpeed);
        };
        step();
      };
      const animateFrank = (state, bpm) => {
        stateNow = state;
        if (this.talkAnim) clearTimeout(this.talkAnim);
        this.stopIdleCycle();
        this.stopDanceCycle();
        if (state === "idle") {
          this.startIdleCycle();
        } else if (state === "dancing") {
        } else if (state === "listening") {
          this.displayState(state);
        } else if (state === "processing") {
          this.displayState(state);
        } else if (state === "responding") {
          startRespondAnim();
        }
      };
      this.applyState = (raw, bpm) => {
        const s = (raw || "idle").toLowerCase();
        let mapped = "idle";
        if (s.includes("respond") || s.includes("speak") || s.includes("tts")) mapped = "responding";
        else if (s.includes("listen") || s.includes("wake")) mapped = "listening";
        else if (s.includes("process") || s.includes("think")) mapped = "processing";
        else if (s === "dancing") mapped = "dancing";
        if (this.respondTimer) {
          clearTimeout(this.respondTimer);
          this.respondTimer = null;
        }
        const delayMs = config.respond_delay !== void 0 ? parseFloat(config.respond_delay) : 0;
        if (mapped === "responding" && this._lastEffectiveState !== "responding" && delayMs > 0) {
          this.respondTimer = setTimeout(() => {
            this._lastEffectiveState = "responding";
            animateFrank("responding", bpm);
          }, delayMs);
          return;
        }
        this._lastEffectiveState = mapped;
        animateFrank(mapped, bpm);
      };
      this.displayState = (state) => {
      };
      this.applyState("idle", 120);
    }
    updateSpriteScale() {
      if (!this._currentSprite) {
        console.log("[Frank] updateSpriteScale: no current sprite");
        return;
      }
      const container = this.shadowRoot.querySelector("#desktop");
      if (!container) {
        console.log("[Frank] updateSpriteScale: no frank-card found");
        return;
      }
      const spriteWidth = this._currentSprite.width?.baseVal?.value || this._currentSprite.getBoundingClientRect().width;
      const spriteHeight = this._currentSprite.height?.baseVal?.value || this._currentSprite.getBoundingClientRect().height;
      const screenFill = 0.8;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const targetWidth = containerWidth * screenFill;
      const targetHeight = containerHeight * screenFill;
      const scaleX = targetWidth / spriteWidth;
      const scaleY = targetHeight / spriteHeight;
      const scale = Math.max(
        1,
        Math.floor(Math.min(scaleX, scaleY))
      );
      const finalWidth = spriteWidth * scale;
      const finalHeight = spriteHeight * scale;
      const svg = this._currentSprite;
      svg.setAttribute("width", finalWidth);
      svg.setAttribute("height", finalHeight);
    }
    cleanup() {
      if (this.handleResize) {
        window.removeEventListener("resize", this.handleResize);
      }
      if (this.stopIdleCycle) this.stopIdleCycle();
      if (this.stopDanceCycle) this.stopDanceCycle();
      if (this.respondTimer) clearTimeout(this.respondTimer);
      if (this.talkAnim) clearTimeout(this.talkAnim);
    }
  };

  // src/system/MenuManager.js
  var MenuManager2 = class {
    constructor() {
      this.initializeMenuListeners();
      this.updateApplicationMenu();
      this.addMenuStyles();
    }
    hideProgram(programName) {
      if (!programName || programName === "Finder") return;
      const windows = Array.from(document.querySelectorAll(".window"));
      windows.forEach((window2) => {
        const title = window2.querySelector(".window-title").textContent;
        if (title === programName) {
          window2.classList.add("hidden");
          window2.style.display = "none";
        }
      });
      this.updateApplicationMenu();
    }
    hideOthers() {
      const activeWindow = this.getActiveWindow();
      if (!activeWindow) return;
      const currentProgram = activeWindow.querySelector(".window-title").textContent;
      const windows = Array.from(document.querySelectorAll(".window"));
      windows.forEach((window2) => {
        const title = window2.querySelector(".window-title").textContent;
        if (title !== currentProgram && !window2.classList.contains("folder-window")) {
          window2.classList.add("hidden");
          window2.style.display = "none";
        }
      });
      this.updateApplicationMenu();
    }
    showAll() {
      const windows = Array.from(document.querySelectorAll(".window.hidden"));
      windows.forEach((window2) => {
        window2.classList.remove("hidden");
        window2.style.display = "block";
      });
      this.updateApplicationMenu();
    }
    initializeMenuListeners() {
      document.querySelectorAll(".menubar-item").forEach((item) => {
        item.addEventListener("mousedown", (e) => {
          e.preventDefault();
          const menuName = item.dataset.menu;
          const menu = document.getElementById(menuName + "-menu");
          if (menu) {
            this.closeAllMenus();
            const rect = item.getBoundingClientRect();
            menu.style.display = "block";
            if (menuName === "application") {
              menu.style.right = "10px";
              menu.style.left = "auto";
              menu.style.top = `${rect.bottom}px`;
            } else {
              menu.style.left = `${rect.left}px`;
              menu.style.right = "auto";
              menu.style.top = `${rect.bottom}px`;
            }
            if (typeof SoundManager !== "undefined") {
              SoundManager.play("click");
            }
            e.stopPropagation();
          }
        });
      });
      document.addEventListener("mousedown", (e) => {
        if (!e.target.closest(".menubar-item") && !e.target.closest(".dropdown-menu")) {
          this.closeAllMenus();
        }
      });
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.addEventListener("mousedown", (e) => {
          const menuItem = e.target.closest(".dropdown-item");
          if (menuItem) {
            e.stopPropagation();
            setTimeout(() => this.closeAllMenus(), 100);
          }
        });
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.closeAllMenus();
        }
      });
    }
    closeAllMenus() {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
    }
    getOpenPrograms() {
      const windows = Array.from(document.querySelectorAll(".window"));
      const programs = /* @__PURE__ */ new Map();
      programs.set("Finder", {
        name: "Finder",
        icon: "MacSE.png",
        windows: []
      });
      windows.forEach((window2) => {
        if (window2.classList.contains("folder-window") || window2.querySelector(".window-title").textContent === "Get Info") {
          return;
        }
        const title = window2.querySelector(".window-title").textContent;
        const item = findItem(fileSystem, title);
        const icon = item ? item.icon : "doc-icon.png";
        if (!programs.has(title)) {
          programs.set(title, {
            name: title,
            icon,
            windows: [window2],
            hidden: window2.classList.contains("hidden")
          });
        } else {
          programs.get(title).windows.push(window2);
          programs.get(title).hidden = programs.get(title).hidden && window2.classList.contains("hidden");
        }
      });
      return Array.from(programs.values());
    }
    updateApplicationMenu() {
      const appMenu = document.querySelector(".app-menu");
      const appIcon = appMenu.querySelector(".app-icon");
      const appName = appMenu.querySelector(".app-name");
      const menu = document.getElementById("application-menu");
      const programs = this.getOpenPrograms();
      const activeProgram = this.getActiveProgram();
      if (activeProgram === "Finder") {
        appIcon.src = "/assets/images/MacSE.png";
        appName.textContent = "Finder";
      } else {
        const item = findItem(fileSystem, activeProgram);
        if (item && item.icon) {
          appIcon.src = `/assets/images/${item.icon}`;
        } else {
          appIcon.src = "/assets/images/doc-icon.png";
        }
        appName.textContent = activeProgram;
      }
      let menuHTML = `
            <div class="dropdown-item ${activeProgram === "Finder" ? "disabled" : ""}" 
                onclick="MenuManager.hideProgram('${activeProgram}')">
                Hide ${activeProgram}
            </div>
            <div class="dropdown-item" onclick="MenuManager.hideOthers()">
                Hide Others
            </div>
            <div class="dropdown-item" onclick="MenuManager.showAll()">
                Show All
            </div>
            <div class="dropdown-divider"></div>
        `;
      programs.forEach((program) => {
        menuHTML += `
                <div class="dropdown-item ${program.hidden ? "hidden-program" : ""}" 
                    onclick="MenuManager.switchToProgram('${program.name}')">
                    <span style="width: 16px; text-align: center;">
                        ${program.name === activeProgram ? "\u2713" : ""}
                    </span>
                    <img src="/assets/images/${program.icon}" class="menu-icon" width="16" height="16">
                    <span>${program.name}</span>
                </div>
            `;
      });
      menu.innerHTML = menuHTML;
    }
    addMenuStyles() {
      const style = document.createElement("style");
      style.textContent = `
            .dropdown-item {
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 2px 10px;
                cursor: default;
                white-space: nowrap;
            }
    
            .dropdown-item.disabled {
                color: #808080;
                cursor: default;
            }
    
            .dropdown-item.hidden-program {
                color: #808080;
            }
    
            .menu-icon {
                width: 16px;
                height: 16px;
                object-fit: contain;
            }
    
            .dropdown-divider {
                height: 1px;
                background: var(--system7-border);
                margin: 2px 0;
            }
    
            .window.hidden {
                display: none;
            }
        `;
      document.head.appendChild(style);
    }
    getActiveWindow() {
      const highestZ = Math.max(
        ...Array.from(document.querySelectorAll(".window")).map((el) => parseInt(el.style.zIndex) || 0)
      );
      return document.querySelector(`.window[style*="z-index: ${highestZ}"]`);
    }
    switchToProgram(programName) {
      const windows = Array.from(document.querySelectorAll(".window"));
      const highestZ = this.getHighestZIndex();
      let newZ = highestZ + 1;
      if (programName === "Finder") {
        windows.forEach((window2) => {
          window2.querySelector(".window-titlebar").style.background = "var(--system7-titlebar-inactive)";
        });
        const appMenu = document.querySelector(".app-menu");
        appMenu.querySelector(".app-icon").src = "/assets/images/MacSE.png";
        appMenu.querySelector(".app-name").textContent = "Finder";
      } else {
        windows.forEach((window2) => {
          const title = window2.querySelector(".window-title").textContent;
          if (title === programName) {
            if (window2.classList.contains("hidden")) {
              window2.classList.remove("hidden");
              window2.style.visibility = "visible";
            }
            window2.style.zIndex = newZ++;
            window2.querySelector(".window-titlebar").style.background = "var(--system7-titlebar-active)";
          } else {
            window2.querySelector(".window-titlebar").style.background = "var(--system7-titlebar-inactive)";
          }
        });
      }
      this.updateApplicationMenu();
    }
    getHighestZIndex() {
      return Math.max(
        ...Array.from(document.querySelectorAll(".window")).map((el) => parseInt(el.style.zIndex) || 0)
      );
    }
    closeActiveWindow() {
      const activeWindow = this.getActiveWindow();
      if (activeWindow) {
        if (typeof SoundManager !== "undefined") {
          SoundManager.play("drop");
        }
        activeWindow.remove();
        this.updateApplicationMenu();
        if (typeof StateManager !== "undefined") {
          StateManager.saveState();
        }
      }
    }
    getInfo() {
      const activeWindow = this.getActiveWindow();
      if (!activeWindow) return;
      const title = activeWindow.querySelector(".window-title").textContent;
      const type = activeWindow.classList.contains("folder-window") ? "Folder" : "Document";
      const content = `
            <div style="padding: 10px">
                <p><strong>Name:</strong> ${title}</p>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Created:</strong> ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p>
            </div>
        `;
      new Window(
        "Get Info",
        content,
        "info",
        window.innerWidth / 2 - 150,
        window.innerHeight / 2 - 100
      );
    }
    getActiveProgram() {
      if (this._finderActive) {
        return "Finder";
      }
      const activeWindow = Array.from(document.querySelectorAll(".window")).find((win) => win.classList.contains("active"));
      if (!activeWindow) {
        return "Finder";
      }
      if (activeWindow.classList.contains("folder-window")) {
        this._finderActive = true;
        return "Finder";
      }
      return activeWindow.querySelector(".window-title").textContent;
    }
  };

  // src/system/StateManager.js
  var StateManager2 = class {
    constructor(windowManager) {
      this.windowManager = windowManager;
      this.STATE_KEY = "frankOS_State";
      this.AUTO_SAVE_INTERVAL = 5e3;
      this.loadState();
      this.startAutoSave();
    }
    saveState() {
      try {
        const windows = Array.from(document.querySelectorAll(".window")).map((window2) => ({
          title: window2.querySelector(".window-title").textContent,
          content: window2.querySelector(".window-content").innerHTML,
          type: window2.dataset.windowType || (window2.classList.contains("folder-window") ? "folder" : "document"),
          position: {
            left: window2.style.left,
            top: window2.style.top,
            width: window2.style.width,
            height: window2.style.height,
            zIndex: window2.style.zIndex
          }
        }));
        const desktop = {
          background: document.getElementById("desktop").style.background,
          backgroundSize: document.getElementById("desktop").style.backgroundSize
        };
        const menuState = {
          activeApp: document.querySelector(".app-menu").textContent,
          soundEnabled: localStorage.getItem("soundEnabled") !== "false"
        };
        const state = {
          windows,
          desktop,
          menuState,
          lastSaved: (/* @__PURE__ */ new Date()).toISOString()
        };
        localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Error saving state:", error);
      }
    }
    loadState() {
      try {
        const savedState = localStorage.getItem(this.STATE_KEY);
        if (!savedState) return;
        const state = JSON.parse(savedState);
        const desktop = document.getElementById("desktop");
        if (desktop) {
          desktop.style.background = state.desktop.background;
          desktop.style.backgroundSize = state.desktop.backgroundSize;
          const backgroundName = this.getBackgroundNameFromStyle(state.desktop.background);
          if (backgroundName) {
            this.updateBackgroundMenuCheckmark(backgroundName);
          }
        }
        if (state.menuState) {
          if (typeof SoundManager !== "undefined") {
            SoundManager.setVolume(state.menuState.soundEnabled ? 0.5 : 0);
          }
          this.updateSoundMenuCheck(state.menuState.soundEnabled);
        }
        state.windows.forEach((windowState) => {
          this.windowManager.createWindow(
            windowState.title,
            windowState.content,
            windowState.type,
            parseInt(windowState.position.left) || 100,
            parseInt(windowState.position.top) || 100
          );
        });
        if (typeof MenuManager !== "undefined") {
          MenuManager.updateApplicationMenu();
        }
      } catch (error) {
        console.error("Error loading state:", error);
        localStorage.removeItem(this.STATE_KEY);
      }
    }
    getBackgroundNameFromStyle(backgroundStyle) {
      if (!backgroundStyle) return null;
      const matches = backgroundStyle.match(/backgrounds\/(.*?)\./);
      return matches ? matches[1] : null;
    }
    updateBackgroundMenuCheckmark(backgroundName) {
      const viewMenuItems = document.querySelectorAll("#view-menu .dropdown-item");
      viewMenuItems.forEach((item) => {
        item.textContent = item.textContent.replace("\u2714 ", "");
        if (item.textContent.includes(backgroundName)) {
          item.textContent = "\u2714 " + item.textContent;
        }
      });
    }
    updateSoundMenuCheck(enabled) {
      const menuItem = document.querySelector('#apple-menu .dropdown-item:contains("Sound")');
      if (menuItem) {
        menuItem.textContent = `Sound ${enabled ? "\u2713" : ""}`;
      }
    }
    startAutoSave() {
      if (this.autoSaveInterval) {
        clearInterval(this.autoSaveInterval);
      }
      this.autoSaveInterval = setInterval(() => this.saveState(), this.AUTO_SAVE_INTERVAL);
      window.addEventListener("beforeunload", () => this.saveState());
      document.addEventListener("click", (e) => {
        if (e.target.matches(".window-close")) {
          setTimeout(() => this.saveState(), 100);
        }
      });
      const viewMenuItems = document.querySelectorAll("#view-menu .dropdown-item");
      viewMenuItems.forEach((item) => {
        item.addEventListener("click", () => {
          setTimeout(() => this.saveState(), 100);
        });
      });
    }
    clearState() {
      localStorage.removeItem(this.STATE_KEY);
    }
  };

  // src/system/WindowManager.js
  var WindowManager = class {
    constructor() {
      this.windows = [];
    }
    createWindow(title, content, type = "document", left = 100, top = 100) {
      const newWindow = new Window(title, content, type, left, top);
      this.windows.push(newWindow);
      return newWindow;
    }
    // Add this function to update the application name
    updateActiveApplication(windowTitle) {
      const appName = document.getElementById("current-app-name");
      if (appName) {
        appName.textContent = windowTitle || "Finder";
      }
    }
    // Find the function that handles window focus and add the update call
    // This might be in your window click handler or focus handler
    setActiveWindow(window2) {
      this.updateActiveApplication(window2.querySelector(".window-title").textContent);
    }
    // Function to open a page in a new window
    openPage(page) {
      fetch(`/pages/${page}.html`).then((response) => response.text()).then((content) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;
        const mainContent = tempDiv.querySelector(".main-content");
        const windowContent = mainContent ? mainContent.innerHTML : content;
        const fileItem = findItem(fileSystem, page);
        const windowTitle = fileItem ? fileItem.name : page;
        this.createWindow(windowTitle, windowContent, "document");
      }).catch((error) => console.error("Error loading page:", error));
    }
  };

  // src/system/FileManager.js
  var FileManager = class {
    constructor(windowManager) {
      this.windowManager = windowManager;
      this.fileSystem = {
        "Macintosh HD": {
          type: "folder",
          icon: "hd-icon.png",
          contents: {}
        }
      };
      this.initializeDesktop();
    }
    // File system helper functions
    findItem(obj, searchName) {
      if (obj.contents && obj.contents[searchName]) {
        return obj.contents[searchName];
      }
      for (const value of Object.values(obj.contents || {})) {
        if (value.contents) {
          const found = findItem(value, searchName);
          if (found) return found;
        }
      }
      return null;
    }
    createFolderContents(folder) {
      let html = "";
      Object.entries(folder.contents).forEach(([name, item]) => {
        html += `
            <div class="desktop-icon" data-type="${item.type}" data-name="${name}">
                <img src="/assets/images/${item.icon}" alt="${name}">
                <div class="desktop-icon-label">${name}</div>
            </div>
        `;
      });
      return html;
    }
    handleDoubleClick(name) {
      if (name === "Macintosh HD") {
        const hdFolder = fileSystem["Macintosh HD"];
        this.windowManager.createWindow(name, createFolderContents(hdFolder), "folder");
        return;
      }
      const item = findItem(fileSystem["Macintosh HD"], name);
      if (item) {
        if (item.type === "folder") {
          this.windowManager.createWindow(name, createFolderContents(item), "folder");
        } else if (item.type === "document") {
          this.windowManager.openPage(item.file);
        }
      } else {
        const fileMap = {
          "Bus Tracker Display": "BusTideDisplay",
          "Isolated Thermocouple": "IsoTherm",
          "Citicar": "Citicar",
          "CAN Car Conversion": "CANconversion"
        };
        if (fileMap[name]) {
          this.windowManager.openPage(fileMap[name]);
        }
      }
    }
    // Desktop initialization and icon management
    initializeDesktop() {
      const desktop = document.getElementById("desktop");
      const ICON_HEIGHT = 80;
      let topPosition = 20;
      const hdIcon = createDesktopIcon(
        "Computer Chronicles",
        "hd-icon.png",
        false,
        { right: "20px", top: `${topPosition}px` }
      );
      desktop.appendChild(hdIcon);
      topPosition += ICON_HEIGHT;
      const projects = [
        { name: "Frank", icon: "frank_icon.png" }
      ];
      projects.forEach((project) => {
        const icon = createDesktopIcon(
          project.name,
          project.icon,
          true,
          { right: "20px", top: `${topPosition}px` }
        );
        desktop.appendChild(icon);
        topPosition += ICON_HEIGHT;
      });
    }
    createDesktopIcon(name, icon, isAlias = false, position = {}) {
      const div = document.createElement("div");
      div.className = "desktop-icon" + (isAlias ? " alias" : "");
      Object.assign(div.style, position);
      div.innerHTML = `
        <img src="/assets/images/${icon}" alt="${name}">
        <div class="desktop-icon-label">${name}</div>
    `;
      div.setAttribute("data-name", name);
      div.setAttribute("data-type", isAlias ? "alias" : "folder");
      return div;
    }
  };
  document.addEventListener("dblclick", (e) => {
    const icon = e.target.closest(".desktop-icon");
    if (!icon) return;
    const name = icon.dataset.name;
    handleDoubleClick(name);
  });

  // src/system/SoundManager.js
  var SoundManager2 = class {
    constructor() {
    }
  };

  // src/system/System.js
  var System = class {
    constructor() {
      this.windowManager = new WindowManager();
      this.stateManager = new StateManager2(this.windowManager);
      this.menuManager = new MenuManager2(this.windowManager);
      this.fileManager = new FileManager(this.windowManager);
      this.soundManager = new SoundManager2();
      this.init();
    }
    init() {
      this.initializeClock();
      this.initializeEventListeners();
      this.checkUrlParameters();
    }
    checkUrlParameters() {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("page");
      if (page) {
        this.windowManager.openPage(page);
      }
    }
    // Clock functionality
    initializeClock() {
      this.updateClock();
      setInterval(() => this.updateClock(), 1e3);
    }
    updateClock() {
      const now = /* @__PURE__ */ new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      document.getElementById("clock").textContent = `${hours}:${minutes}`;
    }
    // Background Management
    setBackground(image) {
      const desktop = document.getElementById("desktop");
      const viewMenuItems = document.querySelectorAll("#view-menu .dropdown-item");
      viewMenuItems.forEach((item) => {
        item.textContent = item.textContent.replace("\u2714 ", "");
      });
      const backgrounds = {
        MacOS: { url: "MacOS.jpg", repeat: "no-repeat center center fixed", size: "cover" },
        cats: { url: "cats.png", repeat: "repeat", size: "auto" },
        circuits: { url: "circuits.png", repeat: "repeat", size: "auto" },
        grass: { url: "grass.png", repeat: "repeat", size: "auto" },
        pebbles: { url: "pebbles.png", repeat: "repeat", size: "auto" },
        plaid: { url: "plaid.png", repeat: "repeat", size: "auto" }
      };
      const bg = backgrounds[image];
      if (bg) {
        desktop.style.background = `url('/assets/images/backgrounds/${bg.url}') ${bg.repeat}`;
        desktop.style.backgroundSize = bg.size;
        document.querySelector(`#view-menu .dropdown-item:contains('${image}')`).textContent = `\u2714 ${image}`;
        if (typeof StateManager2 !== "undefined") {
          StateManager2.saveState();
        }
      }
    }
    // About Window
    showAboutWindow() {
      const content = `
        <div style="display: flex; align-items: center;">
            <img src="/assets/images/moof.png" alt="Moof" style="width: 64px; height: 64px; margin-right: 20px;">
            <div>
                <p>This is my design portfolio, built in Jekyll and a bit of CSS.</p>
                <p>While I have experience in classic Mac OS programming, CSS is far more frustrating than Metrowerks Codewarrior and ResEdit.</p>
            </div>
        </div>
    `;
      const aboutWindow = this.windowManager.createWindow(
        "About This Website",
        content,
        "about",
        window.innerWidth / 2 - 200,
        window.innerHeight / 2 - 150
      );
      aboutWindow.element.style.resize = "none";
      aboutWindow.element.style.width = "400px";
      aboutWindow.element.style.height = "200px";
      aboutWindow.element.querySelector(".window-resizer")?.remove();
      aboutWindow.element.querySelector(".window-content").style.overflow = "hidden";
      if (typeof this.SoundManager !== "undefined") {
        this.SoundManager.play("click");
      }
    }
    // Sound Management
    toggleSound() {
      const enabled = localStorage.getItem("soundEnabled") !== "false";
      localStorage.setItem("soundEnabled", !enabled);
      if (typeof this.SoundManager !== "undefined") {
        this.SoundManager.setVolume(!enabled ? 0.5 : 0);
      }
      if (typeof this.StateManager !== "undefined") {
        StateManager2.updateSoundMenuCheck(!enabled);
      }
    }
    // Theme Toggle
    toggleTheme() {
      window.location.href = "/";
    }
    // Initialize desktop and event listeners
    initializeEventListeners() {
      document.addEventListener("mousedown", (e) => {
        if (!e.target.closest(".menubar-item") && !e.target.closest(".dropdown-menu")) {
          if (typeof this.MenuManager !== "undefined") {
            this.MenuManager.closeAllMenus();
          }
        }
        if (e.target.id === "desktop") {
          e.preventDefault();
          e.stopPropagation();
          document.querySelectorAll(".window").forEach((win) => {
            win.classList.remove("active");
            win.style.zIndex = "1";
            win.querySelector(".window-titlebar").style.background = "var(--system7-titlebar-inactive)";
          });
          const appMenu = document.querySelector(".app-menu");
          appMenu.querySelector(".app-icon").src = "/assets/images/MacSE.png";
          appMenu.querySelector(".app-name").textContent = "Finder";
          if (typeof this.MenuManager !== "undefined") {
            this.MenuManager.forceFinderActive();
          }
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          if (typeof this.MenuManager !== "undefined") {
            this.MenuManager.closeAllMenus();
          }
        }
      });
      document.addEventListener("mousedown", (e) => {
        const window2 = e.target.closest(".window");
        if (window2) {
          Array.from(document.querySelectorAll(".window")).forEach((w) => {
            if (w !== window2) {
              w.classList.remove("active");
            }
          });
          window2.classList.add("active");
        }
      });
    }
    cleanup() {
      document.removeEventListener("mousedown", this.handleGlobalClick);
      document.removeEventListener("keydown", this.handleGlobalKeydown);
      clearInterval(this.clockInterval);
    }
  };

  // src/FrankOSCard.js
  var FrankOSCard = class extends HTMLElement {
    // #region constructor
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.system = new System();
      this.frankApp = new FrankApp();
    }
    // #endregion
    // #region Lovelace methods
    static getConfigElement() {
      return document.createElement("frank-card-editor");
    }
    static getStubConfig() {
      return { entity: "", media_entity: "", bpm_entity: "", respond_delay: 0, zoom: 85, transparent_bg: false };
    }
    static getCardSize() {
      return 6;
    }
    // #endregion
    // #region setConfig
    setConfig(config) {
      if (!config.entity && !this.config) {
        this.config = { ...config, entity: "assist_satellite.example" };
      } else {
        this.config = config;
      }
      if (this.contentReady) {
        this.init();
      }
    }
    // #endregion
    // #region hass setter
    set hass(hass2) {
      if (!hass2) return;
      if (!this.contentReady) {
        this.init();
      }
    }
    // #endregion
    // #region init
    init() {
      this.setupDOM();
      this.system.init();
      this.frankApp.init();
    }
    // #endregion
    // #region setupDOM
    setupDOM() {
      this.shadowRoot.innerHTML = `
    <style>
        ${STYLES}
    </style>

    <div id="scene">
        <div class="menubar">
            <div class="menubar-left">
                <div class="menubar-item" data-menu="apple">
                    <!-- svg 12x12-->
                </div>
                <div class="menubar-item" data-menu="file">File</div>
                <div class="menubar-item" data-menu="edit">Edit</div>
                <div class="menubar-item" data-menu="view">View</div>
                <div class="menubar-item" data-menu="help">Help</div>
            </div>
            <div class="menubar-right">
                <div class="weather" id="weather"></div>
                <div class="clock" id="clock"></div>
                <div class="menubar-item app-menu" data-menu="application">
                    <img src="/assets/images/MacSE.png" alt="" class="app-icon" id="current-app-icon" width="16" height="16">
                    <span class="app-name" id="current-app-name">Finder</span>
                </div>
            </div>
        </div>

        <div id="desktop" class="desktop">            
            <div class="window">
                <div class="title-bar"> 
                    <h1 class="title">Frank</h1>
                </div>
                <div class="separator"></div>
                
                <div class="window-pane">
                    <div id="frank-container">
                        <!-- Frank's image will be injected here -->
                    </div>
                    <div id="state-display">
                        <!-- display current state here -->
                    </div>
                </div>
            </div>
        </div>  
    </div>
    

    `;
    }
    // #endregion
    disconnectedCallback() {
      this.system.cleanup();
      this.frankApp.cleanup();
    }
  };

  // src/FrankOSCardEditor.js
  var FrankOSCardEditor = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    setConfig(config) {
      this._config = config;
      this.render();
    }
    set hass(hass2) {
      this._hass = hass2;
      const pickers = this.shadowRoot.querySelectorAll("ha-entity-picker");
      if (pickers.length > 0) {
        pickers.forEach((picker) => {
          picker.hass = hass2;
        });
      } else {
        this.render();
      }
    }
    configChanged(configKey, value) {
      if (!this._config) return;
      const newConfig = { ...this._config };
      if (value === "" || value === void 0 || value === null) {
        delete newConfig[configKey];
      } else {
        newConfig[configKey] = value;
      }
      this._config = newConfig;
      this.dispatchEvent(new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true
      }));
    }
    render() {
      if (!this._config || !this._hass) return;
      this.shadowRoot.innerHTML = `
      <style>
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .side-by-side {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }
        .side-by-side > div {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        label {
          font-family: var(--paper-font-body1_-_font-family, sans-serif);
          font-size: 14px;
          color: var(--primary-text-color);
        }
        .secondary {
          font-size: 12px;
          color: var(--secondary-text-color);
          margin-top: 2px;
        }
      </style>
      <div class="card-config">
        <ha-entity-picker
          id="entity-picker"
          label="Voice Assistant Entity (Required)"
          allow-custom-entity
        ></ha-entity-picker>

        <ha-entity-picker
          id="media-picker"
          label="Media Player Entity (Optional)"
          allow-custom-entity
        ></ha-entity-picker>

        <ha-entity-picker
          id="bpm-picker"
          label="BPM Sensor Entity (Optional)"
          allow-custom-entity
        ></ha-entity-picker>

        <ha-entity-picker
          id="weather-picker"
          label="Weather Entity (Optional)"
          allow-custom-entity
        ></ha-entity-picker>

        <div>
          <ha-textfield
            id="delay-input"
            label="Response Delay"
            type="number"
            min="0"
            max="16"
            step="0.5"
            suffix="s"
            value="${this._config.respond_delay ?? 0}"
          ></ha-textfield>

          <div class="secondary">
            Time (ms) before frank starts talking.
          </div>
        </div>

        <div>
          <ha-textfield
            id="talk-speed-input"
            label="Talk Speed"
            type="number"
            min="10"
            max="1000"
            step="1"
            suffix="ms"
            value="${this._config.talk_speed ?? 200}"
          ></ha-textfield>

          <div class="secondary">
            Time (ms) it takes for frank's talking sprites to cycle back to neutral.
          </div>
        </div>

        <ha-formfield label="Transparent Background">
          <ha-switch id="bg-switch"></ha-switch>
        </ha-formfield>
      </div>
    `;
      const entityPicker = this.shadowRoot.querySelector("#entity-picker");
      entityPicker.hass = this._hass;
      entityPicker.value = this._config.entity;
      entityPicker.includeDomains = ["assist_satellite"];
      entityPicker.addEventListener("value-changed", (ev) => this.configChanged("entity", ev.detail.value));
      const mediaPicker = this.shadowRoot.querySelector("#media-picker");
      mediaPicker.hass = this._hass;
      mediaPicker.value = this._config.media_entity;
      mediaPicker.includeDomains = ["media_player"];
      mediaPicker.addEventListener("value-changed", (ev) => this.configChanged("media_entity", ev.detail.value));
      const bpmPicker = this.shadowRoot.querySelector("#bpm-picker");
      bpmPicker.hass = this._hass;
      bpmPicker.value = this._config.bpm_entity;
      bpmPicker.includeDomains = ["sensor"];
      bpmPicker.addEventListener("value-changed", (ev) => this.configChanged("bpm_entity", ev.detail.value));
      const weatherPicker = this.shadowRoot.querySelector("#weather-picker");
      weatherPicker.hass = this._hass;
      weatherPicker.value = this._config.weather_entity;
      weatherPicker.includeDomains = ["weather"];
      weatherPicker.addEventListener("value-changed", (ev) => this.configChanged("weather_entity", ev.detail.value));
      const delayInput = this.shadowRoot.querySelector("#delay-input");
      delayInput.addEventListener("change", (ev) => {
        this.configChanged(
          "respond_delay",
          Number(ev.target.value)
        );
      });
      const talkSpeedInput = this.shadowRoot.querySelector("#talk-speed-input");
      talkSpeedInput.addEventListener("change", (ev) => {
        this.configChanged(
          "talk_speed",
          Number(ev.target.value)
        );
      });
      const bgSwitch = this.shadowRoot.querySelector("#bg-switch");
      bgSwitch.checked = this._config.transparent_bg === true;
      bgSwitch.addEventListener("change", (ev) => {
        this.configChanged("transparent_bg", ev.target.checked);
      });
    }
  };

  // src/main.js
  customElements.define("frank-card-editor", FrankOSCardEditor);
  customElements.define("frank-card", FrankOSCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "frank-card",
    name: "Frank Custom Card",
    preview: true,
    description: "A responsive, animated Frank AI assistant card that reacts to voice and dances to music."
  });
  var styleElement = document.createElement("style");
  styleElement.textContent = STYLES;
  document.head.appendChild(styleElement);
})();
