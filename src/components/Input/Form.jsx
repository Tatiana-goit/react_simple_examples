import useLocalStorage from './hooks/useLocalStorage'

const Form = () => {
    const [name, setName]= useLocalStorage('name','') ;
    const [tag, setTag] = useLocalStorage('tag','') ;

    const handleChange = e => {
        const {name,value} = e.currentTarget;
    switch(name) {
        case 'name':
            setName(value);
            break;
        case 'tag':
            setTag(value) ;
            break;
        default: 
            return;
        }
    }

    // handleSubmit = e => {
    //     e.preventDefault();

    //     this.props.onSubmit(this.state);
    //     this.reset();
    // }

    // reset = () => {
    //     this.setState({name: '', tag: ''})   
    // }



    return (
        <form 
        // onSubmit={this.handleSubmit}
        >
                    <label>
                        Имя 
                        <input 
                            type='text' 
                            name='name'
                            value={name}
                            onChange={handleChange}/>
                    </label>
                    <label>
                        Прозвище 
                        <input 
                            type='text'
                            name='tag'
                            value={tag}
                            onChange={handleChange}/>
                    </label>
    
                    <button type='submit'>Отправить</button>
                </form>
    )
}

export default Form;