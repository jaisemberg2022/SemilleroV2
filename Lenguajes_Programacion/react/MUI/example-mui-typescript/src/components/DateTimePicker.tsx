import {useState} from 'react';
import {Stack,TextField}from '@mui/material';
import {DatePicker, TimePicker}from '@mui/lab';

function DateTimePicker() {

  const [selectedDate,setSelectedDate] = useState<Date|null>(null)
  const [selectedTime,setSelectedTime] = useState<Date|null>(null)
  console.log({selectedTime,selectedDate})  
  return (
    <Stack spacing={5} sx={{width:"250px"}}>
        <DatePicker 
        label = "Date picker"
        renderInput={(params)=><TextField{...params} />}
        value={selectedDate}
        onChange={(newValue)=>{
            setSelectedDate(newValue)
        }}
        />

<TimePicker 
        label = "Time picker"
        renderInput={(params)=><TextField{...params} />}
        value={selectedTime}
        onChange={(newValue)=>{
            setSelectedTime(newValue)
        }}
        />
    </Stack>
  )
}

export default DateTimePicker