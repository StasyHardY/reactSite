import React from 'react'
import Accordion from './Acordion';
import { TableHeader } from './TableHeader';


export const Table = () => {
  return (
   <table className='bg-white'>
      <TableHeader/>
         <tbody  >
            <Accordion 
               number={2887}
               type={'Контейнер'} 
               isActive={false} 
               mainOrder={'4329'} 
               owner={'ООО “Компания”'} 
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'} 
            />

            <Accordion 
               number={2886} 
               type={'Генеральный груз'} 
               isActive={false}  
               mainOrder={'4329'} 
               owner={'ООО “Компания”'}
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'}       
            />
            <Accordion 
               number={2887}
               type={'Контейнер'} 
               isActive={false} 
               mainOrder={'4329'} 
               owner={'ООО “Компания”'} 
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'} 
            />
            
            <Accordion 
               number={2886} 
               type={'Генеральный груз'} 
               isActive={false} 
               mainOrder={'4329'} 
               owner={'ООО “Компания”'}
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'}       
            />
            <Accordion 
               number={2887}
               type={'Контейнер'} 
               isActive={false} 
               mainOrder={'4329'} 
               owner={'ООО “Компания”'} 
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'} 
            />
            
            <Accordion 
               number={2886} 
               type={'Генеральный груз'} 
               isActive={false}  
               mainOrder={'4329'} 
               owner={'ООО “Компания”'}
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'}       
            />
            <Accordion 
               number={2887}
               type={'Контейнер'} 
               isActive={false}  
               mainOrder={'4329'} 
               owner={'ООО “Компания”'} 
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'} 
            />
            
            <Accordion 
               number={2886} 
               type={'Генеральный груз'} 
               isActive={false} 
               mainOrder={'4329'} 
               owner={'ООО “Компания”'}
               numberOfAct={'25499-Т'} 
               numberBill={'440038990'} 
               deliveryDate={'29.06.2021'}       
            />
            
          </tbody>
        </table>
    



  )
  
}
