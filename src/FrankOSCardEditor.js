// #region Home Assistant Card Editor

export class FrankOSCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    this._config = config;
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    const pickers = this.shadowRoot.querySelectorAll('ha-entity-picker');
    if (pickers.length > 0) {
      pickers.forEach(picker => { picker.hass = hass; });
    } else {
      this.render();
    }
  }

  configChanged(configKey, value) {
    if (!this._config) return;

    const newConfig = { ...this._config };
    if (value === '' || value === undefined || value === null) {
       delete newConfig[configKey];
    } else {
       newConfig[configKey] = value;
    }

    this._config = newConfig;

    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
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

    const entityPicker = this.shadowRoot.querySelector('#entity-picker');
    entityPicker.hass = this._hass;
    entityPicker.value = this._config.entity;
    entityPicker.includeDomains = ['assist_satellite'];
    entityPicker.addEventListener('value-changed', (ev) => this.configChanged('entity', ev.detail.value));

    const mediaPicker = this.shadowRoot.querySelector('#media-picker');
    mediaPicker.hass = this._hass;
    mediaPicker.value = this._config.media_entity;
    mediaPicker.includeDomains = ['media_player'];
    mediaPicker.addEventListener('value-changed', (ev) => this.configChanged('media_entity', ev.detail.value));

    const bpmPicker = this.shadowRoot.querySelector('#bpm-picker');
    bpmPicker.hass = this._hass;
    bpmPicker.value = this._config.bpm_entity;
    bpmPicker.includeDomains = ['sensor'];
    bpmPicker.addEventListener('value-changed', (ev) => this.configChanged('bpm_entity', ev.detail.value));

    const weatherPicker = this.shadowRoot.querySelector('#weather-picker');
    weatherPicker.hass = this._hass;
    weatherPicker.value = this._config.weather_entity;
    weatherPicker.includeDomains = ['weather'];
    weatherPicker.addEventListener('value-changed', (ev) => this.configChanged('weather_entity', ev.detail.value));

    const delayInput = this.shadowRoot.querySelector('#delay-input');
    delayInput.addEventListener('change', (ev) => {
      this.configChanged(
        'respond_delay',
        Number(ev.target.value)
      );
    });

    const talkSpeedInput = this.shadowRoot.querySelector('#talk-speed-input');
    talkSpeedInput.addEventListener('change', (ev) => {
      this.configChanged(
        'talk_speed',
        Number(ev.target.value)
      );
    });

    const bgSwitch = this.shadowRoot.querySelector('#bg-switch');
    bgSwitch.checked = this._config.transparent_bg === true;
    bgSwitch.addEventListener('change', (ev) => {
      this.configChanged('transparent_bg', ev.target.checked);
    });
  }
}

// #endregion