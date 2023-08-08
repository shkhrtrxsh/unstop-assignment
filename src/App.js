
import Sidebar from '././components/sidebar.jsx'
import Main from '././components/Main.jsx'
function App() {
  return (
    <div className="flex flex-row">
      <div className='w-[140px] h-[992px]'>
        <Sidebar/>
      </div>
     <div className="main-content flex-grow px-2 bg-[#DADCE0]">
        {/* Your main content goes here */}
        <Main/>
      </div>
    </div>
  );
}

export default App;
