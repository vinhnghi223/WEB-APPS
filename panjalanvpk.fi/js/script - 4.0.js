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

    //---------------------------------------------DATA INITIALIZATION---------------------------------------------
        vehicles={
            'Sammutusauto_KY431':{
                r:{
                    idTag: '#r',//rightview
                    leftPos: [65,200,350,540,720], 
                    topPos: [100,100,100,75,80],
                    width:[160,160,160,160,160],
                    height:[180,180,180,180,180]
                },
                l:{
                    idTag: '#l',//leftview
                    leftPos: [100,272,450,600,720],
                    topPos: [75,100,100,100,80] ,
                    width:[160,160,160,160,160],
                    height:[180,180,180,180,180]                            
                },
                b:{
                    idTag: '#b',//backview
                    leftPos: [115,115],
                    topPos: [0,178], 
                    width:[160,160],
                    height:[180,180]                        
                }
            },
            'Sailioauto_KY433':{
                r:{
                    idTag: '#r',
                    leftPos: [46,481,550,710],
                    topPos: [224,262,175,175],
                    width:[100,73,130,163],
                    height:[220,95,282,186] 
                },
                l:{
                    idTag: '#l',
                    leftPos: [50,250,360,780], //X
                    topPos: [170,200,260,180], //Y
                    width:[180,120,70,100],
                    height:[215,215,100,215]                            
                },
                b:{
                    idTag: '#b',
                    leftPos: [80],
                    topPos: [130], 
                    width:[270],
                    height:[300]                         
                }
            },
            'Miehistoauto_KY437':{
                r:{
                    idTag: '#r',//!
                    leftPos: [280,500],
                    topPos: [140,140],
                    width:[220,170],
                    height:[280,280] 
                },
                l:{
                    idTag: '#l',
                    leftPos: [50,250], 
                    topPos: [170,200], 
                    width:[180,120],
                    height:[215,215]                            
                },
                b:{
                    idTag: '#b',
                    leftPos: [80],
                    topPos: [130], 
                    width:[270],
                    height:[300]                         
                }
            }
        }

        toggleIdArray=['#auto1','#auto2', '#auto3', '#auto4', '#auto5'];

        // ---------------------------- FUNCTIONS INVOCATION ------------------------------------ 
        var vechileName=$('.vechile').attr('name');
        var vechileId=$('.vechile').attr('id');
        console.log(vechileName);
        console.log(vechileId);

        addDotsByVechileName(vechileName,vechileId);//should be vechileId as u dont need to add back or left if u r in rite

        //This bunch of code run everytime we click
        showImgOnHover(vechileName,vechileId,1);
        showImgOnHover(vechileName,vechileId,2);
        showImgOnHover(vechileName,vechileId,3);
        showImgOnHover(vechileName,vechileId,4);
        showImgOnHover(vechileName,vechileId,5); //what if we dont have a 5th position or more than 5 position?
 
        // ---------------------------- FUNCTIONS SETUP ------------------------------------       
        //ADD DOTS FUNCTION
        function addDotsByVechileName(vechileName,vehicleId){
            function addDot(imageId,leftPos,topPos, width, height){
                //console.log(imageId);
                addDotObject={
                    showOnLoad: false, //hot spot will NOT be open on page load
                    showOnlyOne: true,
                    width:180,
                    height:160
                };
                addDotObject.leftPos=leftPos;
                addDotObject.topPos=topPos;
                addDotObject.width=width;
                addDotObject.height=height;
                $(imageId).addDot(addDotObject);
            }

            function addByPerspective(perspective){ //add Dots by perspective
                var perspectiveObj=vehicles[vechileName][perspective];
                console.log(perspectiveObj);
                for(i=0;i<perspectiveObj.leftPos.length;i++){
                    addDot(
                        perspectiveObj.idTag,
                        perspectiveObj.leftPos[i],
                        perspectiveObj.topPos[i],
                        perspectiveObj.width[i],
                        perspectiveObj.height[i]
                    );

                    //BUG FIX: init height = 0
                    var heightAfterInit=perspectiveObj.height[i];
                    var bugTarget=perspectiveObj.idTag+'_'+(i+1)+'.defaultDot';
                    console.log(bugTarget);
                    $(bugTarget).height(heightAfterInit);
                }
            }
            
            var perspective=vehicleId.substr(vehicleId.length - 1);
            addByPerspective(perspective);
        }

        //SHOW IMG ON HOVER FUNCTION
        function showImgOnHover(vehicleName,vehicleId,order){
            var vehicleId='#'+vehicleId;
            var perspective=vehicleId.substr(vehicleId.length - 1);

            //var targetId=vehicleId+'_'+order+' *';
            var targetId=vehicleId+'_'+order;
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

                    //BUG FIX: widthAfterClik suddenly double its width
                    //TODO: why run multiple time while I just click once?
                    var widthAfterClik=vehicles[vechileName][perspective].width[order-1]
                    $(this).width(widthAfterClik);
                    console.log('EXPECT WIDTH AFTER CLICK: '+widthAfterClik);
                });
            });
        }

    });

})(jQuery, Drupal, this, this.document);
