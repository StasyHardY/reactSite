import { useState } from "react";
import { SelectInput } from "./SelectInput";

const Accordion = ({ number, type, mainOrder, owner, numberOfAct, numberBill,  deliveryDate, value}) => {
  const [isActive, setIsActive] = useState(false);
  const valueInput = null
   return (
     <>
     <tr class={`  border-b   hover:bg-gray-100 hover:opacity-90 cursor-pointer w-4/12 `} onClick={() => setIsActive(!isActive)}   >
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center">
								    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
								    <label for="checkbox-all-search" class="sr-only">checkbox</label>
							    </div>
						    </th>
              </td>

              <td class="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
                {number}
              </td>
              <td class="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
                {type}
              </td>
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {mainOrder}
              </td>
              <td class="text-sm text-black font-normal px-6 py-4 whitespace-nowrap">
                {owner}
              </td>
              <td class="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
                {numberOfAct}
              </td>
              <td class="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
                {numberBill}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {deliveryDate}
              </td>
              
              <div class=" flex  items-center justify-center px-4 py-4 ">
                {isActive 
                ? 
                <div class="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 1L9 5" stroke="#141414"/>
                  </svg> 
                </div>
                : 
                <div class="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="#141414"/>
                  </svg>

                </div>
                }
              </div>
      </tr>
             
            {isActive 
            && 
              <div>
                <div class=" w-24 mt-4   h-16     flex flex-row items-center justify-between ">
                  <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                    <th scope="col" class="p-4">
							        <div class="flex items-center ju"></div>
						        </th>
                  </td>
                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                  Статус груза
                </td>
                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                  <div class="flex justify-center ml-28 ">
                    <div class=" xl:w-48 min-w-24">
                      <SelectInput value="Новый"/>
                    </div>
                  </div>
                </td>
							</div>
            <div class=" w-24   h-12       flex flex-row items-center justify-between ">
              <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						    </th>
              </td>

                <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                  Дата поступления груза в порт
                </td>
                <td class="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
                  29.06.2021
                </td>
                <td class="text-sm text-gray-700 font-light px-6 ml-32 py-4 whitespace-nowrap">
                  Закрепленный заказ
                </td>
                <td class="text-sm text-blue-500 font-medium px-6 ml-24 py-4 whitespace-nowrap">
                  Заказ №4329
                </td>

            </div>
              <div class=" w-24   h-12       flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                  <th scope="col" class="p-4">
							      <div class="flex items-center ju"></div>
						      </th>
                </td>

                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                  Менеджер
                </td>
                <td class="text-sm text-black font-medium px-5 ml-32 py-4 whitespace-nowrap">
                  Иванов Иван Иванович
                </td>
                <td class="text-sm text-gray-700 font-light px-6 ml-10 py-4 whitespace-nowrap">
                  Доставка груза до порта отправления
                </td>
                <td class="text-sm text-black font-medium px-4  py-4 whitespace-nowrap">
                  Автомобиль
                </td>

              </div>
            <div class=" w-24   h-12       flex flex-row items-center justify-between ">
              <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						    </th>
              </td>

                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                  Грузоотправитель
                </td>
                <td class="text-sm text-black font-medium px-6 ml-20 py-4 whitespace-nowrap">
                  ООО “Компания”
                </td>

              </div>
            <div class=" w-24   h-12       flex flex-row items-center justify-between ">
              <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						    </th>
              </td>

                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                  Тип контейнера
                </td>
                <td class="text-sm text-black font-medium px-5 ml-24 py-4 whitespace-nowrap">
                  40' High Cube
                </td>
                <td class="text-sm text-gray-700 font-light px-6 ml-28 py-4 whitespace-nowrap">
                  Масса, тн
                </td>
                <td class="text-sm text-black font-medium px-10 ml-36 py-4 whitespace-nowrap">
                  5,355
                </td>

            </div>
              <div class=" w-24   h-12       flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                  <th scope="col" class="p-4">
							<div class="flex items-center ju"></div>
						</th></td>
                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                Общий объем, м3
              </td>
              <td class="text-sm text-black font-medium px-6 ml-20 py-4 whitespace-nowrap">
                43,481
              </td>
              <td class="text-sm text-gray-700 font-light px-9 ml-36 py-4 whitespace-nowrap">
                Длина, метры
              </td>
              <td class="text-sm text-black font-medium px-4 ml-32 py-4 whitespace-nowrap">
              1 2,844
              </td>
              
              </div>


            <div class=" w-24   h-12       flex flex-row items-center justify-between ">
              <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						    </th>
              </td>

              <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                Высота, метры   
              </td>
              <td class="text-sm text-black font-medium px-8 ml-24 py-4 whitespace-nowrap">
                43,481
              </td>
              <td class="text-sm text-gray-700 font-light px-10 ml-32 py-4 whitespace-nowrap">
                Ширина, метры
              </td>
              <td class="text-sm text-black font-medium px-5 ml-28 py-4 whitespace-nowrap">
                3,620
              </td>
            </div>
              <div class=" w-24   h-12       flex flex-row items-center justify-between ">
              <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						    </th>
              </td>
              <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                Описание груза   
              </td>
              <td class="text-sm text-black font-medium px-9 ml-20 py-4 whitespace-nowrap">
                Описание
              </td>
              <td class="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						    </th>
              </td>
            
            </div>
            <div class=" w-24 h-12 flex flex-row items-center justify-between ">
              <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						    </th>
              </td>
              <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                ТМЦ  
              </td>
              <td class="text-sm text-black font-medium px-10 ml-36 py-4 whitespace-nowrap">
                Опора промежуточная
              </td>
              <td class="text-sm text-gray-700 font-light px-6 ml-6 py-4 whitespace-nowrap">
                Фрахтовая единица
              </td>
              <td class="text-sm text-black font-medium px-4 ml-28 py-4 whitespace-nowrap">
                5,355 (Масса, тн)
              </td>
            </div>

              <div class=" w-24 h-12 flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                  <th scope="col" class="p-4">
							      <div class="flex items-center ju"></div>
						      </th>
                </td>
              <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                Расположение груза в порту 
              </td>
              <td class="text-sm text-black font-medium px-8 ml-2 py-4 whitespace-nowrap">
                3 скл причал
              </td>
              </div>

              <div class=" w-24 h-12 flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">  
                 <th scope="col" class="p-4">
							    <div class="flex items-center ju"></div>
						     </th>
                </td>
                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                  Файл транспортной накладной
                </td>
              </div>

              <div class=" w-24  h-12flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                  <th scope="col" class="p-4">
							      <div class="flex items-center ju  "></div>
				          </th>
                </td>
            <td class="text-sm w-12 text-gray-700 font-light px-6 py-4 whitespace-nowrap">
              <div class=" xl:w-fit min-w-24">
                <div class="form-select appearance-none
      flex flex-row items-center justify-between
      w-full
      px-3
      py-3
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
        Накладная_для_Умки (1).doc
        <td class="text-sm ml-12 text-gray-700 font-light  whitespace-nowrap">
        от 24.10.2021
              </td>
              <button class="bg-slate-800  rounded-lg text-white items-center text-center ml-12 py-1 px-4">Заказ №4329</button>
  
<div class="relative  w-80 flex flex-row items-center justify-center text-center ">

              <a class=" text-sm hover:bg-gray-100  hover:border mr-4 absolute right-0  text-center" href='#' download>            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.61536 8.04492C9.56452 8.04516 9.51423 8.05561 9.46736 8.07565C9.4205 8.09569 9.37798 8.12494 9.34224 8.16173C9.30651 8.19851 9.27825 8.24211 9.2591 8.29002C9.23995 8.33792 9.23028 8.38921 9.23064 8.44092V10.8142C9.23064 11.0329 9.05824 11.2102 8.84591 11.2102H1.15327C1.10243 11.2099 1.05214 11.1995 1.00528 11.1794C0.95841 11.1594 0.915892 11.1301 0.880155 11.0934C0.844418 11.0566 0.816165 11.013 0.797014 10.9651C0.777863 10.9172 0.76819 10.8659 0.768548 10.8142V8.44092C0.768907 8.38928 0.759263 8.33808 0.740169 8.29023C0.721074 8.24238 0.692902 8.19883 0.657261 8.16205C0.621621 8.12528 0.579209 8.09601 0.532448 8.07591C0.485688 8.05582 0.435493 8.04528 0.384732 8.04492C0.333894 8.04516 0.283603 8.05561 0.236738 8.07565C0.189872 8.09569 0.147354 8.12494 0.111617 8.16173C0.0758802 8.19851 0.0476268 8.24211 0.0284755 8.29002C0.00932425 8.33792 -0.000348955 8.38921 9.61561e-06 8.44092V10.8142C9.61561e-06 11.4696 0.5163 12.0013 1.15327 12.0013H8.84591C9.48288 12.0013 10.0001 11.4696 10.0001 10.8142V8.44092C10.0004 8.38921 9.99077 8.33792 9.97162 8.29002C9.95247 8.24211 9.92421 8.19851 9.88848 8.16173C9.85274 8.12494 9.81022 8.09569 9.76335 8.07565C9.71649 8.05561 9.6662 8.04516 9.61536 8.04492Z" fill="#606B87"/>
<path d="M7.18621 6.84096C7.11489 6.76937 7.01873 6.72923 6.91854 6.72923C6.81834 6.72923 6.72218 6.76937 6.65086 6.84096L5.38418 8.14435V0.396002C5.38454 0.344284 5.37487 0.293003 5.35572 0.245094C5.33656 0.197185 5.30831 0.15359 5.27257 0.116806C5.23684 0.0800211 5.19432 0.0507695 5.14745 0.0307262C5.10059 0.0106829 5.0503 0.000241525 4.99946 0C4.94862 0.000241525 4.89833 0.0106829 4.85146 0.0307262C4.8046 0.0507695 4.76208 0.0800211 4.72634 0.116806C4.69061 0.15359 4.66235 0.197185 4.6432 0.245094C4.62405 0.293003 4.61438 0.344284 4.61474 0.396002V8.14435L3.34805 6.84004C3.31199 6.80393 3.26921 6.77549 3.22223 6.75638C3.17524 6.73728 3.12499 6.72788 3.0744 6.72873C3.0238 6.72959 2.97388 6.74069 2.92755 6.76139C2.88122 6.78208 2.8394 6.81196 2.80454 6.84927C2.73509 6.92342 2.69635 7.02192 2.69635 7.12435C2.69635 7.22677 2.73509 7.32527 2.80454 7.39942L4.72816 9.37759C4.76364 9.41443 4.80599 9.4437 4.85273 9.46368C4.89947 9.48366 4.94967 9.49395 5.00037 9.49395C5.05107 9.49395 5.10126 9.48366 5.148 9.46368C5.19474 9.4437 5.23709 9.41443 5.27258 9.37759L7.19619 7.39942C7.26702 7.32351 7.30568 7.2223 7.30381 7.11765C7.30194 7.013 7.2597 6.91329 7.18621 6.84004V6.84096Z" fill="#606B87"/>
</svg></a>

<a class="absolute right-0 items-center hover:border-red-400 hover:border " href='#' download>            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L11 11M1 11L11 1" stroke="#FF0000"/>
</svg>
</a>
</div>
                </div>
              </div>
            </td>
              </div>
                <div class=" w-24 h-12 flex flex-row items-center justify-between ">
                  <td class="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <th scope="col" class="p-4">
							        <div div class="flex items-center ju"></div>
						        </th>
                  </td>
                  <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                    Файл приемного акта
                  </td>
                </div>
              <div class=" w-24 h-12 flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <th scope="col" class="p-4">
							      <div div class="flex items-center ju"></div>
						      </th>
                </td>
                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                
                <button class="bg-white hover:border border-orange-400  rounded-lg text-black shadow-md text-md font-normal  text-center  py-4 px-4 flex flex-row items-center justify-center"> 
                <svg class="mr-2" width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.68798 0.5C6.89602 0.5 6.10449 0.817111 5.51141 1.44969L1.2071 6.03898C-0.402368 7.75553 -0.402368 10.515 1.2071 12.2316C1.25638 12.2844 1.3164 12.3266 1.38225 12.3557C1.38314 12.3561 1.38449 12.3564 1.38538 12.3568C3.00695 13.9098 5.5365 13.8925 7.09356 12.2316L10.1212 9.00264C10.1727 8.95139 10.2131 8.89032 10.2408 8.82295C10.2682 8.75558 10.282 8.68333 10.2811 8.61048C10.2802 8.53764 10.265 8.4657 10.2363 8.39892C10.2072 8.33214 10.1656 8.27192 10.1132 8.22181C10.0608 8.17169 9.99939 8.13275 9.93175 8.10726C9.86411 8.08177 9.79244 8.07023 9.72032 8.0734C9.6482 8.07657 9.57742 8.09431 9.51247 8.1256C9.44752 8.15693 9.38929 8.20112 9.34136 8.25563L6.31369 11.4845C5.10334 12.7755 3.19867 12.7755 1.98787 11.4845C0.777521 10.1935 0.777521 8.07702 1.98787 6.78599L6.2913 2.19671C7.07879 1.35717 8.2981 1.35717 9.08514 2.19671C9.87263 3.03615 9.87263 4.42171 9.08514 5.26117L5.16829 9.43872C4.80321 9.82762 4.27061 9.8273 3.90598 9.43872C3.5418 9.05018 3.5418 8.39588 3.90598 8.0073L7.05683 4.64681C7.10834 4.59556 7.14865 4.53448 7.17598 4.46712C7.2033 4.39975 7.21719 4.32749 7.21629 4.25465C7.21584 4.1818 7.20063 4.10986 7.17151 4.04308C7.14284 3.9763 7.10117 3.91609 7.04876 3.86597C6.99635 3.8159 6.93454 3.77692 6.8669 3.75143C6.7997 3.72594 6.72759 3.7144 6.65547 3.71757C6.5838 3.72073 6.51302 3.73848 6.44807 3.76977C6.38267 3.8011 6.32444 3.84528 6.27696 3.89979L3.12521 7.26028C2.36146 8.07453 2.36146 9.37149 3.12521 10.1857C3.17627 10.24 3.23764 10.2829 3.30573 10.312C4.08023 10.9659 5.23682 10.9437 5.94816 10.1857L9.86545 6.00819C11.0028 4.79517 11.0194 2.89677 9.97564 1.62583C9.95056 1.56048 9.91293 1.50066 9.86545 1.44969C9.27192 0.817111 8.47995 0.5 7.68798 0.5Z" fill="#141414"/>
</svg>

                Добавить
                  </button> 
                   
                
                  
                  
                </td>
              </div>

              <div class=" w-24 h-12 flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap   text-sm font-medium text-gray-900">
                  <th scope="col" class="p-4">
                    <div class="flex items-center ju"></div>
                  </th>
                </td>
                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">
                  Номер приемного акта
                </td>
              </div>


              <div class=" w-24 h-12 flex flex-row items-center justify-between ">
                <td class="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <th scope="col" class="p-4">
							      <div class="flex items-center ju"></div>
						      </th>
                </td>
                <td class="text-sm text-gray-700 font-light px-6 py-4 whitespace-nowrap">

                  <button class="bg-white  hover:border border-orange-400 rounded-lg text-black shadow-md items-center text-center  py-4 px-4">Добавить
                  </button> 
                  <button class="bg-white ml-4 hover:border border-orange-400  rounded-lg text-black shadow-md items-center text-center  py-4     px-4">Разделить груз
                  </button>
                </td>
              </div>
        </div>   
}
</>
   );
 };
  
 export default Accordion;

 