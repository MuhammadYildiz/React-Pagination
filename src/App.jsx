import { useState } from "react"
import images from "./Images"

function App() {
    const [item, setItem] = useState(2)
    return (
        <div className="text-center">
            <div className={item > 3 ? "flex-wrap lg:flex-wrap flex justify-center items-center min-h-[60vh] " : "flex justify-center flex-wrap items-center min-h-[60vh] sm:flex-nowrap"}>
                {images.slice(0, item).map((image) => (
                    <div key={image.id} className="bg-fuchsia-300 m-2 sm:mx-10 ">
                        <img src={image.src} alt="" className="w-[200px] h-[150px] sm:w-[500px] sm:h-[350px] p-2 sm:p-5 rounded-3xl" />
                        <h1 className="text-center p-5 text-2xl">{image.name} </h1>
                    </div>
                ))}
            </div>
            <button className="bg-blue-600 px-5 py-3 text-white rounded-2xl hover:bg-black my-3"
                onClick={() => setItem(item + 2)}>
                Click For More Cards
            </button>
        </div>
    )
}
export default App
