import {Component} from 'react';
import s from './Dropdown.module.css'

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    render() {
        const { visible } = this.state;
    
        return (
          <div className={s.section}>
            <button
              type="button"
              className={s.button}
              onClick={this.toggle}
            >
              {visible ? 'Скрыть' : 'Показать'}
            </button>
    
            {visible && <div className={s.menu}>Выпадающее меню</div>}
          </div>
        );
      } 
      
    // show = () => {
    //     this.setState({visible: true})
    // }

    // hide = () => {
    //     this.setState({visible: false})
    // }

    // render () {
    //     return (
    //         <div className={s.section}>
    //             <button type='button' className={s.button} onClick={this.show}>
    //                 Показать
    //             </button>

    //             <button type="button" className={s.button} onClick={this.hide}>
    //                 Скрыть
    //             </button>

    //             {this.state.visible && <div className={s.menu}>Выпадающее меню</div> }
                
    //         </div>
    //     )
    // }
}

export default Dropdown;