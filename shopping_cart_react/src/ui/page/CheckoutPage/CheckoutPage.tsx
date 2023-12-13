import { useState } from "react";
import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import Footer from "../../component/Footer/Footer";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import TopContainer from "../../component/TopContainer/TopContainer";
import TransactionDetail from "../../component/Transaction/TransactionDetail";

export default function Checkout() {
    return <>
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

        <TransactionDetail />
        <Footer />

    </>
}