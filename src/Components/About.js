const About=()=>{
    return(
        <div className="max-w-3xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
            <p className="text-lg text-gray-600 mb-6">
                Welcome to <span className="font-semibold text-orange-500">Our WebPage</span>, a modern food delivery app designed to make your cravings just a click away. 
                Our mission is simple: to make ordering food fast, easy, and affordable, especially for students who value both time and taste.
            </p>
            
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 text-left">
                <li>Instant access to your favorite restaurants via Swiggy’s live API</li>
                <li>Clean and responsive UI built with React and Tailwind CSS</li>
                <li>Real-time restaurant details, ratings, and delivery times</li>
                <li>Optimized for students who want quick and budget-friendly meals</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-6">
                Unlike traditional apps, Our WebPage focuses on speed and simplicity. 
                No clutter, no confusion — just a smooth experience to get your food delivered in the shortest time possible.
            </p>
            
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Built With Passion</h2>
            <p className="text-lg text-gray-600 mb-6">
                This project is made using <span className="font-semibold">React</span> for seamless interactivity, 
                <span className="font-semibold"> Tailwind CSS</span> for a modern design, and Swiggy’s API for real-time data. 
                Our goal was to create a practical, real-world clone while showcasing front-end development skills.
            </p>
            
            <p className="text-gray-500 italic">Enjoy your meal, faster than ever with Our WebPage!</p>
        </div>

    )
}

export default About;