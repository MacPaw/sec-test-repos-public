import apiCall from './services/api/apiCall';
import './lib/skycons';

class Weather extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.latitude = this.getAttribute('latitude');
    this.longitude = this.getAttribute('longitude');

    this.$icon = this.$shadowRoot.querySelector('#dayIcon');
    this.$city = this.$shadowRoot.querySelector('#city');
    this.$temperature = this.$shadowRoot.querySelector('#temperature');
    this.$summary = this.$shadowRoot.querySelector('#summary');

    this.setWeather();

    this.ticker = setInterval(this.displayTime.bind(this), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.ticker);
  }

  setWeather() {
    if(this.latitude && this.longitude) {
      apiCall(`getWeather/${this.latitude},${this.longitude}`, {}, 'GET')
        .then(response => {

          this.$city.textContent = response.city;
          this.$temperature.textContent = `${response.currently.temperature}° F`;
          this.$summary.textContent = response.currently.summary;

          const skycons = new Skycons({"color": "black"});
          skycons.add(this.$icon, Skycons[response.currently.icon.toUpperCase().replace(/-/g, "_")]);
          skycons.play();
        })
        .catch(console.error);
    }
  }

  displayTime() {
    const date = new Date();
    const displayTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const $time = this.$shadowRoot.querySelector('#time');
    $time.textContent = displayTime;
  }

  static get observedAttributes() { return ['latitude', 'longitude']; }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'latitude' && oldValue !== newValue) {
      this.latitude = newValue;
      this.setWeather();
    }
    if(attr === 'longitude' && oldValue !== newValue) {
      this.longitude = newValue;
      this.setWeather();
    }
  }

  get long() {
    return this.longitude;
  }

  set long(long) {
    this.longitude = long;
    this.setWeather();
  }

  get lat() {
    return this.latitude;
  }

  set lat(lat) {
    this.latitude = lat;
    this.setWeather();
  }
}

export default Weather;
