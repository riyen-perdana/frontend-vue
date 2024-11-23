//import createApp from vue
import { createApp } from 'vue';

//import component App
import App from './App.vue';

//import config router
import routes from './routes';

//create app Vue
const app = createApp(App);

//use router
app.use(routes);

//mount app
app.mount('#app');
