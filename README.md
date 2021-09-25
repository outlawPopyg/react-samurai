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

## React.createRef()

createRef() создает ссылку на jsx элемент, свойства которого
можно будет читать.

```jsx
const MyPosts = () => {
    
   const addPost = () => {
        // получаем input 
        alert(inputElement.current.value);
   }
   
   // Создаем ссылку на input
   const inputElement = React.createRef();

   return (
        <div>
         // указывем в ref ссылку
         <input ref={inputElement} type="text"/>
        </div>
   );
}

```

## Паттерн Observer

Этот паттерн позволяет избежать циклическую зависсимость
в проекте. Когда два или более файлов импортируют друг у друга
ф-ии или переменные.

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import { state, addPost, updateNewPostText, subscribe } from "./state/state";

const rerender = () => {
 ReactDOM.render(
         <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
         document.getElementById('root')
 );
};

rerender();

subscribe(rerender);
```
```jsx
// state.js
let rerender = (state) => {};
export const subscribe = (observer) => {
 rerender = observer;
}
```

# Redux
___

## Container Component

Контейнерная компонента отвечает за диспатчи и возвращает 
презентационную компоненту, задача который лишь отобразить UI


```jsx
// myPostsContainer.js
const MyPostsContainer = ({ postsData, newPostText, dispatch }) => {

   const onChangeInput = ({ target: { value } }) => {
       dispatch(updateTextActionCreator(value));
   }
   
   const onButtonClick = () => {
       dispatch(addPostActionCreator());
   } 
 
   return <MyPosts
       postsData={postsData}
       newPostText={newPostText}
       onChangeInput={ onChangeInput }
       onButtonClick={ onButtonClick }
   />;
}
```

```jsx
// myPosts.js
const MyPosts = ({ postsData, newPostText, onButtonClick, onChangeInput }) => {
    console.log(newPostText);
    return (
        <div>
            <h1>My posts</h1>
            <input value={ newPostText } onChange={ onChangeInput } type="text"/>
            <button className={"my-posts-button"} onClick={ onButtonClick }>Add new post</button>
            <div>
                {
                    postsData.map( (data) => {
                        return <Post key={data.id} {...data} />
                    })
                }
            </div>
        </div>
    );
}
```












