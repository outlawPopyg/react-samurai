# React Samurai course <br> ( react + redux )
___
## Структура проекта

 Файлы из уроков лежат в папке `lessons`. 
 Некоторые уроки будут пропущены из-за их простоты. 
 Добавляться будут преимущественно темы с паттернами. 
 Файлы в корне - текущие на момент разработки соц. сети

## Откат к предыдущим коммитам

1. `gitk --all&` - запуск графического интерфейса для просмотра коммитов. 
2. `SHA1 ID` - id коммита, который нужно скопировать ( ctrl+insert ).
3. `git checkout <id>` - откат к коммиту, где id - sha1 id коммита

## CSS-modules

Назвать файл, например, не **index.css**, a **index.modules.css**.
Теперь при импорте в jsx, импортируется объект с уникальными классам. 
Пример использования:   
```jsx
import classes from './index.modules.css';
<nav className={classes.nav} />
<header className={classes.header} />
```

## UI - BLL

**BLL** (Business Logic Layer) - отвечает за данные, которые приходят с сервера ( Пример Redux ) <br>
**UI** (User Interface) - компоненты пользовательских интерфейсов ( Пример React )

## Множественная деструктуризация

```javascript
const obj = {
    name: "Arthur",
    parents: {
        mother: "Rihanna",
        father: "Dutch"
    }
}

const a = ({ parents: { mother, father }}) => {
    console.log(mother + " " + father);
}

a(obj); // => Rihanna Dutch
```