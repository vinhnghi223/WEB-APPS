//http://anjalanvpk.fi/sis%C3%A4lt%C3%B6/ajoneuvot

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
                    leftPos: [225], 
                    topPos: [170], 
                    width:[180],
                    height:[250]                           
                },
                b:{
                    idTag: '#b',
                    leftPos: [80],
                    topPos: [130], 
                    width:[270],
                    height:[300]                         
                }
            },
            'Miehistoauto_RKY4372':{
                r:{
                    idTag: '#r',//!
                    leftPos: [280,500],
                    topPos: [140,140],
                    width:[220,170],
                    height:[280,280] 
                },
                l:{
                    idTag: '#l',
                    leftPos: [225], 
                    topPos: [170], 
                    width:[180],
                    height:[250]                           
                },
                b:{
                    idTag: '#b',
                    leftPos: [80],
                    topPos: [50], 
                    width:[270],
                    height:[300]                         
                }
            },
            'Kalustoauto_KY4394':{
                r:{
                    idTag: '#r',//!
                    leftPos: [320,680],
                    topPos: [220,80],
                    width:[200,200],
                    height:[250,275] 
                },
                l:{
                    idTag: '#l',
                    leftPos: [50,420], 
                    topPos: [50,240], 
                    width:[180,180],
                    height:[250,100]                           
                },
                b:{//not impl
                    idTag: '#b',
                    leftPos: [80],
                    topPos: [50], 
                    width:[270],
                    height:[300]                         
                }
            }  
        }

        toggleIdArray=['#auto1','#auto2', '#auto3', '#auto4', '#auto5'];

        var vechileName=$('.vechile').attr('name');
        var perspective=$('.vechile').attr('id');

        // ---------------------------- FUNCTIONS INVOCATION ------------------------------------ 
        setUp(vechileName,perspective);
 
        // ---------------------------- FUNCTIONS SETUP ------------------------------------       
        
        function setUp(vechileName,vehicleId){
            var perspective=vehicleId.substr(vehicleId.length - 1);
            
            addByPerspective(perspective);
            
            //ADD DOTS 
            function addDot(imageId,leftPos,topPos, width, height){
                addDotObject={
                    showOnLoad: false, 
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

                for(i=0;i<perspectiveObj.leftPos.length;i++){
                    addDot(
                        perspectiveObj.idTag,
                        perspectiveObj.leftPos[i],
                        perspectiveObj.topPos[i],
                        perspectiveObj.width[i],
                        perspectiveObj.height[i]
                    );

                    showImgOnHover(vechileName,perspective,(i+1));

                    //BUG FIX: init height = 0
                    var heightAfterInit=perspectiveObj.height[i];
                    var bugTarget=perspectiveObj.idTag+'_'+(i+1)+'.defaultDot';
                    $(bugTarget).height(heightAfterInit);
                }
            }

             //SHOW IMG ON HOVER 
            function showImgOnHover(vehicleName,perspective,order){
                var vehicleId='#'+perspective;
                var targetId=vehicleId+'_'+order;
                var imgSelector=vehicleId+' img';
                var imgName=perspective+order;
                var scrImg='../sites/all/themes/anjalanvpk/images/'+vehicleName+'/'+imgName+'.jpg';

                $(targetId).hover(function() {
                    $(imgSelector).attr('src',scrImg);
                },function(){ //mouse out
                        var scrImg='../sites/all/themes/anjalanvpk/images/'+vehicleName+'/'+perspective+'0.jpg';
                        $(imgSelector).attr('src',scrImg);
                });

                $(targetId).click(function() {
                    $(toggleIdArray[order-1]).css('display','block');
                    for(i=0;i<toggleIdArray.length;i++){
                        if(i!=(order-1)){ //notice: minus 1
                            $(toggleIdArray[i]).css('display','none');
                        }
                    }

                    //BUG FIX: widthAfterClik suddenly double its width
                    var widthAfterClik=vehicles[vechileName][perspective].width[order-1]
                    $(this).width(widthAfterClik);
                });
            }
        }
    });
})(jQuery, Drupal, this, this.document);
