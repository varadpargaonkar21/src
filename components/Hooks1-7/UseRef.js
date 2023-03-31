function UseRef(){



    function display1(){

        document.getElementById("disp1").innerHTML = "Reduced Re-renders: The useRef hook can help prevent unnecessary re-renders of components, which can improve the overall performance of your React app. By storing a mutable value in a ref, you can ensure that a component only re-renders when necessary, which can lead to faster load times and a smoother user experience."
        
            
           
        }
    
        function undisplay1(){
    
            document.getElementById('disp1').innerHTML = '';
        }
    
        function display2(){
    
            document.getElementById('disp2').innerHTML = "useRef is one of the many built-in hooks provided by React. It is useful for persisting mutable data between component renders. There are a couple of specific uses cases for useRef and refs that I'd like to call out. Modifying a child DOM node outside of the typical React data flow."
        
        
        
        
        }
    
        function undisplay2(){
    
            document.getElementById('disp2').innerHTML = '';
        }
    
        function display3(){
    
            
            document.getElementById('disp3').innerHTML = 'Difference between Ref and useRef​ As discussed in the previous sections of this article, we can understand clearly that useRef is used to create a reference object, while ref is used to access and assign DOM nodes or react components inside the render method to a reference object.'
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
        
        <h1>Use Ref</h1>

        <refuse>
                
                <button id="inf1" onMouseOver={display1} onClick={undisplay1}><s>#</s> What are the benefits of using useRef?</button>
                <p id="disp1"></p>

                <button id='inf2' onMouseOver={display2} onClick={undisplay2}><s>#</s> Should we use useRef in React?</button>
                <p id='disp2'></p>

                <button id='inf3' onMouseOver={display3} onClick={undisplay3}><s>#</s> What is the use of ref and useRef?</button>
                <p id='disp3'></p>
                
                </refuse>

                <button id="btn" onClick={appearAnchors}>Some Sites To Study Hooks</button>


        
        </>

    );
}

export default UseRef;