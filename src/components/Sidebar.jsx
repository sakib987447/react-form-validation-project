import React from 'react'

const Sidebar = () => {

  const menuItems = [
  {id: "home", label: "Dashboard", icon: "🏠"},
  {id: "forms", label: "Forms", icon: "📄"},
  {id: "users", label: "Users", icon: "👥"},
  {id: "settings", label: "Settings", icon: "⚙️"},
  {id: "help", label: "Help", icon: "❓"},
]
  return (
   <div>
  <aside className="w-64 bg-white border-r shadow-sm" style={{height:830}}>
    <nav className="p-4">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.id}>
            <div className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50 cursor-pointer">
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {item.id === "help" && (
                <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">3</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>

<div className="p-4 border-t mt-4">
  <h3 className="font-medium text-gray-800 mb-2">Storage</h3>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">25 GB of 100 GB used</span>
      <span className="font-medium">25%</span>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 rounded-full h-2"
        style={{ width: "25%" }}
      ></div>
    </div>
  </div>
</div>


  </aside>
</div> 
  )
}

export default Sidebar

