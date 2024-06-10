//bootcampCards.js
import React from "react";
import BootcampCourseCard from "./BootcampCourseCard.js";
import './bootcampCards.modules.css';



//functional component to display each bootcamp course in a card, it is reused

// bootcampCourses has been passed as a prop
function BootcampCourseCardList({ bootcampCourses }) {
    // Split the array into chunks of two elements each
    const chunkedCourses = bootcampCourses.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index / 2);
  
      //checks if there is already an element at the chunkIndex of the resultsArray, if there isnt, it is the first in the chunk and then initialises a new array
      if (!resultArray[chunkIndex]) {

        resultArray[chunkIndex] = [];
      }
  
      // pussing the iterated element to the result array
      resultArray[chunkIndex].push(item);
  
      return resultArray;
    }, []);
  
    return (
        <div id="bootcamp-card">

{/* logic to loop over the array of 'chunks' (2 elements), easier to display */}

      {/* creating a container for the row */}
      <div className="row" id="chunk">
        {chunkedCourses.map((chunk, index) => (

            <div key={index} id="individual"className="col-lg-6">
            {chunk.map((course) => (
                // display the course card using the BootcampCourseCard component
                <BootcampCourseCard key={course.id} bootcampCourse={course} />
                ))}
          </div>
        ))}
      </div>
        </div>
    );
  }

export default BootcampCourseCardList;
