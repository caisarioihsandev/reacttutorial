import React from "react";
import Produk from "./Produk";

class Beranda extends React.Component {
    render() {
        return <div>
            <Produk nama = "Macbook Pro 2020" stock = "10" harga = "33.000.000"/>
            <Produk nama = "Macbook Pro 2019" stock = "15" harga = "53.000.000"/>
            <Produk nama = "Macbook Pro 2021" stock = "14" harga = "33.000.000"/>
            <Produk nama = "Macbook Pro 2022" stock = "50" harga = "63.000.000"/>
            <Produk nama = "Macbook Pro 2023" stock = "100" harga = "37.000.000"/>
            <Produk nama = "Macbook Pro 2024" stock = "100" harga = "39.300.000"/>
            
        </div>;
    }
}

export default Beranda;