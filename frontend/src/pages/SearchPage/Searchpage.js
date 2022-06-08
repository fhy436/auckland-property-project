import HouseCards from "../../components/SearchComponents/HouseCards";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Searchpage = ({houses}) => {
    return (
        <>
        <Navbar/>
        <div className="search-page-container">
            {houses.map(houses => <HouseCards houses={houses} key={houses.__id} />)}
        </div>
        <Footer/>
        </>
    )
}

export default Searchpage;