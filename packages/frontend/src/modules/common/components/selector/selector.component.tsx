import { IBasicProps } from '../../types/props.types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TParcelSortQuery } from '../../types/parcel.types';

interface IProps extends IBasicProps {
  sortValues: Array<string>;
  value: string;
  onChange: (value: TParcelSortQuery) => void;
}

export const SelectorComponent = ({ sortValues, className, onChange, value }: IProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as TParcelSortQuery);
  };
  return (
    <div className={className}>
      <div className="selector-container">
        <FormControl
          variant="standard"
          className="select-form"
          sx={{ m: 1, minWidth: 120, bgcolor: 'transparent', color: 'white' }}
        >
          <InputLabel id="select-standard-label">Sort by</InputLabel>
          <Select
            labelId="select-standard-label"
            id="select-standard"
            value={value}
            onChange={handleChange}
            label="Sort by"
            className="selector-selected"
          >
            {sortValues.map((value) => {
              return <MenuItem value={value}>{value}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
