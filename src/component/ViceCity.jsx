import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function ViceCity() {
    return (
        <>
            <Header />
            <div>
                <main className="bg-black text-white min-h-screen mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* LEFT COLUMN (Sticky Cover + Buy Button) */}
                        <div className="md:sticky md:top-20 self-start space-y-6">
                            <h1 className="text-2xl sm:text-3xl font-bold">Grand Theft Auto: Vice City Cheat Codes</h1>
                            <a
                                href="https://apps.apple.com/us/app/cheats-codes-for-gta-vice-city/id6751623836"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg"
                            >
                                Get the App
                            </a>
                            <img
                                src="/image1.jpg"
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
                                    In 1986, Tommy Vercetti is released from prison after serving fifteen years for a crime he didn’t commit. Hoping for a fresh start, he is sent by his old boss to Vice City — a glamorous paradise inspired by Miami, filled with neon lights, beaches, luxury, and corruption.
                                    <br />
                                    <br />
                                    But things quickly spiral out of control. A drug deal goes bad, Tommy is double-crossed, and he’s left with nothing. Now, surrounded by rival gangs, shady businessmen, and ruthless crime lords, Tommy must rise through the underworld, build his own criminal empire, and take over the city by force.
                                    <br />
                                    <br />
                                    Vice City is a world of fast cars, palm trees, nightclubs, and betrayal — where power, money, and blood rule the streets.
                                </p>
                            </section>

                            {/* Screens */}
                            <section>
                                <h4 className="text-lg sm:text-xl font-semibold mb-4">Screens</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c3466bd07d09ec14c9555505ea4e6af.jpg" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b0353d1406b5264dc18326a811bc5bb5.jpg" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0301d4689fa8e170ceefe118a18b3afb.jpg" />
                                    <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e689e87adb68899abb7957e4b0d70612.jpg" />                               </div>
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
                                    <dd className="text-gray-300">October 27, 2002</dd>

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
                            GTA Vice City cheats for PC, PlayStation, Xbox, and Mobile
                        </h5>

                        {/* PC Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Vice City cheats for PC
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li>
                                    <b className="text-white">Health, Armor, Money – </b>
                                    <span className="text-white">ASPIRINE</span>
                                </li>
                                <li>
                                    <b className="text-white">Full Health – </b>
                                    <span className="text-white">ASPIRINE</span>
                                </li>
                                <li>
                                    <b className="text-white">Full Armor – </b>
                                    <span className="text-white">PRECIOUSPROTECTION</span>
                                </li>
                                <li>
                                    <b className="text-white">Weapon Set 1 – </b>
                                    <span className="text-white">THUGSTOOLS</span>
                                </li>
                                <li>
                                    <b className="text-white">Weapon Set 2 – </b>
                                    <span className="text-white">PROFESSIONALTOOLS</span>
                                </li>
                                <li>
                                    <b className="text-white">Weapon Set 3 – </b>
                                    <span className="text-white">NUTTERTOOLS</span>
                                </li>
                                <li>
                                    <b className="text-white">Lower Wanted Level – </b>
                                    <span className="text-white">LEAVEMEALONE</span>
                                </li>
                                <li>
                                    <b className="text-white">Raise Wanted Level – </b>
                                    <span className="text-white">YOUWONTTAKEMEALIVE</span>
                                </li>
                                <li>
                                    <b className="text-white">Spawn Tank (Rhino) – </b>
                                    <span className="text-white">PANZER</span>
                                </li>
                                <li>
                                    <b className="text-white">Spawn Helicopter – </b>
                                    <span className="text-white">AMERICAHELICOPTER</span>
                                </li>
                                <li>
                                    <b className="text-white">Spawn Bloodring Banger – </b>
                                    <span className="text-white">TRAVELINSTYLE</span>
                                </li>
                                <li>
                                    <b className="text-white">Cars Fly – </b>
                                    <span className="text-white">COMEFLYWITHME</span>
                                </li>
                                <li>
                                    <b className="text-white">Cars Drive on Water – </b>
                                    <span className="text-white">SEAWAYS</span>
                                </li>
                                <li>
                                    <b className="text-white">Pedestrians Riot – </b>
                                    <span className="text-white">FIGHTFIGHTFIGHT</span>
                                </li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden Vice City cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* PlayStation Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Vice City cheats for PlayStation
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Full Health –</b> R1, R2, L1, Circle, Left, Down, Right, Up, Left, Down, Right, Up</li>
                                <li><b>Full Armor –</b> R1, R2, L1, Triangle, Left, Down, Right, Up, Left, Down, Right, Up</li>
                                <li><b>Weapon Set 1 –</b> R1, R2, L1, R2, Left, Down, Right, Up, Left, Down, Right, Up</li>
                                <li><b>Spawn Tank (Rhino) –</b> Circle, Circle, L1, Circle, Circle, Circle, L1, L2, R1, Triangle, Circle, Triangle</li>
                                <li><b>Spawn Bloodring Banger –</b> Up, L1, Circle, L2, Left, R1, L1, L1, Left, Left, X, Triangle</li>
                                <li><b>Cars Fly –</b> Right, R2, Circle, R1, L2, Down, L1, R1</li>
                                <li><b>Pedestrians Riot –</b> Down, Left, Up, Left, X, R2, R1, L1, L2</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden Vice City cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* Mobile Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Vice City cheats for Mobile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Health, Armor, Money –</b> ASPIRINE</li>
                                <li><b>Infinite Ammo –</b> FULLCLIP</li>
                                <li><b>Weapon Set 1 –</b> THUGSTOOLS</li>
                                <li><b>Weapon Set 2 –</b> PROFESSIONALTOOLS</li>
                                <li><b>Weapon Set 3 –</b> NUTTERTOOLS</li>
                                <li><b>Lower Wanted Level –</b> LEAVEMEALONE</li>
                                <li><b>Raise Wanted Level –</b> YOUWONTTAKEMEALIVE</li>
                                <li><b>Spawn Tank (Rhino) –</b> PANZER</li>
                                <li><b>Spawn Helicopter –</b> AMERICAHELICOPTER</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden Vice City cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* Xbox Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA Vice City cheats for Xbox
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Full Health –</b> Black, White, LT, B, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP</li>
                                <li><b>Full Armor –</b> Black, White, LT, Y, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP</li>
                                <li><b>Weapon Set 1 –</b> Black, White, LT, White, LEFT, DOWN, RIGHT, UP, LEFT, DOWN, RIGHT, UP</li>
                                <li><b>Spawn Tank –</b> B, B, LT, B, B, B, LT, RT, Black, Y, B, Y</li>
                                <li><b>Cars Drive on Water –</b> RIGHT, RT, B, RB, LT, X, RB, RT</li>
                                <li><b>Pedestrians Riot –</b> DOWN, LEFT, UP, LEFT, A, RT, RB, LB, LT</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden Vice City cheat codes, 100% free!
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
                                    href="gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center space-y-3"
                                >
                                    <img
                                        src="/poster1.jpg"
                                        alt="GTA San Andreas Screenshot 3"
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
                                    href="gta-liberty-city-cheats-for-pc-playstation-android-microsoft-console"
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


export default ViceCity;