import "./mainBody.css"

//an element to display text in the middle of the page
function MainBody (){
    return(
        <div className="content">
            <h5 className="gold-text">JOIN <span className="white-text">45612</span> RECENT STUDENTS</h5>
            <h1 className="motto">{'</'}Secure your future.<br /> Learn to code.{'/>'}</h1>
            <p className="white-font">Our online coding bootcamps are set apart by integrating human-led code review. Our deep experience will support your ability to code and help you achieve career-focused skills</p>
            <button id="goToDashboard"><strong>Go to dashboard</strong></button>
        </div>
        
    )
}

export default MainBody;