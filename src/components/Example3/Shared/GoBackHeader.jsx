function CoBackHeader ({title,handkeGoBack}) {
    const  cbOnClick =() => handkeGoBack ()
    
    return (
        <header>
            <button onclick={cbOnClick} type="button">Go Back </button>
            <h1>{title}</h1>
        </header>
    )
}

export default CoBackHeader;