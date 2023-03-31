import React from 'react';
import './Hooks.css';

function UseC(){

    function display1(){

    document.getElementById("disp1").innerHTML = "It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone."
    
        
       
    }

    function undisplay1(){

        document.getElementById('disp1').innerHTML = '';
    }

    function display2(){

        document.getElementById('disp2').innerHTML = "React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone."
    
    
    
    
    }

    function undisplay2(){

        document.getElementById('disp2').innerHTML = '';
    }

    function display3(){

        
        document.getElementById('disp3').innerHTML = 'Context is a React feature for sharing state between several parent and child components with the help of a provider. useContext is a hook that lets you easily “hook into” context, thereby accessing shared state. Using context is one method of state management, which can be combined with other methods such as Redux.'
    }

    function undisplay3(){

        document.getElementById('disp3').innerHTML = '';
    }


    function appearAnchors(){


        var button = document.getElementById('btn');
        button.style.marginLeft = '300px';
        button.style.fontSize = '25px';

        var anchor = document.createElement('div');
        button.appendChild(anchor);
        anchor.id = 'an';
        var anchors = document.getElementById('an');
        anchors.style.backgroundColor = 'blueviolet';
        anchors.style.fontSize = '50px';
        var a1 = document.createElement('a');
        a1.id= 'a1';
        a1.href = 'https://www.w3schools.com/react/react_hooks.asp';
        a1.innerHTML = 'W3SCHOOLS ,';
        anchors.appendChild(a1);
        <br></br>
        var a2 = document.createElement('a');
        a2.id = 'a2';
        a2.href = 'https://www.freecodecamp.org/news/react-hooks-fundamentals/#:~:text=React%20Hooks%20are%20simple%20JavaScript,updater%20function%20to%20update%20it.'
        a2.innerHTML = ' FREE-CODE-CAMP ,';
        anchors.appendChild(a2);
        var a3 = document.createElement('a');
        a3.href = 'https://legacy.reactjs.org/docs/hooks-overview.html';
        a3.innerHTML = ' ReactJS';
        anchors.appendChild(a3); 


    
    }


    return (
                <>

                <h1>Use Context</h1>

                <contextuse>
                
                <button id="inf1" onMouseOver={display1} onClick={undisplay1}><s>#</s> What is useContext hook used for?</button>
                <p id="disp1"></p>

                <button id='inf2' onMouseOver={display2} onClick={undisplay2}><s>#</s> What is the purpose of useContext in React?</button>
                <p id='disp2'></p>

                <button id='inf3' onMouseOver={display3} onClick={undisplay3}><s>#</s> What is the difference between context and useContext?</button>
                <p id='disp3'></p>
                
                </contextuse>

                <button id="btn" onClick={appearAnchors}>Some Sites To Study Hooks</button>
                
                </>
  


    );

}

export default UseC;