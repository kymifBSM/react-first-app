const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./components/header.jsx");
const Article = require("./components/article.jsx");
  
const header = "Контра";
const article = "Помойка грёбанная, пофиксите её, ей 10 лет, факинг 10 лет";
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <div>
        <Header text={header} />
        <Article content={article} />
    </div>
);