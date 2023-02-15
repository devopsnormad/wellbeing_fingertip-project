import { useState } from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ScheduleComponent, Day, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { extend } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { enableRipple } from '@syncfusion/ej2-base';
import { Header } from '../components';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineSearch } from "react-icons/ai";
import list from "../list.json";
enableRipple(true);


const Activity = () => {

  const time = (new Date('8/3/2017 10:00 AM'));
  const minTime = (new Date('8/3/2017 12:00 AM'));
  const maxTime = (new Date('8/3/2017 11:00 PM'));
  const  [isOpen, setIsOpen] = useState (false);
  return (
    <div className=" md:m-10 mt-24 p-2 row-md:p-10 bg-white rounded-3xl">
    <div class="ml-24 mt-4">
    <Header category="Activity" title="What did you do"/>
    </div>
    
    <div class=" ml-24 flex flex-row items-center w-3/4 space-x-4"> 
    <TimePickerComponent id="timepicker" placeholder='Pick a Time'/>
    <button onClick={() => setIsOpen ((prev) => !prev)}
    class="bg-white p-4 h-4 w-full flex items-center justify-between font-semibold text-xs
    rounded-lg tracking-wider border-1 border-gray-200 active:border-gray-400 duration-300 active:text-white">
        Select Activity
        {!isOpen?(
          <AiOutlineCaretDown className="h-8"/>
        ):(
          <AiOutlineCaretUp className="h-8"/>
        ) }
    </button>
      {isOpen &&(
        <div className="bg-white absolute top-20 flex flex-col item-start rounded-lg p-2 w-full">
           {list.map((Item, i)=> (
            <div className="flex w-full hover:bg-gray-200 cursor-pointer rounded-r-lg border-l-transparent">
                <h3>{Item.Activity}</h3>
            </div>
           ))}
        </div>
      )}
    </div>    
      
          <div class="flex flex-col items-left">
            <h2 class="ml-24 mt-8 font-semibold text-lg mr-auto"> Symptoms</h2>
            <div class="w-full mt-1"></div>
            <div class="mt-5">
              <div class="form">
                <div class="ml-24 w-3/4 mb-1 text-xs space-y-2">
                  <label class="font-semibold text-gray-600 py-2">Description</label>
                  <textarea class="h-28 w-full appearance-none block bg-gray-50 text-gray-600 border rounded-lg
                  py-4 px-4 focus:outline-none"></textarea>
                  <p>Remaning characters</p>
                </div>
                <div class="mt-5 text-right flex flex-col-reverse md:space-x-3 md:block mr-">
                  <button class="mb-2 px-5 py-2 text-sm shadow-sm 
                  font-medium tracking-wider border text-gray-600 
                  rounded-full 
                  hover:shadow-lg hover:bg-gray-100 
                  focus:outline-none bg-white">
                  Cancel</button>

                  <button class="mb-2 px-5 py-2 
                  text-sm shadow-sm font-medium 
                  tracking-wider border text-gray-600 
                  rounded-full hover:shadow-lg 
                  hover:bg-gray-100 focus:outline-none bg-green-400">
                  Add Activity</button>
                </div>
                
              </div>
            </div>
          </div>
    
    
  </div>
  )
}

export default Activity