function Flower5(){


    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return(

                 <>
                 
                 <img id="ci1" onClick={AllEffects} src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?cs=srgb&dl=pexels-marianna-ole-757889.jpg&fm=jpg" alt=""/>
                 
                 </>

    );

}

export default Flower5;