import "./stats.css";

//in this file i use bootstrap to style the list to display the elements in a grid


// creating containers to display statistics about students in the bootcamp
function Stats() {
  return (

    // wrapping all of the list components in a div for styling
        <div>
          {/* div for title */}
        <div className="col-lg-12">

      <h3 className="experience-title">A life-changing experience</h3>
        </div>
    {/* starting the list */}
      <ul className="row" id="experience-section">
        {/* div for list element */}
        <div className="col-lg-6">
          <li id="list1" className="col-lg-6">
            <h3 className="statistic">330,000+</h3>
            <p className="subtitle">Expert code reviews</p>
            <p className="list-content">
              We've perfected the method of teaching tech skills by
              incorporating expert code review in all of our bootcamps. Get your
              code reviewed by experts from Day 1, so you can learn
              industry-grade practices.
            </p>
          </li>
        </div>

        {/* div for list element */}

        <div className="col-lg-6">
          <li id="list2" className="col-lg-6">
            <h3 className="statistic">8400+</h3>
            <p className="subtitle">Hours of support in 2023</p>
            <p className="list-content">
              Our students receive comprehensive support and feedback from an
              expert team of code reviewers while studying with us. Expert help
              is just a video call away.
            </p>
          </li>
        </div>

        {/* div for list element */}
        <div className="col-lg-6">
          <li id="list3" className="col-lg-6">
            <h3 className="statistic">84%</h3>
            <p className="subtitle">Reached career outcomes</p>
            <p className="list-content">
              Most of our graduates end up reaching their career goals by
              finding a job or upskilling in the tech industry, while 80% of our
              grads secured a job within 6 months of graduating.
            </p>
          </li>
        </div>

        {/* div for list element */}
        <div className="col-lg-6">
          <li id="list4" className="col-lg-6">
            <h3 className="statistic">4.8/5</h3>
            <p className="subtitle">High student satisfaction</p>
            <p className="list-content">
              With hundreds of 5-star reviews from our students and alumni,
              we're one of the top-rated tech education providers in the world.
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Stats;
