import one from "./images/c1.jpg"
import two from "./images/c2.jpg"
import three from "./images/c3.jpg"
import four from "./images/c4.jpg"
function Recommended(){
    return(
        <div className="recommended">
        <h1 className="recommended__title">Recommended For You</h1>
        <p>Pick The Best One</p>

        <div class="recommended__container">
            <div className="course-card">
                <img src={one} alt="Recommended"></img>
                <p>2023 Python Data Visualization Masterclass</p>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>

            <div className="course-card">
                <img src={two} alt="Recommended"></img>
                <p>Web Development Bootcamp 2023|Advance</p>
                <p>Col Steele</p>
                <p>3.8 ⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>

            <div className="course-card">
                <img src={three} alt="Recommended"></img>
                <p>Master UI/UX Designing with Figma</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>

            <div className="course-card">
                <img src={four} alt="Recommended"></img>
                <p>Basic to Advance Java Core Training</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>
        </div>

    </div>
    )
}
export default Recommended