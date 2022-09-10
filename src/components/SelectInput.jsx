import React from 'react'

export const SelectInput = ({value}) => {
  return (
   <>
   
   
   <select id="countries" class="bg-white shadow-md text-black text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 ml-2 dark:placeholder-gray-400  dark:focus:ring-gray-200 dark:focus:border-gray-500" >

     <option selected>{value}</option>
     <option value="1">Назначен ответственный менеджер</option>
     <option value="2">Расчет стоимости заказа</option>
     <option value="3">Расчитана стоимость заказа</option>
     <option value="1">Рассчитана стоимость заказа</option>
     <option value="2">Груз принят в порту отправления</option>
     <option value="3">Груз размещен на судне</option>
   
                   </select>
                   </>
  )
}
