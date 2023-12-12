import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import Footer from "../../component/Footer/Footer";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import NotFound from "../../component/NotFound/NotFound";
import TopContainer from "../../component/TopContainer/TopContainer";

export default function ErrorPage() {
    return (
        <>
            <title>Venturenix Lab React Project</title>
            <TopContainer />
            <img
                alt="Logo"
                src="https://venturenixlab.co/wp-content/uploads/2022/05/cropped-cropped-Vlab-horizontal-logo.png"
                title="company_logo"
                width={500}
                style={{ display: 'block', margin: 'auto' }}
            />

            <ItemTab />

            <NavBar />

            <BottomWrapper />

            <NotFound title="OOps! "
                subtitle="GOTO HOMEPAGE  404 - PAGE NOT FOUND" />

            <Footer />
        </>
    )
}