import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'

// Создаём приложение Vue.js
const app = createApp(App);


// Перебираем все глобальные компоненты из `UI` и добавляем
// эти компоненты в корневой компонент приложения `App`
components.forEach(component => {
    app.component(component.name, component)
});

// После (и только после!), монтируем в приложение
app.mount('#app');
console.log('Список глобальных компонентов:')
console.log(components);
