import ComicContainer from "./Comiccontainer.js"
import ComicList from "./ComicList.js"
import data from "./data.js"
let $comicList = document.getElementById('my-list');
$comicList.setAttribute('comics',data);
$comicList.setAttribute('comics',JSON.stringify(data));