import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'

const app = createApp(App);
app.mount('#app');


// Перебираем все глобальные компоненты из `UI` и добавляем
// эти компоненты в корневой компонент приложения `App`
components.forEach(component => {
    app.component(component.name, component)
});
