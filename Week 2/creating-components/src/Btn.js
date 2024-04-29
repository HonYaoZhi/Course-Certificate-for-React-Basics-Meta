function Btn() {

    const clickHandler1 = () => alert('clicked');
    const clickHandler2 = () => alert('mouse over');
    
    return (
        <div>
            <button onClick={clickHandler1}>
                Click me
            </button>

            <button onMouseOver={clickHandler2}>
                Mouse Over me
            </button>
    
        </div>
    )    
}

export default Btn;