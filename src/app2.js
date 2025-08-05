function IndecisionApp() {
    const [options, setOptions] = React.useState([]);

    const handleDeleteOptions = () => {
        setOptions([]);
    };

    const handlePick = () => {
        const randomNum = Math.floor(Math.random() * options.length);
        const option = options[randomNum];
        alert(option);
    };

    const handleAddOption = (option) => {
        if (!option) { //if there is a empty string
            return 'Enter valid value to add item';
        } else if (options.indexOf(option) > -1) { // if option exist
            return 'This option already exists';
        }

        setOptions(prevOptions => [...prevOptions, option]);
    };

    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                hasOptions={options.length > 0}
                handlePick={handlePick}
            />
            <Options 
                options={options} 
                handleDeleteOptions={handleDeleteOptions}
            />
            <AddOption 
                handleAddOption={handleAddOption}
            />
        </div>
    );
}

function Header({ title, subtitle }) {
    console.log({ title, subtitle });
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>   
        </div>
    );
}

function Action({ handlePick, hasOptions }) {
    return (
        <div>
            <button 
                onClick={handlePick}
                disabled={!hasOptions}   
            >
                What should I do?
            </button>
        </div> 
    );
}

function Options({ options, handleDeleteOptions }) {
    return (
        <div>
            <button onClick={handleDeleteOptions}>Remove all</button>
            {
                options.map((option) => <Option key={option} optionText={option}/>)
            }         
        </div>
    );
}

function Option({ optionText }) {
    return (
        <div>
            {optionText}
        </div>
    );
}

function AddOption({ handleAddOption }) {
    const [error, setError] = React.useState(undefined);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const errorMessage = handleAddOption(option);

        setError(errorMessage);
        
        // Clear the input if no error
        if (!errorMessage) {
            e.target.elements.option.value = '';
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<IndecisionApp />);