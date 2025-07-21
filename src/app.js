console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two']
}

// JSX - JavaScript XML

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
        <o1>
            <li>Item one</li>
            <li>Item two</li>
        </o1>
    </div>
);

let count = 0;
const addOne = () => {
    count += 1;
    renderCounterApp();
};

const minusOne =  () => {
    count -= 1;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
    <div> 
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>    
    </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();