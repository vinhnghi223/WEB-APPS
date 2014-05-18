/**
http://anjalanvpk.fi/sis%C3%A4lt%C3%B6/ajoneuvot
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
    $(document).ready(function () {

//SET UP FOR ALL VECHICLES
    vehicles={
        'Sammutusauto_KY431':{
            rightView:{
                //idTag: '#addDot_demo_auto',
                idTag: '#Sammutusauto_KY431',
                leftPos: [65,200,350,540,720],
                topPos: [100,100,100,75,80]
            },
            leftView:{
                idTag: '#addDot_paloauto2',
                leftPos: [600,720,450,272,100],
                topPos: [100,80,100,100,75] //same?          
            },
            backView:{
                idTag: '#addDot_paloauto_back',
                leftPos: [115,115],
                topPos: [178,0]       
            }
        }
    }

    toggleIdArray=['#auto1','#auto2', '#auto3', '#auto4', '#auto5'];
    
    function showImgOnHover(targetId,imgId,toggleIdArrayPos,vehicleName,imgName){
        
        var imgSelector=imgId+' img';
        var scrImg='../sites/all/themes/anjalanvpk/images/'+vehicleName+'/'+imgName+'.jpg';
        //var scrImg='../sites/all/themes/anjalanvpk/images/'+imgName+'.jpg';
        //console.log(scrImg);
        var displayId=''
        $(targetId).hover(function() {
            //console.log(targetId);
            $(imgSelector).attr('src',scrImg);
            //console.log("scrImg: "+scrImg);

            $(this).click(function() {
                /*console.log("toggleIdArrayPos: "+toggleIdArrayPos);
                console.log("toggleIdArray.length: "+toggleIdArray.length);*/
                for(i=0;i<toggleIdArray.length;i++){
                    //console.log("i: "+i);
                    //console.log("toggleIdArrayPos: "+(toggleIdArrayPos));
                    //console.log("toggleIdArrayPos-1: "+(toggleIdArrayPos-1));
                    if(i==(toggleIdArrayPos-1)){ //notice: minus 1
                        $(toggleIdArray[i]).toggle();
                        //console.log("appear: "+toggleIdArray[i]);
                    }else{
                        $(toggleIdArray[i]).css('display','none');
                        //console.log("disappear: "+toggleIdArray[i]);
                    }
                }
            });
        });
    }
    //showImgOnHoverAdvance('Sammutusauto_KY431','r',1);
    function showImgOnHoverAdvance(vehicleName,perspective,order){
        var vehicleId='#'+vehicleName;
        var targetId=vehicleId+'_'+order+' *';
        console.log('targetId:',targetId);
        var imgSelector=vehicleId+' img';
        console.log('imgSelector',imgSelector);
        var imgName=perspective+order;
        var scrImg='../sites/all/themes/anjalanvpk/images/'+vehicleName+'/'+imgName+'.jpg';
        var displayId=''
        $(targetId).hover(function() {
            console.log(targetId);
            $(imgSelector).attr('src',scrImg);
            console.log("scrImg: "+scrImg);
            console.log(this);
            $(this).click(function() {
                
                console.log("order: "+order);
                console.log("toggleIdArray.length: "+toggleIdArray.length);
                for(i=0;i<toggleIdArray.length;i++){
                    //console.log("i: "+i);
                    //console.log("order: "+(order));
                    //console.log("order-1: "+(order-1));
                    if(i==(order-1)){ //notice: minus 1
                        $(toggleIdArray[i]).toggle();
                        console.log("appear: "+toggleIdArray[i]);
                    }else{
                        $(toggleIdArray[i]).css('display','none');
                        console.log("disappear: "+toggleIdArray[i]);
                    }
                }

                $(this).width(160);
                $('.defaultDot').width(160);

            });
        });
    }



    //ADD DOTS
    function addDotsByVechileName(vechileName){
        function addDot(imageId,leftPos,topPos){
            //console.log(imageId);
            addDotObject={
                leftPos: 0, //Place hot spot on specified left position
                topPos: 0, //Place hot spot on specified top position
                showOnLoad: false, //hot spot will NOT be open on page load
                //aniType: null //hot spot will open/close with slide effect
                //aniSpeed: null //The duration of the animation (seconds)
                showOnlyOne: true,
                width: 160, //width of hot spot
                height: 180
            };
            addDotObject.leftPos=leftPos;
            addDotObject.topPos=topPos;
            $(imageId).addDot(addDotObject);
        }

        function addByPerspective(perspective){//rightView
            var perspectiveObj=vehicles[vechileName][perspective];
            console.log(perspectiveObj);
            for(i=0;i<perspectiveObj.leftPos.length;i++){
                addDot(perspectiveObj.idTag,perspectiveObj.leftPos[i],perspectiveObj.topPos[i]);
            }
        }
        addByPerspective('rightView');
        addByPerspective('leftView');
        addByPerspective('backView');
    }

    addDotsByVechileName('Sammutusauto_KY431');
    
//HOVER
    showImgOnHoverAdvance('Sammutusauto_KY431','r',1);
    showImgOnHoverAdvance('Sammutusauto_KY431','r',2);
    showImgOnHoverAdvance('Sammutusauto_KY431','r',3);
    showImgOnHoverAdvance('Sammutusauto_KY431','r',4);
    showImgOnHoverAdvance('Sammutusauto_KY431','r',5);


    


    showImgOnHover('#addDot_paloauto2_5 *','#addDot_paloauto2',1,'Sammutusauto_KY431','l1');
    showImgOnHover('#addDot_paloauto2_4 *','#addDot_paloauto2',2,'Sammutusauto_KY431','l2');
    showImgOnHover('#addDot_paloauto2_3 *','#addDot_paloauto2',3,'Sammutusauto_KY431','l3');
    showImgOnHover('#addDot_paloauto2_2 *','#addDot_paloauto2',4,'Sammutusauto_KY431','l4');
    showImgOnHover('#addDot_paloauto2_1 *','#addDot_paloauto2',5,'Sammutusauto_KY431','l5');

    //showImgOnHover('#addDot_paloauto_back_3 *','#addDot_paloauto_back',1,'Sammutusauto_KY431','b1');
    showImgOnHover('#addDot_paloauto_back_2 *','#addDot_paloauto_back',1,'Sammutusauto_KY431','b1');
    showImgOnHover('#addDot_paloauto_back_1 *','#addDot_paloauto_back',2,'Sammutusauto_KY431','b2');

       /* $('#addDot_paloauto_back_1').click(function() {
            $('#auto4').toggle();
        });

        $('#addDot_paloauto_back_1 *').mouseenter(function() {
            $('#addDot_paloauto_back img').attr('src','../sites/all/themes/anjalanvpk/images/peraauki.jpg');
        });
        $('#addDot_paloauto_back_2 *').mouseenter(function() {
            $('#addDot_paloauto_back img').attr('src','../sites/all/themes/anjalanvpk/images/peratikkaat.jpg');
        });
        $('#addDot_paloauto_back_1 *, #addDot_paloauto_back_2 *').mouseleave(function() {
            $('#addDot_paloauto_back img').attr('src','../sites/all/themes/anjalanvpk/images/pera.jpg');
        });*/


//Second car


      // You can add more hot spots for Computer section so on...
      });


})(jQuery, Drupal, this, this.document);

//LEGACY CODE
    //both right and left
     /*var vehicleName='Sammutusauto_KY431';

    console.log(vehicles[vehicleName].rightView.leftPos.length);

    for(i=1;i<=vehicles[vehicleName].rightView.leftPos.length;i++){
        var rightViewId='#addDot_demo_auto';
        var leftViewId='#addDot_paloauto2';

        stringId='_'+i+' *';
        console.log(stringId);

        rightViewId+=stringId;
        console.log(rightViewId);

        leftViewId+=stringId;
        console.log(leftViewId);

        toggleIdArrayPos=6-i;

        showImgOnHover(rightViewId,rightViewId,toggleIdArrayPos,vehicleName,'r'+toggleIdArrayPos);
        showImgOnHover(leftViewId,leftViewId,toggleIdArrayPos,vehicleName,'l'+toggleIdArrayPos);
    }*/