# [__Платформа__](https://lit79p.herokuapp.com/)
> Цей додаток був створений для автоматизації шкільних навчальних процесів Ліцею Інформаційних Технологій №79.

### Files architecture:
* ` views ` - pug (jade) files.
* ` public ` - static serving files over /
* ` *.fs ` - User Files Storage Directories.
* `routes ` - Express router modules for ` views ` or api.
* ` db.json ` - Database Data in JSON.
* ` LICENSE ` - License of project.
* ` README.md ` - this file.
* ` bin ` - executables.
* ` bin/www ` - Node.js file to start platform.
* ` app.js ` - Express app main module.

### API
* __Lessons:__
    * [` https://lit79p.herokuapp.com/lessons/api `](https://lit79p.herokuapp.com/lessons/api) - Returns JSON with lessons.
        * Example output: 
        ```json
        [{"Class":"8-A","lessons":[["Рос. м.","Хімія","Алгебра","Алгебра","Фіз-ра","Заруб.","Алгл. м."],["Біологія","Хімія","Фіз-ра","Укр. м.","Укр. л.","Англ. м."],["Геог.","Інф.","Інф.","Фізіка","Біологія","Зар. л.","Англ. м."],["Геог.","Укр. м.","Укр. л.","Іст. У.","Алгебра","Англ. м."],["Техн.","Іст. В.","Фіз-ра","Фізіка","Геом.","Геом.","ОБЖ"]]}]
        ```

* __Files:__ Will be soon...

### Starting project.

* #### Clone Project and change direcoty into.

##### I will recomend to use ` yarn ` instead of ` npm `
* `yarn`:  
    ```bash
    # install deps.
    yarn install
    # start 
    yarn start
    # dev (Live Reload)
    yarn dev 
    ```
* `npm`: 
    ```bash
    # install deps.
    npm install # or i
    # start 
    npm start
    # dev (Live Reload)
    npm run-script dev 
    
    ```
> MIT License;
> Copyright (c) 2019 Mihail Marynenko Mykolaevich