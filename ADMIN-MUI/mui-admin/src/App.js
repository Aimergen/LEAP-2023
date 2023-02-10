
import './App.css';
import { Navbar ,MiniVariantDrawer} from './components';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';

const isWeekend = (date) => {

  const day = date.day();

  return day === 0 || day === 6;
};

function App() {
  const [value, setValue] = useState(dayjs('2022-04-07'));

  return (
    <>
      {/* <Navbar /> */}
      <MiniVariantDrawer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </MiniVariantDrawer>
    </>
  );
}

export default App;
