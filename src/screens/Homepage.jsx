

function Homepage() {
    return(
        <div id="homepage" className="flex justify-center items-center h-screen w-screen">
            <div className="w-1/2 h-3/4 flex flex-col items-start justify-center">
                <h1 className="font-bold w-full text-3xl">Quiz App</h1> <br /><br />
                <h3 className="font-bold text-xl">Question 1</h3> <br />
                <p className="">When was Nintendo&#039;s Virtual Boy released?</p> <br />
                <ul className="list-disc list-inside flex flex-col gap-1">
                    <li><button className="border border-black bg-slate-300 p-1 italic" type="button">1989</button></li>
                    <li><button className="border border-black bg-slate-300 p-1 italic" type="button">1948</button></li>
                    <li><button className="border border-black bg-slate-300 p-1 italic" type="button">1972</button></li>
                    <li><button className="border border-black bg-slate-300 p-1 italic" type="button">1995</button></li>
                </ul>

                <br /><br />

                <p>Time Left: 0 seconds</p>
<br />
                <button className=" border border-black bg-slate-300 p-1 italic">Skip Question</button>
            </div>

        </div>
    )
}

export default Homepage;