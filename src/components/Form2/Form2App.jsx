import { Component } from 'react';
import Form from './Form2';

class Form2App extends Component {
        state = {
           allProducts: [],
        };

        componentDidMount() {
          console.log('MOUNT');
        }

        componentDidUpdate(prevProps, prevState) {
          console.log('UPDATE');
        }

        componentWillUpdate() {
          console.log('UNMOUNT');
        }
        
        
        
        
        
          
        addNewProduct = obj => {
              this.setState(prevState => {
                return {
                  allProducts: [...prevState.allProducts, obj],
                };
              });
            };
          
        render() {
          console.log('RENDER');
              return (
                <div className="App">
                   <Form addNewProduct={this.addNewProduct} />
                </div>
              );
            }
          }
export default Form2App;