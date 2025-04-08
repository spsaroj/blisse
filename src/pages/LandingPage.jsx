import React from 'react';
import "../components/styles/LandingPage.css";

const LandingPage = () => {

    const featuredCandles = [
        {
            id: 1,
            name: "Lavender Dreams",
            description: "Soothing lavender scent to calm your senses",
            price: 14.99,
            image: "/images/lavender-candle.jpg"
        },
        {
            id: 2,
            name: "Woodland Retreat",
            description: "Earthy pine and cedar forest fragrance",
            price: 16.99,
            image: "/images/woodland-candle.jpg"
        },
        {
            id: 3,
            name: "Coastal Breeze",
            description: "Fresh ocean and sea salt aromatherapy",
            price: 15.99,
            image: "/images/coastal-candle.jpg"
        },
        {
            id: 4,
            name: "Warm Vanilla Comfort",
            description: "Rich, sweet vanilla bean essence",
            price: 13.99,
            image: "/images/vanilla-candle.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <header className="bg-amber-50 py-20 text-center">
                <h1 className="text-4xl font-bold text-amber-900 mb-4">Handcrafted Candles for Every Mood</h1>
                <p className="text-xl text-amber-700 mb-8">Discover our artisan candles that transform your space</p>
                <div className="flex justify-center mb-8">
                    <img
                        src="../src/assets/logo.png"
                        alt="Hoarding Board"
                        className="w-full max-w-3xl rounded-lg shadow-lg"
                    />
                </div>
                <button
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-all"
                >
                    Shop Now
                </button>
            </header>

            {/* Featured Candles */}
            <section id="products" className="container mx-auto py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Our Featured Collection</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredCandles.map((candle) => (
                        <div
                            key={candle.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
                        >
                            <img
                                src={candle.image}
                                alt={candle.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-amber-900">{candle.name}</h3>
                                <p className="text-amber-700 mb-2">{candle.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-amber-800">${candle.price}</span>
                                    <button
                                        onClick={() => alert(`View details for ${candle.name}`)}
                                        className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-amber-100 py-8">
                <div className="container mx-auto text-center">
                    {/* <p className="text-amber-800">© 2024 Candlelight Creations. All Rights Reserved.</p> */}
                    <div className="mt-4 space-x-4">
                        <a href="#privacy" className="text-amber-700 hover:text-amber-900 transition-colors">Privacy Policy</a>
                        <a href="#terms" className="text-amber-700 hover:text-amber-900 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
