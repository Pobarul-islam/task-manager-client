import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calendar = () => {
    return (
        <div>
           <div class="hero">
  <div class="hero-content flex-col lg:flex-row-reverse">
   
    <div>
    <DayPicker />
    </div>
  </div>
</div>
        </div>
    );
};

export default Calendar;