import image from "../src/assets/students.jpeg"

function App() {
  return (
    <div className="
      bg-blue-500 
      md:bg-green-500 
      flex 
      justify-center 
      items-center 
      h-screen"
    >
      <div className="bg-red-100 w-40 h-40 rounded-[50%]">
        IMAGE
      </div>
      <img className="w-40 h-40 rounded-full" src={image} alt="Rounded avatar"></img>
    </div>
  )
}

export default App
