import './text-input.css';
import {TextInputProps} from "./text-input-types";
import {useState} from "react";

/**
 * @function
 * @name TextInput
 * @description Text input element
 * @param props.type "text" | "password"
 * @param props.placeholder string
 * @param props.icon react node
 * @param props.required boolean
 * @param props.onChange function
 * @param props.name string, text input string
 * @version 2.0.1
 * @since 2.0.1
 * @author Prince Malipula
 * @returns TableTransfer
 */
const TextInput: React.FC<TextInputProps> = ({
                                               type,
                                               placeholder,
                                               icon,
                                               required,
                                               onChange,
                                               ...props
                                             }) => {
  const [name, setName] = useState();
  const [color, setColor] = useState('#E3E3E3');
  const [value, setValue] = useState('');

  const handleOnInvalid = (e: any) => {
    setName(e.target.name);
    name === props.name ? setColor('#e65353') : setColor('#E3E3E3');
  };

  const handleOnChange = (e: any) => {
    setValue(e.target.value);
    if (e.target.name === name) {
      setColor('#E3E3E3');
    }
    if (e.target.value.length === 0) {
      setColor('#e65353');
    }
    onChange?.(e.target.value);
  };

  return (
    <div className="text-input-container" style={{borderColor: color}}>
      {icon && (
        <div
          className="text-input-icon"
          style={{backgroundImage: `url(${icon})`}}
        />
      )}
      <input
        type={type}
        name={props.name}
        onInvalid={(e) => handleOnInvalid(e)}
        onChange={handleOnChange}
        required={required}
        className={'text-input'}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
