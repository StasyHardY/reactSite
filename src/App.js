import { Calendar } from "./components/Calendar";
import { SelectInput } from "./components/SelectInput";
import { SideBar } from "./components/SideBar";
import { Table } from "./components/Table";

function App() {
  return (
    <div classNameName="App">
      <div className="min-h-screen flex flex-row bg-gray-50 mx-auto ">
        <div className="flex flex-col w-72 bg-white shadow-md   px-6 py-2 ">
          <div className="flex items-center flex-col justify-center h-40 ">
            <h1 className="text-3xl uppercase font-bold py-8 text-black font-mono ">Logo</h1>
              <button className="flex flex-row justify-center items-center h-12 hover:bg-gray-400   bg-slate-800  rounded w-48  ">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 11C0 9.89543 0.895431 9 2 9H11H20C21.1046 9 22 9.89543 22 11C22 12.1046 21.1046 13 20 13H2C0.89543 13 0 12.1046 0 11Z" fill="white"/>
        <path d="M9 2C9 0.89543 9.89543 0 11 0C12.1046 0 13 0.895431 13 2V20C13 21.1046 12.1046 22 11 22C9.89543 22 9 21.1046 9 20V2Z" fill="white"/>
      </svg>
    </button>
  </div>   
<SideBar/>
</div>
  
  <div className="px-8  py-8 w-full">
    <div className="flex">
      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200   rounded-l-md ">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.827 18.98L14.9656 14.1197C16.2697 12.6208 17.0592 10.6652 17.0592 8.52772C17.0592 3.82262 13.2313 0 8.52961 0C3.82346 0 0 3.82705 0 8.52772C0 13.2284 3.8279 17.0554 8.52961 17.0554C10.6676 17.0554 12.6236 16.2661 14.1229 14.9623L18.9843 19.8226C19.0996 19.9379 19.2548 20 19.4056 20C19.5564 20 19.7117 19.9423 19.827 19.8226C20.0577 19.592 20.0577 19.2106 19.827 18.98ZM1.19317 8.52772C1.19317 4.48337 4.48436 1.19734 8.52517 1.19734C12.5704 1.19734 15.8572 4.4878 15.8572 8.52772C15.8572 12.5676 12.5704 15.8625 8.52517 15.8625C4.48436 15.8625 1.19317 12.5721 1.19317 8.52772Z" fill="#82868C"/>
        </svg>
      </span>
  <input type="text"  className="rounded-none rounded-r-lg bg-gray-200     w-3/4 text-sm border-gray-200 py-4 h-14 focus:outline-none  " placeholder="Найти коносамент, груз, заказ и др."/>
  
    </div>

    <div class="w-96 py-4  flex flex-col  ">
    <label  class=" mb-2 hover:underline font-xs text-gray-500 flex flex-row items-center "> 
    <svg class="mr-2" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1L1 5L5 9" stroke="#ACACAC"/>
</svg>

    Вернуться на главную</label>
      <label  class="block mb-2 text-xl font-medium text-black ">Все грузы</label>
        
        
    </div>
<Table/>
<div class="footer py-2 mt-12 flex flex-col ">
© 2022 ООО “Компания”, Все права защищены.
<ul class="flex flex-row mt-4  ">
  <li>
    <a class=" mt-6 text-sm text-blue-500 " href={(e) => e.preventDefault()}>Вопрос-ответ</a>
  </li>
  <li>
    <a class=" mt-6 ml-12 text-sm text-blue-500 " href={(e) => e.preventDefault()}>Политика конфиденциальности</a>
  </li>
  <li>
    <a class=" mt-6 ml-12 text-sm text-blue-500 " href={(e) => e.preventDefault()}>История обновлений</a>
  </li>

</ul>
</div>

  
</div>

<div className="absolute top-0 right-0 text-gray-600 mt-1 flex flex-row items-center justify-center  ">Менеджер
  <div>
      <button 
        type="button"
        className="ml-4 my-8 h-12 w-12 overflow-hidden cursor-default hover:bg-slate-500 rounded-full text-white bg-slate-400">ИИ
      </button>

      <button 
          type="button"
          className=" mx-8 my-8 h-12 w-12 overflow-hidden cursor-default hover:bg-slate-500 rounded-full text-white bg-slate-400">ТТ
      </button>
    </div>
</div> 
</div>
</div>
  );
}

export default App;
