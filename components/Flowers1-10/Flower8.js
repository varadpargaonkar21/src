function Flower8(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
           
        <>
        
        <img id="ci1" onClick={AllEffects} src="https://i.natgeofe.com/n/57f411cd-dfe6-41a6-8d40-21ba583eccfb/lake-elsinore-california.jpg" alt=""/>
        
        </>


    );

}

export default Flower8;