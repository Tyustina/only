Сборка работает на gulp 4 версии


- `npm ci` - устанавливает все зависимости
- `npm start` - запускает сборку с сервером для разработки проекта
- `npm run build` - создаёт папку `build` с оптимизированными файлами для продакшена
- `npm run preview` - позволяет посмотреть результат работы prod-версии сборки
- `npm run lint` - запускает все проверки (занимает длительное время):
  - `npm run lint:spaces` - проверяет отступы с помощью editorConfig
  - `npm run lint:markup` - проверяет HTML-разметку через W3C-валидатор
  - `npm run lint:html` - проверяет разметку по правилам linthtml
  - `npm run lint:bem` - проверяет правильное использование БЭМ в разметке
  - `npm run lint:styles` - проверяет проект на совместимость с stylelint
  - `npm run lint:scripts` - проверяет скрипты по правилам eslint
- `npm run optimize` - запускает все оптимизации изображений (занимает длительное время):
  - `npm run optimize:raster` - оптимизирует растровые изображения из `raw/images/` в `source/images/`
  - `npm run optimize:vector` - оптимизирует векторные изображения из `raw/images/` в `source/images/`