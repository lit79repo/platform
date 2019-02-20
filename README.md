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
        Understanding output:
        ```json
        [{"Class":"8-A","lessons":[["Day 1, Lesson 1", "Day 1, Lesson 2"],["Day 2, Lesson 1", "Day 2, Lesson 2"],["Day 3, Lesson 1", "Day 3, Lesson 2"],["Day 4, Lesson 1", "Day 4, Lesson 2"],["Day 5, Lesson 1", "Day 5, Lesson 2"]]}]
        ```

* __Files:__ 
    * Accessing files:
     ```
     # for exmaple we have:
     # User: 01
     # File: test.html
     # we can access it RAW by: 
     https://lit79p.herokuapp.com/fm/raw/test.html 
     # using User 01 credentials in HTTP Basic Authorization.
     ```

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