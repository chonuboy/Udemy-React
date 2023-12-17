import one from "./images/Sale image.jpg"
function Sale() {
    return (
        <div class="sale-image">
            <img src={one} alt="Sale"></img>
                <div class="sale__offer">
                    <h3>Udemy Flash Sale 24 Hours to save.</h3>
                    <p>Learn top Courses for just 499.Shop one time access Lifetime.</p>
                </div>
        </div>
    )
}
export default Sale