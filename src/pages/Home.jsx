import Header from "../components/Header"
import ProducList from "../components/ProducList"
import Footer from "../components/Footer"
function Home() {
    return (
        <div className="main-layout">
            <Header
                className="layout-header"
                title="fall"
                slogan="Slogan"
            />
            <ProducList className="layout-content" />
            <Footer className="layout-footer" />
        </div>
    );
}
export default Home;