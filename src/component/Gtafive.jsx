import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function GtaFive() {
    return (
        <>
            <Header />
            <div>
                <main className="bg-black text-white min-h-screen mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* LEFT COLUMN (Sticky Cover + Buy Button) */}
                        <div className="md:sticky md:top-20 self-start space-y-6">
                            <h1 className="text-2xl sm:text-3xl font-bold">Grand Theft Auto: GTA V Cheat Codes</h1>
                            <a
                                href="https://apps.apple.com/us/app/cheat-codes-for-gta-5-freeflow/id6749615212"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg"
                            >
                                Get the App
                            </a>
                            <img
                                src="/image3.jpg"
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
                                    Grand Theft Auto V takes place in the sprawling city of Los Santos and the surrounding hills, countryside, and beaches. Once a thriving metropolis for the movie industry, Los Santos is now struggling with economic decline, corruption, and the obsession with fame and fortune.                                    <br />
                                    <br />
                                    Their lives intertwine as they embark on a series of dangerous heists, betrayals, and choices that will shape their destinies. Players switch between the three characters, each offering different perspectives and gameplay styles.                                    <br />
                                    <br />
                                    With an enormous open world, stunning realism, and endless opportunities for crime, business, and chaos, GTA V redefines what it means to live the criminal dream.                                </p>
                            </section>

                            {/* Screens */}
                            <section>
                                <h4 className="text-lg sm:text-xl font-semibold mb-4">Screens</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <img alt="" src="//media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472516.jpg" />
                                    <img alt="" src="//media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472493.jpg" />
                                    <img alt="" src="//media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472423.jpg" />
                                    <img alt="" src="//media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472402.jpg" />
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
                                    <dd className="text-gray-300">September 17, 2013</dd>

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
                            GTA V cheats for PC, PlayStation, Xbox, and Mobile
                        </h5>

                        {/* GTA V Cheats */}
                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA V Cheats for PlayStation
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Invincibility –</b> RIGHT, X, RIGHT, LEFT, RIGHT, R1, RIGHT, LEFT, X, TRIANGLE</li>
                                <li><b>Lower Wanted Level –</b> R1, R1, CIRCLE, R2, RIGHT, LEFT, RIGHT, LEFT, RIGHT, LEFT</li>
                                <li><b>Raise Wanted Level –</b> R1, R1, CIRCLE, R2, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT</li>
                                <li><b>Fast Run –</b> TRIANGLE, LEFT, RIGHT, RIGHT, L2, L1, SQUARE</li>
                                <li><b>Super Jump –</b> LEFT, LEFT, TRIANGLE, TRIANGLE, RIGHT, RIGHT, LEFT, RIGHT, SQUARE, R1, R2</li>
                                <li><b>Explosive Ammo –</b> RIGHT, SQUARE, X, LEFT, R1, R2, LEFT, RIGHT, RIGHT, L1, L1, L1</li>
                                <li><b>Flaming Bullets –</b> L1, R1, SQUARE, R1, LEFT, R2, R1, LEFT, SQUARE, RIGHT, L1, L1</li>
                                <li><b>Slow Motion Aim –</b> SQUARE, L2, R1, TRIANGLE, LEFT, SQUARE, L2, RIGHT, X</li>
                                <li><b>Spawn Buzzard Helicopter –</b> CIRCLE, CIRCLE, L1, CIRCLE, CIRCLE, CIRCLE, L1, L2, R1, TRIANGLE, CIRCLE, TRIANGLE</li>
                                <li><b>Spawn Comet (Sports Car) –</b> R1, CIRCLE, R2, RIGHT, L1, L2, X, X, SQUARE, R1</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 
        text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden GTA V cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA V Cheats for Xbox
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Invincibility –</b> RIGHT, A, RIGHT, LEFT, RIGHT, RB, RIGHT, LEFT, A, Y</li>
                                <li><b>Lower Wanted Level –</b> RB, RB, B, RT, RIGHT, LEFT, RIGHT, LEFT, RIGHT, LEFT</li>
                                <li><b>Raise Wanted Level –</b> RB, RB, B, RT, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT</li>
                                <li><b>Fast Run –</b> Y, LEFT, RIGHT, RIGHT, LT, LB, X</li>
                                <li><b>Super Jump –</b> LEFT, LEFT, Y, Y, RIGHT, RIGHT, LEFT, RIGHT, X, RB, RT</li>
                                <li><b>Explosive Ammo –</b> RIGHT, X, A, LEFT, RB, RT, LEFT, RIGHT, RIGHT, LB, LB, LB</li>
                                <li><b>Flaming Bullets –</b> LB, RB, X, RB, LEFT, RT, RB, LEFT, X, RIGHT, LB, LB</li>
                                <li><b>Slow Motion Aim –</b> X, LT, RB, Y, LEFT, X, LT, RIGHT, A</li>
                                <li><b>Spawn Buzzard Helicopter –</b> B, B, LB, B, B, B, LB, LT, RB, Y, B, Y</li>
                                <li><b>Spawn Comet (Sports Car) –</b> RB, B, RT, RIGHT, LB, LT, A, A, X, RB</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 
        text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden GTA V cheat codes, 100% free!
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
                                GTA V Cheats for PC
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-md sm:text-base">
                                <li><b>Invincibility –</b> PAINKILLER</li>
                                <li><b>Lower Wanted Level –</b> LAWYERUP</li>
                                <li><b>Raise Wanted Level –</b> FUGITIVE</li>
                                <li><b>Fast Run –</b> CATCHME</li>
                                <li><b>Super Jump –</b> HOPTOIT</li>
                                <li><b>Explosive Ammo –</b> HIGHEX</li>
                                <li><b>Flaming Bullets –</b> INCENDIARY</li>
                                <li><b>Slow Motion Aim –</b> DEADEYE</li>
                                <li><b>Spawn Buzzard Helicopter –</b> BUZZOFF</li>
                                <li><b>Spawn Comet (Sports Car) –</b> COMET</li>
                                <li><b>Spawn Stunt Plane –</b> BARNSTORM</li>
                                <li><b>Change Weather –</b> MAKEITRAIN</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    <a
                                        href="https://apps.apple.com/us/app/cheat-codes-for-gta-san-andrea/id6748644645"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-2xl shadow-md bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 
        text-white font-semibold hover:scale-105 hover:shadow-xl transform transition duration-300"
                                    >
                                        🚀 Download our app for more hidden GTA V cheat codes, 100% free!
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
                                        src="/image1.jpg"
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


export default GtaFive;