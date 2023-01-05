import React from "react";
import {doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect } from "react";
import { useState } from "react";
import { products } from "../../Data/products";
/*
const cargaFirebase = () => {
    
    useEffect (() =>{
        const db = getFirestore ();
        const productCollection = collection(db, "Productos");
        
        products.forEach((item) => {
            addDoc(productCollection,{item})
        })           
    }, []);

}

export default cargaFirebase*/