function ModeToggler() {

    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick() {
        darkModeOn =! darkModeOn;
        if (darkModeOn == true) {
            alert("Light mode is on")
        } else {
            alert("Dark mode is on")
        }
    }

    return (
        <div>
            <button onClick={handleClick}>
                Change the Mode
            </button>
            {darkModeOn ? darkMode : lightMode}
            <p>The h1 does not change with the Toggle Button.</p>
        </div>
    );
}

export default ModeToggler;