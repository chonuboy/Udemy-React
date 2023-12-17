import cart from "./images/cart.png"
import not from "./images/not.png"
import user from "./images/user.png"
function Navbar(){
    return(
        <div>
            <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udmey</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "black"}}></i>
            <input type="text" placeholder="Search Contents..."></input>
        </div>
        <div class="navbar__menu">
            <p>Courses</p>
            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You Did Not Purchased Anything Yet.</p>
                </div>
            </div>
            <img src={cart} alt="cart"/>
            <img src={not} alt="notification"/>
            <img src={user} alt="User"/>
        </div>
    </div>
        </div>
    )
}
export default Navbar