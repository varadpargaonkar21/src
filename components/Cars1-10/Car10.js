function Car10(){


    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
             <>
             
             <img id="ci1" onClick={AllEffects} src="https://robbreport.com/wp-content/uploads/2022/11/2-7.jpg?w=1000" alt=""/>
             
             </>


    );

}


export default Car10;