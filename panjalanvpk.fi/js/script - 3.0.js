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

    //---------------------------------------------SET UP---------------------------------------------
        vehicles={
            'Sammutusauto_KY431':{
                rightView:{
                    idTag: '#Sammutusauto_KY431_r',//r
                    leftPos: [65,200,350,540,720],
                    topPos: [100,100,100,75,80]
                },
                leftView:{
                    idTag: '#Sammutusauto_KY431_l',//l
                    leftPos: [100,272,450,600,720],
                    topPos: [75,100,100,100,80]         
                },
                backView:{
                    idTag: '#Sammutusauto_KY431_b',//b
                    leftPos: [115,115],
                    topPos: [178,0]       
                }
            }
        }

        toggleIdArray=['#auto1','#auto2', '#auto3', '#auto4', '#auto5'];

        var vechileName=$('.vechile').attr('name');
        var vechileId=$('.vechile').attr('id');
        console.log(vechileName);
        console.log(vechileId);

        addDotsByVechileName(vechileName);
        showImgOnHover(vechileName,vechileId,1);
        showImgOnHover(vechileName,vechileId,2);
        showImgOnHover(vechileName,vechileId,3);
        showImgOnHover(vechileName,vechileId,4);
        showImgOnHover(vechileName,vechileId,5); //what if we dont have a 5th position or more than 5 position?
        
        //ADD DOTS FUNCTION
        function addDotsByVechileName(vechileName){
            function addDot(imageId,leftPos,topPos){
                //console.log(imageId);
                addDotObject={
                    showOnLoad: false, //hot spot will NOT be open on page load
                    showOnlyOne: true,
                };
                addDotObject.leftPos=leftPos;
                addDotObject.topPos=topPos;
                addDotObject.width=160;
                addDotObject.height=180;
                $(imageId).addDot(addDotObject);
            }

            function addByPerspective(perspective){ //add Dots by perspective
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

        //SHOW IMG ON HOVER FUNCTION
        function showImgOnHover(vehicleName,vehicleId,order){
            var vehicleId='#'+vehicleId;
            var perspective=vehicleId.substr(vehicleId.length - 1);

            var targetId=vehicleId+'_'+order+' *';
            var imgSelector=vehicleId+' img';
            var imgName=perspective+order;
            var scrImg='../sites/all/themes/anjalanvpk/images/'+vehicleName+'/'+imgName+'.jpg';

            //console.log('targetId:',targetId);
            //console.log('imgSelector',imgSelector);
            $(targetId).hover(function() {
                console.log(targetId);
                $(imgSelector).attr('src',scrImg);
                //console.log("scrImg: "+scrImg);
                //console.log(this);
                $(this).click(function() {
                    
                    //console.log("order: "+order);
                    //console.log("toggleIdArray.length: "+toggleIdArray.length);
                    for(i=0;i<toggleIdArray.length;i++){
                        //console.log("i: "+i);
                        //console.log("order: "+(order));
                        //console.log("order-1: "+(order-1));
                        if(i==(order-1)){ //notice: minus 1
                            $(toggleIdArray[i]).toggle();
                            //console.log("appear: "+toggleIdArray[i]);
                        }else{
                            $(toggleIdArray[i]).css('display','none');
                            //console.log("disappear: "+toggleIdArray[i]);
                        }
                    }

                    $(this).width(160);
                    $('.defaultDot').width(160);

                });
            });
        }

    });

})(jQuery, Drupal, this, this.document);
