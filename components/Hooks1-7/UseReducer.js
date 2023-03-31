function UseRed(){

     
    function display1(){

        document.getElementById("disp1").innerHTML = "The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second."
        
            
           
        }
    
        function undisplay1(){
    
            document.getElementById('disp1').innerHTML = '';
        }
    
        function display2(){
    
            document.getElementById('disp2').innerHTML = "useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks."
        
        
        
        
        }
    
        function undisplay2(){
    
            document.getElementById('disp2').innerHTML = '';
        }
    
        function display3(){
    
            
            document.getElementById('disp3').innerHTML = 'useReducer takes in two arguments (it can take more see above for more details). The first of those arguments is a reducer function. The second is the initial state. useReducer returns a pair just like useState.'
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

        <h1>Use Reducer</h1>

        <reduceuse>
                
                <button id="inf1" onMouseOver={display1} onClick={undisplay1}><s>#</s> What is useReducer used for?</button>
                <p id="disp1"></p>

                <button id='inf2' onMouseOver={display2} onClick={undisplay2}><s>#</s> What is the use of useReducer in React?</button>
                <p id='disp2'></p>

                <button id='inf3' onMouseOver={display3} onClick={undisplay3}><s>#</s> How do you use useReducer in form?</button>
                <p id='disp3'></p>
                
                </reduceuse>

                <button id="btn" onClick={appearAnchors}>Some Sites To Study Hooks</button>

        
        </>
    );

}


export default UseRed;