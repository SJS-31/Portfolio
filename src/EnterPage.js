import React from "react";


function EnterPage(){
    const text1 = "THE MEN WHO PASSES THE SENTENCE ";
    const text2 = "SHOULD SWING THE SWORD ";
    const text3 = "IF YOU WOULD TAKE A MEN'S LIFE ";
    const text4 = "YOU OWE IT TO HIM TO LOOK INTO HIS EYES";

    const splitText1 = text1.split("").map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * 11.25}deg)`}}>
            {char}
        </span>
    ));

    const splitText2 = text2.split("").map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * 27.69}deg)`}}>
            {char}
        </span>
    ));

    const splitText3 = text3.split("").map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * 11.613}deg)`}}>
            {char}
        </span>
    ));

    const splitText4 = text4.split("").map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * 9}deg)`}}>
            {char}
        </span>
    ));

    return (
        <div className="enter-page">
            <div className="circle-enter circle1"><div className="circle-text1">{splitText1}</div></div>
            <div className="circle-enter circle2"><div className="circle-text2">{splitText2}</div></div>
            <div className="circle-enter circle3"><div className="circle-text3">{splitText3}</div></div>
            <div className="circle-enter circle4"><div className="circle-text4">{splitText4}</div></div>
        </div>
    )
}

export default EnterPage;