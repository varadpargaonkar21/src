function UseM(){



    function display1(){

        document.getElementById("disp1").innerHTML = "memo is a higher-order component to memoize an entire functional component. useMemo is a react hook to memoize a function within a functional component."
        
            
           
        }
    
        function undisplay1(){
    
            document.getElementById('disp1').innerHTML = '';
        }
    
        function display2(){
    
            document.getElementById('disp2').innerHTML = "The argument function of useMemo always returns the same value. The return value of the function is used as the memoized value. If it is always the same, there is no point in memoizing it. One possible case is that memoizing the function itself was intended instead of the return value."
        
        
        
        
        }
    
        function undisplay2(){
    
            document.getElementById('disp2').innerHTML = '';
        }
    
        function display3(){
    
            
            document.getElementById('disp3').innerHTML = 'In summary, the useEffect hook is used to perform side effects in a React component, while the useMemo hook is used to optimize the performance of a component by memoizing the results of a calculation or function.'
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

        <h1>Use Memo</h1>
        
        <memouse>
                
                <button id="inf1" onMouseOver={display1} onClick={undisplay1}><s>#</s> What is the difference between Memoization and useMemo?</button>
                <p id="disp1"></p>

                <button id='inf2' onMouseOver={display2} onClick={undisplay2}><s>#</s> Does useMemo return the same value?</button>
                <p id='disp2'></p>

                <button id='inf3' onMouseOver={display3} onClick={undisplay3}><s>#</s> What is useMemo vs Useeffect?</button>
                <p id='disp3'></p>
                
                </memouse>

                <button id="btn" onClick={appearAnchors}>Some Sites To Study Hooks</button>

        
        
        
        </>
    
    
        );
}

export default UseM;