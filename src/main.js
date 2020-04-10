import Vue from 'vue';
import { Button } from 'ant-design-vue';

import App from './App';

import './styles/main.css';

Vue.use(Button);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});


