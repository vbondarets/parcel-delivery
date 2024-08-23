/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IBasicProps } from '../../types/props.types';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';

interface IProps extends IBasicProps {
  placeholder?: string;
  value: string | boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'email'
    | 'file'
    | 'number'
    | 'password'
    | 'tel'
    | 'text';
  name?: string;
  errorMassege?: string;
  contentClassName?: string;
  disabled?: boolean;
  maxNum?: number;
}

export const InputComponent = ({
  className,
  placeholder,
  value,
  setValue,
  label,
  type,
  name,
  errorMassege,
  contentClassName,
  disabled,
  maxNum,
}: IProps) => {
  const [id] = useState(crypto.randomUUID());
  const [error, setError] = useState(errorMassege);

  useEffect(() => {
    if (errorMassege) {
      setError(error);
    }
  }, [errorMassege]);

  const returnValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled === true) {
      return;
    }
    if (maxNum && +e.currentTarget.value > maxNum) {
      setValue(maxNum.toString());
      return;
    }
    setValue(e.currentTarget.value);
  };
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`${className} ${contentClassName ? contentClassName : ''}`}>
      <label className="input-label" htmlFor={id}>
        {label && `${label}`}
        {/* {`${label && label}`} */}
        <div className="input-wrapper">
          <input
            style={{ backgroundColor: 'transparent' }}
            type={
              type && type === 'password'
                ? !isPasswordShown
                  ? type
                  : 'text'
                : type
            }
            id={id}
            // ref={inputRef}
            name={name && name}
            className={`input`}
            placeholder={placeholder && placeholder}
            checked={value as boolean}
            value={value as string}
            onChange={returnValue}
            max={maxNum && maxNum}
            disabled={disabled && disabled}
          />
          {type === 'password' && (
            <div
              className="input-icon-container"
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? (
                <VisibilitySharpIcon className="input-password-icon" />
              ) : (
                <VisibilityOffSharpIcon className="input-password-icon" />
              )}
            </div>
          )}
        </div>
      </label>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};
