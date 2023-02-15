import React from 'react';

import {MdFastfood } from 'react-icons/md';
import {RiFootprintFill} from 'react-icons/ri';
import { MdWaterDrop } from 'react-icons/md';
import {GiNightSleep} from 'react-icons/gi';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, Legend,
   DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
import {Grid} from '@syncfusion/ej2-react-grids';
import { Stacked, Pie, BarChart, Button, LineChart, SparkLine } from '../components';
import { dropdownData, data } from '../data/datasource';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Dashboard = () => {
    const { currentColor, currentMode } = useStateContext();
  
    return (
      // cards
      <div class="w-lg px-6 py-6 mx-auto">
      {/* row 1 */}
      <div class="flex flex-wrap -mx-3">

      {/* card1 */}
      <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Calories Taken</p>
                      <h5 class="mb-0 font-bold">
                        300
                      </h5>
                    </div>
                  </div> 
                  <div class="px-3 text-right basis-1/3">
                    <button>
                    <div class="inline-block p-2 w-12 h-12 text-3xl text-white text-center rounded-lg bg-red-500">
                      <MdFastfood/>       
                    </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* card2 */}
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Miles covered</p>
                      <h5 class="mb-0 font-bold">
                        500m
                      </h5>
                    </div>
                  </div> 
                  <div class="px-3 text-right basis-1/3">
                    <button>
                    <div class="inline-block p-2 w-12 h-12 text-3xl text-white text-center rounded-lg bg-yellow-500">
                      <RiFootprintFill/>       
                    </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* card3 */}
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Water Drank</p>
                      <h5 class="mb-0 font-bold">
                        30ltrs
                      </h5>
                    </div>
                  </div> 
                  <div class="px-3 text-right basis-1/3">
                    <button>
                    <div class="inline-block p-2 w-12 h-12 text-3xl text-white text-center rounded-lg bg-green-500">
                      <MdWaterDrop />       
                    </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* card4 */}
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="flex-auto p-4">
                <div class="flex flex-row -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p class="mb-0 font-sans font-semibold leading-normal text-sm">Hours Slept</p>
                      <h5 class="mb-0 font-bold">
                        50hrs
                      </h5>
                    </div>
                  </div> 
                  <div class="px-3 text-right basis-1/3">
                    <button>
                    <div class="inline-block p-2 w-12 h-12 text-3xl text-white text-center rounded-lg bg-blue-500">
                      <GiNightSleep/>       
                    </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        {/* cards row 2 */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl mt-6 ml-3 w-3/5 md:w-720">
          <div className="flex justify-between items-center gap-2 mb-10">
          <ChartComponent primaryXAxis={{valueType: "Category", title:"Day"}} title="Calories Analysis"
             primaryYAxis={{title:"Calories Consumed"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
            <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
              <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName="day" yName="cal" type="Line" name="Day" 
                marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
             </SeriesCollectionDirective>
          </ChartComponent>
          </div>
        </div>

        

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl mt-6 ml-11 w-1/3 md:w-720">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p Class="text-xl font-semibold">Activity</p>
          </div>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white md:h-24 py-2 px-4 
          border border-blue-500 float-right hover:border-transparent rounded">
               Button
          </button>
          
        </div>

      </div>
      </div>
  );
}

export default Dashboard