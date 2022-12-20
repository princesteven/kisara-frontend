import React, { useState, useRef } from "react";
import { MaskInputProps } from "./mask-input-types";

/**
 * @function
 * @name MaskInput
 * @description Masks an input to a specific pattern
 * @param props.pattern {String} the pattern to follow
 * @param props.separator {String} the pattern separator. If not provided, defaults to '-'
 * @param props.onChange {Function} action to perform when value is changed
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const MaskInput: React.FC<MaskInputProps> = ({ pattern, separator = "-", onChange }) => {
  const inputCard = useRef<any>();
  const [card, setCard] = useState();

  // useEffect(() => {
  //   handleChange();
  // }, [card]);

  const handleChange = () => {
    const patternArray = pattern.split(separator)
    const matchRegex = new RegExp(patternArray.map((item: string) => '(\\'+`d{0,${item.length}})`).join(''))

    const cardValue = inputCard.current.value
      .replace(/\D/g, "")
      .match(matchRegex);

    const value = patternArray.map((item: string, index: number) => `${cardValue?.[index+1]}`)

    inputCard.current.value = value.reduce((prev, next) => prev + (prev && next ? separator : '') + next)

    const numbers = inputCard.current.value.replace(/(\D)/g, "");
    setCard(numbers);

    if (onChange)
      onChange(inputCard.current.value)
  };

  return (
    <input type="text" ref={inputCard} onChange={handleChange} className={'ant-input'} />
  );
};

export default MaskInput;
