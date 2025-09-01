const Contact=()=>{
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl m-4">Contact Page</h1>
            <h1>Write your Message to Me</h1>
            <form className="flex flex-col border p-8 m-4 mb-10 rounded-2xl  shadow-2xl border-white">
                <input className="border border-black m-2 p-1 rounded-md bg-white" type="text" placeholder="Enter Your Name"/>
                <input className="border border-black m-2 p-1 rounded-md bg-white" type="email" placeholder="Enter Your Email"/>
                <textarea className="border border-black m-2 p-1 rounded-md bg-white" placeholder="Enter Your Message"></textarea>
                <button className="bg-green-500 p-1 m-2 rounded-lg text-white">Submit</button>  
            </form>
            <div>
                <h1 className="font-bold border-b-2 mb-3 text-gray-800">You can mail at :</h1>
                <ul>
                    <li><a href="mailto:ashish.23418@knit.ac.in" className="hover:underline text-gray-600 hover:text-blue-700">✉ Write Mail</a></li>
                    
                </ul>
            </div>

        </div>
    )
}

export default Contact;