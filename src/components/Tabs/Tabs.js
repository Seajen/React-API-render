export default function Tabs({tabs, selectedTab}) {
   return (
       <div  style={{display: 'flex'}}>
          {tabs.map(tab =>
              <button
                  key={tab.title}
                  style={{
                     flex: 1 ,
                     height: '50px',
                     background: selectedTab === tab.title ? 'green' : 'lightgrey'}
                  }
                  onClick={tab.clickHandler}
              >
                 {tab.title}
              </button>)}
       </div>
   )
}