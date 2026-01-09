import { createApp } from 'vue';
import App from './App.vue';

//routes
import router from './routes/index';
// pinnia
import pinia from './store/index';
import 'virtual:windi.css';
// import 'element-plus/es/components/base/style/css';
// import 'element-plus/es/components/table/style/css';
import 'lib-flexible-computer';
const app = createApp(App);

//routes
app.use(router).use(pinia).mount('#app');
