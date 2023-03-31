function Car5(){


    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'


    }

    return (
             <>
             
             <img id="ci1" onClick={AllEffects} src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Porsche-Taycan-190820221318.jpg&w=872&h=578&q=75&c=1" alt=""/>
             
             </>


    );

}


export default Car5;