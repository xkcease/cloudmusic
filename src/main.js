import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import { Button, Layout, Row, Col, Menu, Input, Icon } from 'ant-design-vue';

Vue.use(Button);
Vue.use(Layout);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Input);
Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
