//Using updated functional components
function IndecisionApp () {
    const title = 'Indecision functional';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
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

function Action() {
    const handlepick= () => {
        alert('handlePick');
    };

    return (
        <div>
            <button onClick={handlepick}>What should I do?</button> 
        </div>
    );
}

function Options({ options }){
    const handleRemoveAll = () => {
        alert('handle remove all')
    };
    return (
        <div>
            <button onClick={handleRemoveAll}>Remove all</button>
            {
                options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    );
}

function Option({ optionText }) {
    return (
        <div>
            Option: {optionText}
        </div>
    );
}

function AddOption() {
    const handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    };
    return (
        <div>
            <form onSubmit={handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<IndecisionApp />)