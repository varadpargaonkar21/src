function UseState(){


    function display1(){

        document.getElementById("disp1").innerHTML = "useState() anytime you have to create a state. The useState() hook takes in the initial value of the state variable as an argument. This value could be of any data type, such as string, number, object, array, and lots more."
        
            
           
        }
    
        function undisplay1(){
    
            document.getElementById('disp1').innerHTML = '';
        }
    
        function display2(){
    
            document.getElementById('disp2').innerHTML = "Line 1: We import the useState Hook from React. It lets us keep local state in a function component. Line 4: Inside the Example component, we declare a new state variable by calling the useState Hook. It returns a pair of values, to which we give names."
        
        
        
        
        }
    
        function undisplay2(){
    
            document.getElementById('disp2').innerHTML = '';
        }
    
        function display3(){
    
            
            document.getElementById('disp3').innerHTML = 'The useState hook can set primitive types in the application state. The primitive types include number , string , and boolean .'
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

        <h1>Use State</h1>

        <stateuse>
                
                <button id="inf1" onMouseOver={display1} onClick={undisplay1}><s>#</s> When should you use useState?</button>
                <p id="disp1"></p>

                <button id='inf2' onMouseOver={display2} onClick={undisplay2}><s>#</s> Why do we import useState in React?</button>
                <p id='disp2'></p>

                <button id='inf3' onMouseOver={display3} onClick={undisplay3}><s>#</s> What are the types of useState in react JS?</button>
                <p id='disp3'></p>
                
                </stateuse>

                <button id="btn" onClick={appearAnchors}>Some Sites To Study Hooks</button>

        
        </>
    );
}


export default UseState;