console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderAPP();
    }
};

const onClickRemoveAll = () => {    
    app.options = [];
    renderAPP();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
    
};

const appRoot = document.getElementById('app');
const root = ReactDOM.createRoot(appRoot);

const renderAPP = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onClickRemoveAll}>Remove all</button>
        <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
    );

    root.render(template);
};

renderAPP();
