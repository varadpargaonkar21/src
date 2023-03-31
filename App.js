import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Car1 from "./components/Cars1-10/Car1";
import Car2 from "./components/Cars1-10/Car2";
import Car3 from "./components/Cars1-10/Car3";
import Car4 from "./components/Cars1-10/Car4";
import Car5 from "./components/Cars1-10/Car5";
import Car6 from "./components/Cars1-10/Car6";
import Car7 from "./components/Cars1-10/Car7";
import Car8 from "./components/Cars1-10/Car8";
import Car9 from "./components/Cars1-10/Car9";
import Car10 from "./components/Cars1-10/Car10";
import Flower1 from "./components/Flowers1-10/Flower1";
import Flower2 from "./components/Flowers1-10/Flower2";
import Flower3 from "./components/Flowers1-10/Flower3";
import Flower4 from "./components/Flowers1-10/Flower4";
import Flower5 from "./components/Flowers1-10/Flower5";
import Flower6 from "./components/Flowers1-10/Flower6";
import Flower7 from "./components/Flowers1-10/Flower7";
import Flower8 from "./components/Flowers1-10/Flower8";
import Flower9 from "./components/Flowers1-10/Flower9";
import Flower10 from "./components/Flowers1-10/Flower10";
import UseC from "./components/Hooks1-7/UseContext";
import UseCall from "./components/Hooks1-7/UseCallback";
import UseE from "./components/Hooks1-7/UseEffect";
import UseM from "./components/Hooks1-7/UseMemo";
import UseRed from "./components/Hooks1-7/UseReducer";
import UseState from "./components/Hooks1-7/UseState";
import UseRef from "./components/Hooks1-7/UseRef";
import Bird1 from "./components/Birds1-10/Bird1";
import Bird2 from "./components/Birds1-10/Bird2";
import Bird3 from "./components/Birds1-10/Bird3";
import Bird4 from "./components/Birds1-10/Bird4";
import Bird5 from "./components/Birds1-10/Bird5";
import Bird6 from "./components/Birds1-10/Bird6";
import Bird7 from "./components/Birds1-10/Bird7";
import Bird8 from "./components/Birds1-10/Bird8";
import Bird9 from "./components/Birds1-10/Bird9";
import Bird10 from "./components/Birds1-10/Bird10";

function Reactt() {
  const [hoverC, setHoverC] = useState(0);
  const [hoverF, setHoverF] = useState(0);
  const [hoverB, setHoverB] = useState(0);
  const [hoverH, setHoverH] = useState(0);
  const [main, setmain] = useState(true);
  const [car1, setCar1] = useState(false);
  const [car2, setCar2] = useState(false);
  const [car3, setCar3] = useState(false);
  const [car4, setCar4] = useState(false);
  const [car5, setCar5] = useState(false);
  const [car6, setCar6] = useState(false);
  const [car7, setCar7] = useState(false);
  const [car8, setCar8] = useState(false);
  const [car9, setCar9] = useState(false);
  const [car10, setCar10] = useState(false);

  const [flower1, setFlower1] = useState(false);
  const [flower2, setFlower2] = useState(false);
  const [flower3, setFlower3] = useState(false);
  const [flower4, setFlower4] = useState(false);
  const [flower5, setFlower5] = useState(false);
  const [flower6, setFlower6] = useState(false);
  const [flower7, setFlower7] = useState(false);
  const [flower8, setFlower8] = useState(false);
  const [flower9, setFlower9] = useState(false);
  const [flower10, setFlower10] = useState(false);

  const [bird1, setBird1] = useState(false);
  const [bird2, setBird2] = useState(false);
  const [bird3, setBird3] = useState(false);
  const [bird4, setBird4] = useState(false);
  const [bird5, setBird5] = useState(false);
  const [bird6, setBird6] = useState(false);
  const [bird7, setBird7] = useState(false);
  const [bird8, setBird8] = useState(false);
  const [bird9, setBird9] = useState(false);
  const [bird10, setBird10] = useState(false);

  const [useS, setUseS] = useState(false);
  const [useE, setUseE] = useState(false);
  const [useC, setUseC] = useState(false);
  const [useR, setUseR] = useState(false);
  const [useRed, setUseRed] = useState(false);
  const [useCall, setUseCall] = useState(false);
  const [useM, setUseM] = useState(false);

  

  
  
  useEffect(()=>{

    if (hoverC === 1) {
      setmain(false);
      setCar1(true);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);
    } 
     else if (hoverC === 2) {

      setmain(false);
      setCar1(false);
      setCar2(true);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



             
    }
    
    else if (hoverC === 3) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(true);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

    else if (hoverC === 4) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(true);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

    else if (hoverC === 5) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(true);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

    else if (hoverC === 6) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(true);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

    else if (hoverC === 7){

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(true);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

    else if (hoverC === 8) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(true);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

    else if (hoverC === 9) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(true);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

    else if (hoverC === 10){

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(true);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



       
    }

  },[hoverC])

  useEffect(()=>{
   
    if (hoverF === 1) {
      
      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(true);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);


    }

    else if (hoverF === 2) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(true);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 3) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(true);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 4) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(true);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 5) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(true);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 6) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(true);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 7) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(true);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 8) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(true);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 9) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(true);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverF === 10) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(true);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

  },[hoverF])


  useEffect(() => {

    if (hoverB === 1) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(true);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverB === 2) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(true);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);




    }

    else if (hoverB === 3) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(true);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }

    else if (hoverB === 4) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(true);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }

    else if (hoverB === 5) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(true);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }

    else if (hoverB === 6) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(true);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }

    else if (hoverB === 7) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(true);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }

    else if (hoverB === 8) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(true);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }

    else if (hoverB === 9) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(true);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }

    else if (hoverB === 10) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(true);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);



      
    }


  },[hoverB])

  useEffect(() => {

    if (hoverH === 1 ){

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(true);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);






    }


    else if (hoverH === 2 ) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(true);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);






    }

    else if (hoverH === 3 ) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(true);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(false);





      
    }

    else if (hoverH === 4 ) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(true);
      setUseRed(false);
      setUseS(false);
      setUseR(false);





      
    }

    else if (hoverH === 5 ) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(true);
      setUseS(false);
      setUseR(false);





      
    }

    else if (hoverH === 6 ) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(true);
      setUseR(false);





      
    }

    else if (hoverH === 7 ) {

      setmain(false);
      setCar1(false);
      setCar2(false);
      setCar3(false);
      setCar4(false);
      setCar5(false);
      setCar6(false);
      setCar7(false);
      setCar8(false);
      setCar9(false);
      setCar10(false);
      setFlower1(false);
      setFlower2(false);
      setFlower3(false);
      setFlower4(false);
      setFlower5(false);
      setFlower6(false);
      setFlower7(false);
      setFlower8(false);
      setFlower9(false);
      setFlower10(false);
      setBird1(false);
      setBird2(false);
      setBird3(false);
      setBird4(false);
      setBird5(false);
      setBird6(false);
      setBird7(false);
      setBird8(false);
      setBird9(false);
      setBird10(false);
      setUseC(false);
      setUseCall(false);
      setUseE(false);
      setUseM(false);
      setUseRed(false);
      setUseS(false);
      setUseR(true);





      
    }


  },[hoverH])

  function handleCarTextHover(e){

    e.preventDefault();
    setHoverC(hoverC+1);

     
  }

  function handleCarTextClick(e){
    
    e.preventDefault();
    setHoverC(hoverC-1);

  }

  function handleFlowerTextHover(e){
           
    e.preventDefault();
    setHoverF(hoverF+1);

    

   }

   function handleFlowerTextClick(e){

            
    e.preventDefault();
    setHoverF(hoverF-1);

   }

   function handleBirdTextHover(e){
          
    e.preventDefault();
    setHoverB(hoverB+1);

   }

   function handleBirdTextClick(e){
         
    e.preventDefault();
    setHoverB(hoverB-1);
   }

   function handleHookTextHover(e){

    e.preventDefault();
    setHoverH(hoverH+1);

   }

   function handleHookTextClick(e){

    e.preventDefault();
    setHoverH(hoverH-1);

   }
  
  
  
  return (
    <>
      <div className="leftside">
        <button onMouseOver={handleCarTextHover} onClick={handleCarTextClick}>Cars</button>
        <button onMouseOver={handleFlowerTextHover} onClick={handleFlowerTextClick}>Flowers</button>
        <button onMouseOver={handleBirdTextHover} onClick={handleBirdTextClick}>Birds</button>
        <button onMouseOver={handleHookTextHover} onClick={handleHookTextClick}>Hooks</button>
      </div>

      {main && <Main />}
      {car1 && <Car1 />}
      {car2 && <Car2 />}
      {car3 && <Car3 />}
      {car4 && <Car4 />}
      {car5 && <Car5 />}
      {car6 && <Car6 />}
      {car7 && <Car7 />}
      {car8 && <Car8 />}
      {car9 && <Car9 />}
      {car10 && <Car10 />}
      {flower1 && <Flower1 />}
      {flower2 && <Flower2 />}
      {flower3 && <Flower3 />}
      {flower4 && <Flower4 />}
      {flower5 && <Flower5 />}
      {flower6 && <Flower6 />}
      {flower7 && <Flower7 />}
      {flower8 && <Flower8 />}
      {flower9 && <Flower9 />}
      {flower10 && <Flower10 />}
      {useC && <UseC/>}
      {useCall && <UseCall/>}
      {useE && <UseE/>}
      {useM && <UseM/>}
      {useRed && <UseRed/>}
      {useS && <UseState/>}
      {useR && <UseRef/>}
      {bird1 && <Bird1/>}
      {bird2 && <Bird2/>}
      {bird3 && <Bird3/>}
      {bird4 && <Bird4/>}
      {bird5 && <Bird5/>}
      {bird6 && <Bird6/>}
      {bird7 && <Bird7/>}
      {bird8 && <Bird8/>}
      {bird9 && <Bird9/>}
      {bird10 && <Bird10/>}
    </>
  );
}

export default Reactt;
