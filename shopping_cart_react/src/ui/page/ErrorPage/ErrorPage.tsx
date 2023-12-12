import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import Footer from "../../component/Footer/Footer";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import NotFound from "../../component/NotFound/NotFound";

export default function ErrorPage() {
    return (
        <>
            <ItemTab />

            <NavBar />

            <BottomWrapper />

            <NotFound title="OOps! "
                subtitle="GOTO HOMEPAGE  404 - PAGE NOT FOUND" />

            <Footer />
        </>
    )
}