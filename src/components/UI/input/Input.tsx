import { FC, InputHTMLAttributes, RefObject } from 'react';
import classes from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	inputRef?: RefObject<HTMLInputElement>
}

const Input: FC<InputProps> = ({ inputRef, ...props }) => {
  return (
    <input ref={inputRef} className={classes.input} {...props} />
  );
};

export default Input;
