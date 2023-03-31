function Car7(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
             <>
             
             <img id="ci1" onClick={AllEffects} src="https://images.news18.com/ibnlive/uploads/2022/04/tata-avinya-concept.jpg" alt=""/>
             
             </>


    );

}


export default Car7;