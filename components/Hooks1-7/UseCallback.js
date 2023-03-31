import React from "react";

function UseCall(){


    function display1(){

        document.getElementById("disp1").innerHTML = "One reason to use useCallback is to prevent a component from re-rendering unless its props have changed. In this example, you might think that the Todos component will not re-render unless the todos change: This is a similar example to the one in the React.memo section."
        
            
           
        }
    
        function undisplay1(){
    
            document.getElementById('disp1').innerHTML = '';
        }
    
        function display2(){
    
            document.getElementById('disp2').innerHTML = "useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result ."
        
        
        
        
        }
    
        function undisplay2(){
    
            document.getElementById('disp2').innerHTML = '';
        }
    
        function display3(){
    
            
            document.getElementById('disp3').innerHTML = 'useCallback() is a hook that helps us to improve the react component performance by memoizing or caching a function between re-renders. When a component re-renders, every function inside the component is recreated, and therefore the memory location where these functions are stored gets changed as well.'
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

    


    return(

       <>

       <h1>Use Callback</h1>

        
       
       <callbackuse>
                
                <button id="inf1" onMouseOver={display1} onClick={undisplay1}><s>#</s> What is the use of useCallback in React?</button>
                <p id="disp1"></p>

                <button id='inf2' onMouseOver={display2} onClick={undisplay2}><s>#</s> What is the opposite of useCallback?</button>
                <p id='disp2'></p>

                <button id='inf3' onMouseOver={display3} onClick={undisplay3}><s>#</s> How does useCallback improve performance?</button>
                <p id='disp3'></p>
                
                </callbackuse>

                <button id="btn" onClick={appearAnchors}>Some Sites To Study Hooks</button>
       
       </>


    );

   
    
}


export default UseCall;