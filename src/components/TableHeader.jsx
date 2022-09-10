import React from 'react'

export const TableHeader = () => {
  return (
  <thead class="border-b">
   <tr>
     <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
     <th scope="col" class="p-4">
							<div class="flex items-center">
								<input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
								<label for="checkbox-all-search" class="sr-only">checkbox</label>
							</div>
						</th>
     </th>
     <th scope="col" class="text-sm font-medium text-gray-500 px-6 py-4 text-left">
     Номер груза
     </th>
     <th scope="col" class="text-sm font-medium text-gray-500 px-6 py-4 text-left">
     Тип
     </th>
     <th scope="col" class="text-sm font-medium text-gray-500 px-6 py-4 text-left">
     Закрепленный заказ 
     </th>
     <th scope="col" class="text-sm font-medium text-gray-500 px-6 py-4 text-left">
     Грузоотправитель
     </th>
     <th scope="col" class="text-sm font-medium text-gray-500 px-6 py-4 text-left">
     Номер приемного акта
     </th>
     <th scope="col" class="text-sm font-medium text-gray-500 px-6 py-4 text-left">
     Номер транспортной/ЖД накладной
     </th>
     <th scope="col" class="text-sm font-medium text-gray-500 px-6 py-4 text-left">
     Дата поступления в порт
     </th>
   </tr>
 </thead>
  )
}
