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

  // src/system/MenuBar.js
  var MenuBar = class {
    constructor() {
      this.renderContent();
      this.resetApplicationName();
      this.initializeClock();
    }
    renderContent() {
      return `
            <div class="menubar-left">
                <div class="menubar-item" data-menu="apple">
                    <!-- svg 12x12-->
                </div>
                <div class="menubar-item" data-menu="file">File</div>
                <div class="menubar-item" data-menu="edit">Edit</div>
                <div class="menubar-item" data-menu="view">View</div>
                <div class="menubar-item" data-menu="special">Special</div>
            </div>
            <div class="menubar-right">
                <div class="weather" id="weather"></div>
                <div class="clock" id="clock"></div>
                <div class="menubar-item app-menu" data-menu="application">
                    <span class="app-name" id="current-app-name"></span>
                </div>
            </div>
        `;
    }
    setApplicationName(name) {
      const appNameElement = document.getElementById("current-app-name");
      if (appNameElement) {
        appNameElement.textContent = name;
      }
    }
    resetApplicationName() {
      this.setApplicationName("Desktop");
    }
    closeAllMenus() {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
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
  };

  // src/system/Window.js
  var Window = class {
    constructor(title, content, type = "document", x = 20, y = 50) {
      this.element = document.createElement("div");
      this.element.className = "window";
      if (type === "folder") this.element.classList.add("folder-window");
      this.element.style.left = x + "px";
      this.element.style.top = y + "px";
      if (title === "Macintosh HD") {
        this.element.style.width = "500px";
        this.element.style.height = "200px";
      } else if (type === "document") {
        this.element.style.width = "800px";
        this.element.style.height = "600px";
      } else {
        this.element.style.width = "600px";
        this.element.style.height = "400px";
      }
      this.element.innerHTML = `
            <div class="window-titlebar" data-app-id="${title}}">
                <div class="window-close"></div>
                <div class="window-title">${title}</div>
            </div>
            <div class="window-content">${content}</div>
            <div class="window-resizer"></div>
        `;
      this.element.dataset.windowType = type;
      this.makeDraggable();
      this.makeCloseable();
      this.makeActivatable();
      this.makeResizable();
      this.bringToFront();
    }
    makeActivatable() {
      this.element.addEventListener("mousedown", (e) => {
        if (!e.target.classList.contains("window-close")) {
          this.bringToFront();
        }
      });
    }
    makeDraggable() {
      const titlebar = this.element.querySelector(".window-titlebar");
      let isDragging = false;
      let initialX, initialY;
      titlebar.addEventListener("mousedown", (e) => {
        isDragging = true;
        initialX = e.clientX - this.element.offsetLeft;
        initialY = e.clientY - this.element.offsetTop;
        this.bringToFront();
      });
      document.addEventListener("mousemove", (e) => {
        if (isDragging) {
          e.preventDefault();
          this.element.style.left = e.clientX - initialX + "px";
          this.element.style.top = e.clientY - initialY + "px";
        }
      });
      document.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
        }
      });
    }
    makeResizable() {
      const resizer = this.element.querySelector(".window-resizer");
      if (!resizer) return;
      resizer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const startWidth = this.element.offsetWidth;
        const startHeight = this.element.offsetHeight;
        const startX = e.clientX;
        const startY = e.clientY;
        const onMouseMove = (moveEvent) => {
          const newWidth = startWidth + (moveEvent.clientX - startX);
          const newHeight = startHeight + (moveEvent.clientY - startY);
          this.element.style.width = `${Math.max(200, newWidth)}px`;
          this.element.style.height = `${Math.max(100, newHeight)}px`;
        };
        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    }
    makeCloseable() {
      const closeButton = this.element.querySelector(".window-close");
      closeButton.addEventListener("click", () => {
        this.close();
      });
    }
    bringToFront() {
      const windows = document.querySelectorAll(".window");
      let maxZ = 0;
      windows.forEach((win) => {
        const z = parseInt(win.style.zIndex || 0);
        maxZ = Math.max(maxZ, z);
        win.classList.remove("active");
        win.querySelector(".window-titlebar").style.background = "var(--system7-titlebar-inactive)";
      });
      this.element.style.zIndex = maxZ + 1;
      this.element.classList.add("active");
      this.element.querySelector(".window-titlebar").style.background = "var(--system7-titlebar-active)";
    }
    close() {
      this.element.remove();
    }
    open() {
      document.getElementById("desktop").appendChild(this.element);
      this.bringToFront();
    }
  };

  // src/system/StateManager.js
  var StateManager = class {
    constructor(menubar) {
      this.menubar = menubar;
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
        const desktop = {};
        const menuState = {
          activeApp: document.querySelector(".app-menu").textContent
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
        }
        if (state.menuState) {
          const activeApp = state.menuState.activeApp;
          if (activeApp && activeApp !== "Desktop") {
            this.menubar.setApplicationName(activeApp);
          } else {
            this.menubar.resetApplicationName();
          }
        }
        state.windows.forEach((windowState) => {
          new Window(
            windowState.title,
            windowState.content,
            windowState.type,
            parseInt(windowState.position.left) || 100,
            parseInt(windowState.position.top) || 100
          );
        });
      } catch (error) {
        console.error("Error loading state:", error);
        localStorage.removeItem(this.STATE_KEY);
      }
    }
    startAutoSave() {
      if (this.autoSaveInterval) {
        clearInterval(this.autoSaveInterval);
      }
      this.autoSaveInterval = setInterval(() => this.saveState(), this.AUTO_SAVE_INTERVAL);
    }
    clearState() {
      localStorage.removeItem(this.STATE_KEY);
    }
  };

  // src/system/AppManager.js
  var AppManager = class {
    constructor() {
      this.apps = {};
      this.appClasses = {
        "about_app": AboutApp,
        "finder_app": FinderApp,
        "frank_app": FrankApp
      };
    }
    registerApp(appId, appInstance) {
      this.apps[appId] = appInstance;
    }
    openApp(appId) {
      if (!this.apps[appId]) {
        registerApp(appId, new appClasses[appId]());
      }
      if (this.apps[appId]) {
        this.apps[appId].window.open();
      }
    }
    closeApp(appId) {
      if (this.apps[appId]) {
        this.apps[appId].window.close();
        delete this.apps[appId];
      } else {
        console.warn(`App with ID ${appId} not found.`);
      }
    }
  };

  // src/system/System.js
  var System = class {
    constructor() {
      this.menubar = new MenuBar();
      this.stateManager = new StateManager(this.menubar);
      this.appManager = new AppManager();
    }
    init() {
      this.initializeEventListeners();
    }
    // Initialize desktop and event listeners
    initializeEventListeners() {
      document.addEventListener("click", (e) => this.handleGlobalClick(e));
      document.addEventListener("keydown", (e) => this.handleGlobalKeydown(e));
      window.addEventListener("beforeunload", () => this.handleBeforeUnload());
    }
    handleGlobalClick(e) {
      if (!e.target.closest(".menubar-item") && !e.target.closest(".dropdown-menu")) {
        this.menubar.closeAllMenus();
      }
      if (e.target.id === "desktop") {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll(".window").forEach((win) => {
          win.classList.remove("active");
          win.style.zIndex = "1";
          win.querySelector(".window-titlebar").style.background = "var(--system7-titlebar-inactive)";
        });
        this.menubar.resetApplicationName();
      }
      const window2 = e.target.closest(".window");
      if (window2) {
        Array.from(document.querySelectorAll(".window")).forEach((w) => {
          if (w !== window2) {
            w.classList.remove("active");
          }
        });
        window2.classList.add("active");
      }
      if (e.target.matches(".window-close")) {
        const appId = e.target.closest(".window").dataset.appId;
        if (appId) {
          this.appManager.closeApp(appId);
        }
      }
    }
    handleGlobalDblClick(e) {
      const icon = e.target.closest(".desktop-icon");
      if (!icon) return;
      const name = icon.dataset.name;
      const type = icon.dataset.type;
      if (type === "folder") {
        this.appManager.openApp("finder_app");
      } else if (type === "alias") {
        if (name === "Frank") {
          this.appManager.openApp("frank_app");
        } else if (name === "Trash") {
          this.appManager.openApp("trash_app");
        }
      }
    }
    handleGlobalKeydown(e) {
      if (e.key === "Escape") {
        this.menubar.closeAllMenus();
      }
    }
    handleBeforeUnload(e) {
      this.stateManager.saveState();
    }
    cleanup() {
      document.removeEventListener("click", this.handleGlobalClick);
      document.removeEventListener("dblclick", this.handleGlobalDblClick);
      document.removeEventListener("keydown", this.handleGlobalKeydown);
      document.removeEventListener("beforeunload", this.handleBeforeUnload);
    }
  };

  // src/FrankOSCard.js
  var FrankOSCard = class extends HTMLElement {
    // #region constructor
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
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
    set hass(hass) {
      if (!hass) return;
      if (!this.contentReady) {
        this.init();
      }
    }
    // #endregion
    // #region init
    init() {
      this.setupDOM();
      this.system = new System();
      this.system.init();
    }
    // #endregion
    // #region setupDOM
    setupDOM() {
      this.shadowRoot.innerHTML = `
    <style>
        ${STYLES}
    </style>

    <div id="scene">
        <div id="menubar" class="menubar">
            <!-- Menubar content will be injected here -->
        </div>

        <div id="desktop" class="desktop">            
            <!-- Windows will be injected here -->
        </div>  
    </div>
    `;
    }
    // #endregion
    disconnectedCallback() {
      this.system.cleanup();
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
    set hass(hass) {
      this._hass = hass;
      const pickers = this.shadowRoot.querySelectorAll("ha-entity-picker");
      if (pickers.length > 0) {
        pickers.forEach((picker) => {
          picker.hass = hass;
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
