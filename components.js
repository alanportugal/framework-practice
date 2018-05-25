//1. Pull component out into components.js
//2. Create an about.js, pull definition of about-app into into it 
//3. rename script.js to index.js, it should only include definition of app & gators
//4. about.html link to components.js and about.js
//5. index.html link to components.js and about.js

Vue.component('app-header', {
  props: ['text'],
  template: '<header><h1><img src="alligator-logo.png" alt="Alligator Logo">{{ text }}</h1></header>'
})