import {useState} from 'react';
import './ColorPicker.css';

const ColorPicker = ({options}) => {
    const [activeOptionIdx, setActiveOptionIdx] = useState(0)

    const { label } = options[activeOptionIdx];

    const makeOptionClassName = index => {
        const optionClasses = ['ColorPicker__option'];
        if (index === activeOptionIdx) {
          optionClasses.push('ColorPicker__option--active');
        }
        return optionClasses.join(' ');
      };

    return (
        <div className="ColorPicker">
          <h2 className="ColorPicker__title">Color Picker</h2>
          <p>Выбран цвет: {label}</p>
          <div>
            {options.map(({ label, color }, index) => (
              <button
                key={label}
                className={makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => setActiveOptionIdx(index)}
              ></button>
            ))}
          </div>
        </div>
      );
}

export default ColorPicker;