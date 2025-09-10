import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Cheat() {
    return (
        <>
            <Header />
            <div>
                <main className="bg-black text-white min-h-screen mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* LEFT COLUMN (Sticky Cover + Buy Button) */}
                        <div className="md:sticky md:top-20 self-start space-y-6">
                            <h1 className="text-2xl sm:text-3xl font-bold">Grand Theft Auto: San Andreas Cheat Codes</h1>
                            <a
                                href="https://apps.apple.com/us/app/cheat-codes-for-gta-5-freeflow/id6749615212"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg"
                            >
                                Get the App
                            </a>
                            <img
                                src="/poster1.jpg"
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
                                    Five years ago Carl Johnson escaped from the pressures of life in Los Santos,
                                    San Andreas — a city tearing itself apart with gang trouble, drugs, and corruption.
                                    <br />
                                    <br />
                                    Now, it's the early '90s. Carl's got to go home. His mother has been murdered,
                                    his family has fallen apart and his childhood friends are all heading toward disaster.
                                    <br />
                                    <br />
                                    On his return to the neighborhood, a couple of corrupt cops frame him for homicide.
                                    CJ is forced on a journey that takes him across the entire state of San Andreas,
                                    to save his family and to take control of the streets.
                                </p>
                            </section>

                            {/* Screens */}
                            <section>
                                <h4 className="text-lg sm:text-xl font-semibold mb-4">Screens</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bb5e5e25e29046535aba405ad47bb826.jpg" alt="" className="rounded-lg w-full" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9b8a9636519a343c04f860eb6f0c22d3.jpg" alt="" className="rounded-lg w-full" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99efb826b071747efc32fa9a14117e99.jpg" alt="" className="rounded-lg w-full" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a861733e3625e0d409df25aee50d5273.jpg" alt="" className="rounded-lg w-full" />
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
                                    <dd className="text-gray-300">October 26, 2004</dd>

                                    <dt className="font-medium">Rating</dt>
                                    <dd className="text-gray-300">
                                        M – Blood and Gore, Intense Violence, Strong Language, Strong Sexual Content, Use of Drugs
                                    </dd>
                                </dl>
                            </section>
                        </div>
                    </div>
                </main>

                {/* CHEATS SECTION */}
                {/* CHEATS SECTION */}
                <section className="bg-black text-white min-h-screen grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 px-4 sm:px-6 md:px-12 py-12">
                    {/* LEFT COLUMN (keeps empty space so cheats align with poster above) */}
                    <div className="hidden lg:block"></div>

                    {/* RIGHT COLUMN (Cheats Content) */}
                    <div className="space-y-12">
                        <h5
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 
             bg-gradient-to-r from-orange-500 via-red-600 to-red-800 
             bg-clip-text text-transparent"
                        >
                            GTA San Andreas cheats for PC, PlayStation, Xbox, and Mobile
                        </h5>

                        {/* PC Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA San Andreas cheats for PC
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 text-md sm:text-base">
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>
                                        <b className="text-white">Adrenaline Mode – </b>
                                        <span className="text-white">ANOSEONGLASS</span>
                                    </li>
                                </ul>

                                <ul className="list-disc list-inside space-y-2 text-gray-300 text-md sm:text-bas">
                                    <li>
                                        <b className="text-white">Semi-Infinite Health – </b>
                                        <span className="text-white">BAGUVIX</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Weapon Set 1, Thug’s Tools – </b>
                                        <span className="text-white">LXGIWYL</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Weapon Set 2, Professional Tools – </b>
                                        <span className="text-white">PROFESSIONALSKIT</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Weapon Set 3, Nutter Tools – </b>
                                        <span className="text-white">UZUMYMW</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Wanted Level Up – </b>
                                        <span className="text-white">TURNUPTHEHEAT</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Wanted Level Down – </b>
                                        <span className="text-white">TURNDOWNTHEHEAT</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Lock Wanted Level – </b>
                                        <span className="text-white">AEZAKMI</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Maximum Wanted Level – </b>
                                        <span className="text-white">BRINGITON</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Pedestrian Riot – </b>
                                        <span className="text-white">STATEOFEMERGENCY</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Chaos Mode – </b>
                                        <span className="text-white">AJLOJYQY</span>
                                    </li>
                                </ul>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 text-md mb-4 sm:text-bas">
                                    <li>
                                        <b className="text-white">Bounty on Your Head – </b>
                                        <span className="text-white">BAGOWPG</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Pedestrians Attack – </b>
                                        <span className="text-white">BGLUAWML</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Pedestrians Have Weapons – </b>
                                        <span className="text-white">FOOOXFT</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Pedestrians Are Elvis – </b>
                                        <span className="text-white">BLUESUEDESHOES</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Beach Party Mode – </b>
                                        <span className="text-white">LIFESABEACH</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Triad Theme – </b>
                                        <span className="text-white">NINJATOWN</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Funhouse Theme – </b>
                                        <span className="text-white">CRAZYTOWN</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Traffic is Country Vehicles – </b>
                                        <span className="text-white">FVTMNBZ</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Kinky Theme – </b>
                                        <span className="text-white">LOVECONQUERSALL</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Mega Jump – </b>
                                        <span className="text-white">KANGAROO</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Super Punch – </b>
                                        <span className="text-white">STINGLIKEABEE</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Have Jetpack – </b>
                                        <span className="text-white">ROCKETMAN</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Rhino Tank – </b>
                                        <span className="text-white">IWPRTON</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Hydra – </b>
                                        <span className="text-white">JUMPJET</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Hunter – </b>
                                        <span className="text-white">OHDUDE</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Stunt Plane – </b>
                                        <span className="text-white">FLYINGTOSTUNT</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Bloodring Banger – </b>
                                        <span className="text-white">OLDSPEEDDEMON</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Vortex Hovercraft – </b>
                                        <span className="text-white">KGGGDKP</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Have Parachute – </b>
                                        <span className="text-white">AIYPWZQP</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Monster – </b>
                                        <span className="text-white">MONSTERMASH</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Hotring Racer #1 – </b>
                                        <span className="text-white">VROCKPOKEY</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Hotring Racer #2 – </b>
                                        <span className="text-white">VPJTQWV</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Romero – </b>
                                        <span className="text-white">WHERESTHEFUNERAL</span>
                                    </li>
                                    <li>
                                        <b className="text-white">Spawn Stretch – </b>
                                        <span className="text-white">CELEBRITYSTATUS</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a
                                            href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                 text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                        >
                                            🚀 Download our app for more hidden cheat codes, 100% free!
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </section>

                        {/* PlayStation Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA San Andreas cheats for PlayStation
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md mb-4  sm:text-base">
                                <li>
                                    <span className="font-bold">Aggressive Traffic –</span> R2, CIRCLE,
                                    R1, L2, LEFT, R1, L1, R2, L2
                                </li>
                                <li>
                                    <span className="font-bold">All cars have Nitrous –</span> LEFT,
                                    TRIANGLE, R1, L1, UP, SQUARE, TRIANGLE, DOWN, CIRCLE, L2, L1, L1
                                </li>
                                <li>
                                    <span className="font-bold">All Traffic is Junk Cars –</span> L2,
                                    RIGHT, L1, UP, X, L1, L2, R2, R1, L1, L1, L1
                                </li>
                                <li>
                                    <span className="font-bold">ATV Quad –</span> LEFT, LEFT, DOWN, DOWN,
                                    UP, UP, SQUARE, CIRCLE, TRIANGLE, R1, R2
                                </li>
                                <li>
                                    <span className="font-bold">Beach Party –</span> UP, UP, DOWN, DOWN,
                                    SQUARE, CIRCLE, L1, R1, TRIANGLE, DOWN
                                </li>
                                <li>
                                    <span className="font-bold">Black traffic –</span> CIRCLE, L2, UP, R1,
                                    LEFT, X, R1, L1, LEFT, CIRCLE
                                </li>
                                <li>
                                    <span className="font-bold">Blow up All Cars –</span> R2, L2, R1, L1,
                                    L2, R2, SQUARE, TRIANGLE, CIRCLE, TRIANGLE, L2, L1
                                </li>
                                <li>
                                    <span className="font-bold">Cars Fly –</span> UP, DOWN, L1, R1, L1,
                                    RIGHT, LEFT, L1, LEFT
                                </li>
                                <li>
                                    <span className="font-bold">Chaos Mode –</span> L2, RIGHT, L1,
                                    TRIANGLE, RIGHT, RIGHT, R1, L1, RIGHT, L1, L1, L1
                                </li>
                                <li>
                                    <span className="font-bold">Cloudy Weather –</span> L2, DOWN, DOWN,
                                    LEFT, SQUARE, LEFT, R2, SQUARE, X, R1, L1, L1
                                </li>
                                <li>
                                    <span className="font-bold">Drive on Water –</span> RIGHT, R2, CIRCLE,
                                    R1, L2, SQUARE, R1, R2
                                </li>
                                <li>
                                    <span className="font-bold">Faster Cars –</span> RIGHT, R1, UP, L2,
                                    L2, LEFT, R1, L1, R1, R1
                                </li>
                                <li>
                                    <b>Slower Gameplay –</b> TRIANGLE, UP, RIGHT, DOWN, SQUARE, R2, R1
                                </li>
                                <li>
                                    <b>Spawn Bloodring Banger –</b> DOWN, R1, CIRCLE, L2, L2, X, R1, L1, LEFT, LEFT
                                </li>
                                <li>
                                    <b>Spawn Caddy –</b> CIRCLE, L1, UP, R1, L2, X, R1, L1, CIRCLE, X
                                </li>
                                <li>
                                    <b>Spawn Dozer –</b> R2, L1, L1, RIGHT, RIGHT, UP, UP, X, L1, LEFT
                                </li>
                                <li>
                                    <b>Spawn Hotring Racer 1 –</b> R1, CIRCLE, R2, RIGHT, L1, L2, X, X, SQUARE, R1
                                </li>
                                <li>
                                    <b>Spawn Hotring Racer 2 –</b> R2, L1, CIRCLE, RIGHT, L1, R1, RIGHT, UP, CIRCLE, R2
                                </li>
                                <li>
                                    <b>Spawn Hunter –</b> CIRCLE, X, L1, CIRCLE, CIRCLE, L1, CIRCLE, R1 R2, L2, L1, L1
                                </li>
                                <li>
                                    <b>Spawn Jetpack –</b> L1, L2, R1, R2, UP, DOWN, LEFT, RIGHT, L1, L2, R1, R2, UP, DOWN, LEFT, RIGHT
                                </li>
                                {/* 👉 You can continue adding rest of the cheats in same format */}
                            </ul>
                            <ul>
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                 text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>
                        {/* Mobile Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA San Andreas cheats for Mobile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4  text-md sm:text-base">
                                <li>
                                    <span className="font-medium">Health, Armor, and $250k Money –</span>{" "}
                                    <code className="font-mono">HESOYAM</code>
                                </li>
                                <li>
                                    <span className="font-medium">Infinite Ammo, No Reload –</span>{" "}
                                    <code className="font-mono">FULLCLIP</code>
                                </li>
                                <li>
                                    <span className="font-medium">Adrenaline Mode –</span>{" "}
                                    <code className="font-mono">ANOSEONGLASS</code>
                                </li>
                                <li>
                                    <span className="font-medium">Semi-Infinite Health –</span>{" "}
                                    <code className="font-mono">BAGUVIX</code>
                                </li>
                                <li>
                                    <span className="font-medium">Weapon Set 1, Thug’s Tools –</span>{" "}
                                    <code className="font-mono">LXGIWYL</code>
                                </li>
                                <li>
                                    <span className="font-medium">Weapon Set 2, Professional Tools –</span>{" "}
                                    <code className="font-mono">PROFESSIONALSKIT</code>
                                </li>
                                <li>
                                    <span className="font-medium">Weapon Set 3, Nutter Tools –</span>{" "}
                                    <code className="font-mono">UZUMYMW</code>
                                </li>
                                <li>
                                    <span className="font-medium">Wanted Level Up –</span>{" "}
                                    <code className="font-mono">TURNUPTHEHEAT</code>
                                </li>
                                <li>
                                    <span className="font-medium">Wanted Level Down –</span>{" "}
                                    <code className="font-mono">TURNDOWNTHEHEAT</code>
                                </li>
                                <li>
                                    <span className="font-medium">Lock Wanted Level –</span>{" "}
                                    <code className="font-mono">AEZAKMI</code>
                                </li>
                                <li>
                                    <span className="font-medium">Maximum Wanted Level –</span>{" "}
                                    <code className="font-mono">BRINGITON</code>
                                </li>
                                <li>
                                    <span className="font-medium">Pedestrian Riot –</span>{" "}
                                    <code className="font-mono">STATEOFEMERGENCY</code>
                                </li>
                                <li>
                                    <span className="font-medium">Chaos Mode –</span>{" "}
                                    <code className="font-mono">AJLOJYQY</code>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                 text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* Xbox Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA San Andreas cheats for Xbox
                            </h3>

                            <ul className="list-disc list-inside space-y-2 mb-4 text-md sm:text-base">
                                <li><b>Aggressive Traffic –</b> RT, B, RB, LT, LEFT, RB, LB, RT, LT</li>
                                <li><b>All cars have nitrous –</b> LEFT, Y, RB, LB, UP, X, Y, DOWN, B, LT, LB, LB</li>
                                <li><b>All Traffic is Junk Cars –</b> LT, RIGHT, LB, UP, A, LB, LT, RT, RB, LB, LB, LB</li>
                                <li><b>ATV Quad –</b> LEFT, LEFT, DOWN, DOWN, UP, UP, X, B, Y, RB, RT</li>
                                <li><b>Beach Party –</b> UP, UP, DOWN, DOWN, X, B, LB, RB, Y, DOWN</li>
                                <li><b>Black traffic –</b> B, LT, UP, RB, LEFT, A, RB, LB, LEFT, B</li>
                                <li><b>Blow up All Cars –</b> RT, LT, RB, LB, LT, RT, X, Y, B, Y, LT, LB</li>
                                <li><b>Bounty on Your Head –</b> DOWN, UP, UP, UP, A, RT, RB, LT, LT</li>
                                <li><b>Cars Fly –</b> UP, DOWN, LB, RB, LB, RIGHT, LEFT, LB, LEFT</li>
                                <li><b>Chaos Mode –</b> LT, RIGHT, LB, Y, RIGHT, RIGHT, RB, LB, RIGHT, LB, LB, LB</li>
                                <li><b>Cloudy Weather –</b> LT, DOWN, DOWN, LEFT, X, LEFT, RT, X, A, RB, LB, LB</li>
                                <li><b>Drive on Water –</b> RIGHT, RT, B, RB, LT, X, RB, RT</li>
                                <li><b>Faster Cars –</b> RIGHT, RB, UP, LT, LT, LEFT, RB, LB, RB, RB</li>
                                <li><b>Faster Clock –</b> B, B, LB, X, LB, X, X, X, LB, Y, B, Y</li>
                                <li><b>Faster Game Play –</b> Y, UP, RIGHT, DOWN, LT, LB, X</li>
                                <li><b>Fat CJ –</b> Y, UP, UP, LEFT, RIGHT, X, B, DOWN</li>
                                <li><b>Flying boats –</b> RT, B, UP, LB, RIGHT, RB, RIGHT, UP, X, Y</li>
                                <li><b>Foggy Weather –</b> RT, A, LB, LB, LT, LT, LT, A</li>
                                <li><b>Full Health, Full Armor, $250,000 –</b> RB, RT, LB, A, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP</li>


                                {/* 👉 Continue the rest of the cheats the same way */}
                            </ul>
                            <ul>
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                 text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
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
                            <hr className="border-gray-700" />

                            {/* Responsive Grid for Images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 place-items-center">

                                {/* Card 1 */}
                                <a
                                    href="/gta-vice-city-cheats-for-pc-playstation-android-microsoft-console"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center space-y-3"
                                >
                                    <img
                                        src="/image1.jpg"
                                        alt="GTA Vice City Screenshot"
                                        className="w-[220px] sm:w-[240px] md:w-[250px] rounded-2xl shadow-lg 
                 hover:scale-105 transition-transform duration-300"
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

                                {/* Card 2 */}
                                <a
                                    href="/gta-liberty-city-cheats-for-pc-playstation-android-microsoft-console"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center space-y-3"
                                >
                                    <img
                                        src="/image2.jpg"
                                        alt="GTA Liberty City Screenshot"
                                        className="w-[220px] sm:w-[240px] md:w-[250px] rounded-2xl shadow-lg 
                 hover:scale-105 transition-transform duration-300"
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

                                {/* Card 3 */}
                                <a
                                    href="/gta-v-cheats-for-pc-playstation-android-microsoft-console"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center space-y-3"
                                >
                                    <img
                                        src="/image3.jpg"
                                        alt="GTA V Screenshot"
                                        className="w-[220px] sm:w-[240px] md:w-[250px] rounded-2xl shadow-lg 
                 hover:scale-105 transition-transform duration-300"
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

                        </section>

                    </div>
                </section>

            </div>
            <Footer />
        </>

    )
}


export default Cheat;