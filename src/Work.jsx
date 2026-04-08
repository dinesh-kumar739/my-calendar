import "./Work.css";

function Work(){
    return(
        <div className="one">
            <h1>Plan. Track. Achieve.</h1>
            <div className="head">
                <input type="text" className="enter" placeholder="Enter Your Task .." />
                <input type="date" />
                <input type="date" />
                <button>submit</button>
            </div>
        </div>
    );
}

export default Work;