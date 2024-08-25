import { IBasicProps } from '../../types/props.types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IProps extends IBasicProps {
  values: Array<string>;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export const SelectorComponent = ({ values, className, onChange, value, label }: IProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };
  return (
    <div className={className}>
      <div className="selector-container">
        <FormControl
          variant="standard"
          className="select-form"
          sx={{ m: 1, minWidth: 120, bgcolor: 'transparent', color: 'white' }}
        >
          <InputLabel id="select-standard-label">{label}</InputLabel>
          <Select
            labelId="select-standard-label"
            id="select-standard"
            value={value}
            onChange={handleChange}
            label={label}
            className="selector-selected"
          >
            {values.map((listValue, index) => {
              return (
                <MenuItem value={listValue} key={'menu-item' + listValue + index}>
                  {listValue as string}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
