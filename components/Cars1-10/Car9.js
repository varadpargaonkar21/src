function Car9(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
             <>
             
             <img id="ci1" onClick={AllEffects} src="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg" alt=""/>
             
             </>


    );

}


export default Car9;