import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function LibertyCity() {
    return (
        <>
            <Header />
            <div>
                <main className="bg-black text-white min-h-screen mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* LEFT COLUMN (Sticky Cover + Buy Button) */}
                        <div className="md:sticky md:top-20 self-start space-y-6">
                            <h1 className="text-2xl sm:text-3xl font-bold">Grand Theft Auto: Liberty City Cheat Codes</h1>
                            <a
                                href="https://apps.apple.com/us/app/cheat-codes-for-gta-5-freeflow/id6749615212"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg"
                            >
                                Get the App
                            </a>
                            <img
                                src="/image2.jpg"
                                alt="GTA San Andreas Cover"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>

                        {/* RIGHT COLUMN (Scrolls) */}
                        <div className="space-y-12">
                            {/* Description */}
                            <section className="mt-8">
                                <h4 className="text-lg sm:text-xl font-semibold mb-4">Game Description</h4>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    The city is divided into three main islands — Portland, Staunton Island, and Shoreside Vale — each with its own gangs, businesses, and secrets. Corrupt officials, dangerous mob bosses, and ruthless criminals rule the streets, where every decision can mean the difference between survival and downfall.                                    <br />
                                    <br />
                                    You play as a silent protagonist who, after being betrayed and left for dead, must climb the criminal ladder and take revenge while navigating through a city filled with gang wars, shady deals, car chases, and chaos on every corner.                                    <br />
                                    <br />
                                    Liberty City is alive, breathing, and unforgiving — a place where crime never sleeps, and loyalty is always in question.                                </p>
                            </section>

                            {/* Screens */}
                            <section>
                                <h4 className="text-lg sm:text-xl font-semibold mb-4">Screens</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bc52e237a5eada7c42733c49d21c5e47.jpg" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4b9149b6fdec193d550affc273730aa.jpg" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/84e820a5d826a670ba41bce592803aee.jpg" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c1ff72d9bf7aadf665fad72c7820a77.jpg" />
                                </div>
                            </section>

                            {/* Specifications */}
                            <section>
                                <h4 className="text-lg sm:text-xl font-semibold mb-4">Specifications</h4>
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                                    <dt className="font-medium">Developer</dt>
                                    <dd className="text-gray-300">Rockstar North</dd>

                                    <dt className="font-medium">Platform</dt>
                                    <dd className="text-gray-300">
                                        PS4, Xbox One, PC, PS3, Xbox 360, Mac, iOS, PS2, Android, Xbox, Kindle, Windows Phone
                                    </dd>

                                    <dt className="font-medium">Release Date</dt>
                                    <dd className="text-gray-300">May 20, 2002</dd>

                                    <dt className="font-medium">Rating</dt>
                                    <dd className="text-gray-300">
                                        M – Blood and Gore, Intense Violence, Strong Language, Strong Sexual Content, Use of Drugs
                                    </dd>
                                </dl>
                            </section>
                        </div>
                    </div>
                </main >

                {/* CHEATS SECTION */}
                < section className="bg-black text-white min-h-screen grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 px-4 sm:px-6 md:px-12 py-12" >
                    {/* LEFT COLUMN (keeps empty space so cheats align with poster above) */}
                    < div className="hidden lg:block" ></div >

                    {/* RIGHT COLUMN (Cheats Content) */}
                    < div className="space-y-12" >
                        <h5
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 
             bg-gradient-to-r from-orange-500 via-red-600 to-red-800 
             bg-clip-text text-transparent"
                        >
                            GTA Liberty City cheats for PC, PlayStation, Xbox, and Mobile
                        </h5>

                        {/* Liberty City Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Liberty City (GTA III) cheats for PC
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Full Health –</b> GESUNDHEIT</li>
                                <li><b>Full Armor –</b> TORTOISE</li>
                                <li><b>Weapons –</b> GUNSGUNSGUNS</li>
                                <li><b>Money $250,000 –</b> IFIWEREARICHMAN</li>
                                <li><b>Lower Wanted Level –</b> NOPOLICEPLEASE</li>
                                <li><b>Raise Wanted Level –</b> MOREPOLICEPLEASE</li>
                                <li><b>Clear Weather –</b> SKINCANCERFORME</li>
                                <li><b>Foggy Weather –</b> ILIKESCOTLAND</li>
                                <li><b>Rainy Weather –</b> ILOVESCOTLAND</li>
                                <li><b>Cloudy Weather –</b> PEASOUP</li>
                                <li><b>Spawn Tank (Rhino) –</b> GIVEUSATANK</li>
                                <li><b>Blow Up All Cars –</b> BANGBANGBANG</li>
                                <li><b>Change Clothes –</b> ILIKEDRESSINGUP</li>
                                <li><b>Invisible Cars –</b> ANICESETOFWHEELS</li>
                                <li><b>Fast Gameplay –</b> TIMEFLIESWHENYOU</li>
                                <li><b>Slow Gameplay –</b> BOOOOORING</li>
                                <li><b>All Pedestrians Armed –</b> WEAPONSFORALL</li>
                                <li><b>Crazy Pedestrians –</b> NOBODYLIKESME</li>
                                <li><b>Cars Fly –</b> CHITTYCHITTYBB</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-5-freeflow/id6749615212"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[1200px]
               p-4 rounded-2xl shadow-md 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold text-center
               hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Liberty City (GTA III) cheats for PlayStation
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Full Health –</b> R2, Circle, R2, L1, R2, X, Triangle, R1, Circle</li>
                                <li><b>Full Armor –</b> R2, Circle, R2, L1, R2, Square, Triangle, R1, Circle</li>
                                <li><b>Weapons –</b> L1, R1, Square, R2, Left, Down, Right, Up</li>
                                <li><b>Money $250,000 –</b> L1, L2, R1, R2, Left, Up, Down, Right</li>
                                <li><b>Lower Wanted Level –</b> R2, R2, Circle, R1, Left, Right, Left, Right</li>
                                <li><b>Raise Wanted Level –</b> R2, R2, Circle, R1, Up, Down, Up, Down</li>
                                <li><b>Spawn Tank (Rhino) –</b> Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle</li>
                                <li><b>Blow Up All Cars –</b> L2, R2, L1, R1, Square, Circle, Square, Circle</li>
                                <li><b>Change Clothes –</b> Up, Down, Left, Right, L1, R1, Triangle, Circle</li>
                                <li><b>Invisible Cars –</b> R2, R2, L1, Triangle, Circle, Square, Down, Left</li>
                                <li><b>Fast Gameplay –</b> L1, L2, R1, R2, Up, Up, Right, Right</li>
                                <li><b>Slow Gameplay –</b> L1, L2, R1, R2, Down, Down, Left, Left</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-5-freeflow/id6749615212"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[1200px]
               p-4 rounded-2xl shadow-md 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold text-center
               hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Liberty City (GTA III) cheats for Xbox
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Full Health –</b> Black, White, LT, B, X, Y, RB, Black, Y</li>
                                <li><b>Full Armor –</b> Black, White, LT, B, X, A, RB, Black, Y</li>
                                <li><b>Weapons –</b> LB, RB, X, RT, LEFT, DOWN, RIGHT, UP</li>
                                <li><b>Money $250,000 –</b> LB, LT, RB, RT, LEFT, UP, DOWN, RIGHT</li>
                                <li><b>Lower Wanted Level –</b> RT, RT, B, RB, LEFT, RIGHT, LEFT, RIGHT</li>
                                <li><b>Raise Wanted Level –</b> RT, RT, B, RB, UP, DOWN, UP, DOWN</li>
                                <li><b>Spawn Tank –</b> B, B, LT, B, B, B, LT, RT, Black, Y, B, Y</li>
                                <li><b>Blow Up All Cars –</b> LT, RT, LB, RB, X, B, X, B</li>
                                <li><b>Change Clothes –</b> UP, DOWN, LEFT, RIGHT, LB, RB, Y, B</li>
                                <li><b>Invisible Cars –</b> RT, RT, LB, Y, B, X, DOWN, LEFT</li>
                                <li><b>Fast Gameplay –</b> LB, LT, RB, RT, UP, UP, RIGHT, RIGHT</li>
                                <li><b>Slow Gameplay –</b> LB, LT, RB, RT, DOWN, DOWN, LEFT, LEFT</li>
                            </ul>
                            <ul className="mt-4">
                               <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-5-freeflow/id6749615212"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[1200px]
               p-4 rounded-2xl shadow-md 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold text-center
               hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Liberty City (GTA III) cheats for Mobile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Full Health –</b> GESUNDHEIT</li>
                                <li><b>Full Armor –</b> TORTOISE</li>
                                <li><b>Weapons –</b> GUNSGUNSGUNS</li>
                                <li><b>Money $250,000 –</b> IFIWEREARICHMAN</li>
                                <li><b>Lower Wanted Level –</b> NOPOLICEPLEASE</li>
                                <li><b>Raise Wanted Level –</b> MOREPOLICEPLEASE</li>
                                <li><b>Clear Weather –</b> SKINCANCERFORME</li>
                                <li><b>Foggy Weather –</b> ILIKESCOTLAND</li>
                                <li><b>Rainy Weather –</b> ILOVESCOTLAND</li>
                                <li><b>Cloudy Weather –</b> PEASOUP</li>
                                <li><b>Spawn Tank –</b> GIVEUSATANK</li>
                                <li><b>Blow Up All Cars –</b> BANGBANGBANG</li>
                                <li><b>Change Clothes –</b> ILIKEDRESSINGUP</li>
                                <li><b>Invisible Cars –</b> ANICESETOFWHEELS</li>
                                <li><b>All Pedestrians Armed –</b> WEAPONSFORALL</li>
                                <li><b>Crazy Pedestrians –</b> NOBODYLIKESME</li>
                            </ul>
                            <ul className="mt-4">
                               <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-5-freeflow/id6749615212"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[1200px]
               p-4 rounded-2xl shadow-md 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold text-center
               hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>





                        <section className="px-4">
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-center">
                                Related Apps
                            </h3>
                            <hr className="border-gray-700 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[1200px]" />

                            {/* Responsive Grid for Images */}
                            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 place-items-center">
                                {/* Card 1 */}
                                <div className="flex flex-col items-center space-y-3">
                                    <a
                                        href="/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center space-y-3"
                                    >
                                        <img
                                            src="/poster1.jpg"
                                            alt="GTA San Andreas"
                                            className="w-[220px] sm:w-[240px] md:w-[250px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                                        />
                                        <button
                                            className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
        bg-cyan-500 text-white font-semibold 
        text-sm sm:text-base md:text-lg 
        rounded-lg sm:rounded-xl md:rounded-full 
        shadow-md 
        hover:bg-cyan-600 hover:shadow-lg hover:scale-105 
        active:scale-95 transition-all duration-300 ease-in-out"
                                        >
                                            View
                                        </button>
                                    </a>
                                </div>

                                {/* Card 2 */}
                                <div className="flex flex-col items-center space-y-3">
                                    <a
                                        href="/gta-vice-city-cheats-for-pc-playstation-android-microsoft-console"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center space-y-3"
                                    >
                                        <img
                                            src="/image1.jpg"
                                            alt="GTA Vice City"
                                            className="w-[220px] sm:w-[240px] md:w-[250px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                                        />
                                        <button
                                            className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
        bg-cyan-500 text-white font-semibold 
        text-sm sm:text-base md:text-lg 
        rounded-lg sm:rounded-xl md:rounded-full 
        shadow-md 
        hover:bg-cyan-600 hover:shadow-lg hover:scale-105 
        active:scale-95 transition-all duration-300 ease-in-out"
                                        >
                                            View
                                        </button>
                                    </a>
                                </div>

                                {/* Card 3 */}
                                <div className="flex flex-col items-center space-y-3">
                                    <a
                                        href="/gta-v-cheats-for-pc-playstation-android-microsoft-console"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center space-y-3"
                                    >
                                        <img
                                            src="/image3.jpg"
                                            alt="GTA V"
                                            className="w-[220px] sm:w-[240px] md:w-[250px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                                        />
                                        <button
                                            className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
        bg-cyan-500 text-white font-semibold 
        text-sm sm:text-base md:text-lg 
        rounded-lg sm:rounded-xl md:rounded-full 
        shadow-md 
        hover:bg-cyan-600 hover:shadow-lg hover:scale-105 
        active:scale-95 transition-all duration-300 ease-in-out"
                                        >
                                            View
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </section>

                    </div >
                </section >

            </div >
            <Footer />
        </>

    )
}


export default LibertyCity;