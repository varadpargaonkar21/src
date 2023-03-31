function Bird10(){

    function AE(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'


    }

    return (

        <>
        <img id="ci1" onClick={AE} src="https://www.allaboutbirds.org/news/wp-content/uploads/2007/01/geese-v-720x405.jpg" alt=""/>
        </>
    );
}

export default Bird10;