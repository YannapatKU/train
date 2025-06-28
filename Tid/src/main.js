import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';


import Button from "primevue/button"
import Drawer from 'primevue/drawer';
import Card from 'primevue/card';
import { Form } from '@primevue/forms';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(ToastService);

app.component('Button', Button);
app.component('Drawer', Drawer);
app.component('Card', Card);
app.component('Form', Form);
app.component('Toast', Toast);
app.component('InputText', InputText);
app.component('Message', Message);


    

app.mount('#app')
