import { useState } from "react";
import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import Footer from "../../component/Footer/Footer";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import TopContainer from "../../component/TopContainer/TopContainer";
import TransactionDetail from "../../component/Transaction/TransactionDetail";
import LogoImage from "../../component/LogoImage/LogoImage";

export default function Checkout() {
    return <>
        <TopContainer />
        <LogoImage />
        <ItemTab />

        <NavBar />

        <BottomWrapper />

        <TransactionDetail />
        <Footer />
    </>
}