import BrandName from "../../components/Brand-name/BrandName";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            {/* banner section here */}
            <Banner />

            {/* content are here */}
            <div className=" max-w-7xl md:mx-auto px-6 lg:px-0 my-14">
                <BrandName/>
            </div>
            {/* footer section here */}
            <Footer/>
        </div>
    );
};

export default Home;