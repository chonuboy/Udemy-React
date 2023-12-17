import one from "./images/c1.jpg"
import two from "./images/c2.jpg"
import three from "./images/c3.jpg"
import four from "./images/c4.jpg"
import five from "./images/c5.jpg"
import six from "./images/c6.jpg"
function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__desc">Pick The Best For You</p>
        <div class="popular__container">
            <div class="popular_course-card">
                <img src={four} alt="Popular"></img>
                <p>Basic to Advance Java Core Training</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>
            <div class="popular_course-card">
                <img src={three} alt="Popular"></img>
                <p>Basic to Advance Java Core Training</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>
            <div class="popular_course-card">
                <img src={two} alt="Popular"></img>
                <p>Basic to Advance Java Core Training</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>
            <div class="popular_course-card">
                <img src={one} alt="Popular"></img>
                <p>Basic to Advance Java Core Training</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>
            <div class="popular_course-card">
                <img src={five} alt="Popular"></img>
                <p>Basic to Advance Java Core Training</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>
            <div class="popular_course-card">
                <img src={six} alt="Popular"></img>
                <p>Basic to Advance Java Core Training</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p> ₹ 449 <del>1500</del></p>
            </div>
        </div>
    </div>
    )
}
export default Popular