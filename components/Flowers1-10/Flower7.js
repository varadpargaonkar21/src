function Flower7(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return(

             <>
             
             <img id="ci1" onClick={AllEffects} src="https://images.ctfassets.net/i3tkg7dt3kro/1Tu8I3491TeAw7QkxqsK7F/9f582b2c97a219bb767a4774daec9b91/shutterstock_1426052075-scaled.jpg" alt=""/>

             </>

    );

}

export default Flower7;