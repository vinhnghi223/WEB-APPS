/**
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

//SET UP FOR ALL TRUCKS
    function customAddDot(imageId,leftPos,topPos){
        addDotObject={
          leftPos: 0, //Place hot spot on specified left position
          topPos: 0, //Place hot spot on specified top position
          showOnLoad: false, //hot spot will NOT be open on page load
          aniType: 'slide', //hot spot will open/close with slide effect
          aniSpeed: 0.75, //The duration of the animation (seconds)
          showOnlyOne: true,
          width: 160 //width of hot spot
        };
        addDotObject.leftPos=leftPos;
        addDotObject.topPos=topPos;
        $(imageId).addDot(addDotObject);
    }

    addDotPosition={
        pos1:{
            leftPos: 350,
            topPos: 100
        },
        pos2:{
            leftPos: 720,
            topPos: 80
        },
        pos3:{
            leftPos: 65,
            topPos: 100
        },
        pos4:{
            leftPos: 200,
            topPos: 100
        },       
        pos5:{
            leftPos: 540,
            topPos: 75
        } 
    }

    toggleIdPos=['#auto1','#auto2', '#auto3', '#auto4', '#auto5'];

    function showImgOnHover(hoverId,imgId,toggleIdPos,imgName){
        var imgSelector=imgId+' img';
        var scrImg='../sites/all/themes/anjalanvpk/images/'+imgName+'.jpg';
        var displayId=''
            $(hoverId).hover(function() {
            $(imgSelector).attr('src',scrImg);
            $(this).click (function() {
                for(i=0;i<toggleIdPos.length;i++){
                    if(i==(toggleIdPos-1)){
                        $(toggleIdPos[toggleIdPos]).toggle();
                    }else{
                        $(toggleIdPos[toggleIdPos]).css('display','none');
                    }
                }
            });
        });
    }


vehicles={
    'KY431':{
        rightView:{
            idTag: '#addDot_demo_auto',
            leftPos: [350,720,65,200,540],
            topPos: [100,80,100,100,75]
        },
        leftView:{
            idTag: '#addDot_paloauto2',
            leftPos: [600,720,450,272,100],
            topPos: [100,80,100,100,75] //same?          
        }
    }
}
//FIRST TRUCK
    //SIDE VIEW RIGHT
    var KY431RV=vehicles['KY431'].rightView;
    for(i=0;i<KY431RV.leftPos.length;i++){
        customAddDot(KY431RV.idTag,KY431RV.leftPos[i],KY431RV.topPos[i]);
    }
    
    var KY431LV=vehicles['KY431'].leftView;
    for(i=0;i<KY431LV.leftPos.length;i++){
        customAddDot(KY431LV.idTag,KY431LV.leftPos[i],KY431LV.topPos[i]);
    }


    /*customAddDot('#addDot_demo_auto',addDotPosition.pos1.leftPos,addDotPosition.pos1.topPos);
    customAddDot('#addDot_demo_auto',addDotPosition.pos2.leftPos,addDotPosition.pos2.topPos);
    customAddDot('#addDot_demo_auto',addDotPosition.pos3.leftPos,addDotPosition.pos3.topPos);
    customAddDot('#addDot_demo_auto',addDotPosition.pos4.leftPos,addDotPosition.pos4.topPos);
    customAddDot('#addDot_demo_auto',addDotPosition.pos5.leftPos,addDotPosition.pos5.topPos);*/

    showImgOnHover('#addDot_demo_auto_5 *','#addDot_demo_auto',1,'kuva6');//kuva6 co the chi la 6
    showImgOnHover('#addDot_demo_auto_4 *','#addDot_demo_auto',2,'kuva4');
    showImgOnHover('#addDot_demo_auto_3 *','#addDot_demo_auto',3,'kuva5');
    showImgOnHover('#addDot_demo_auto_2 *','#addDot_demo_auto',4,'kuva1');
    showImgOnHover('#addDot_demo_auto_1 *','#addDot_demo_auto',5,'kuva3');

    //SIDE VIEW LEFT
       /* $('#addDot_paloauto2').addDot({
            leftPos: 600,
            topPos: 100,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        })


        $('#addDot_paloauto2').addDot({
            leftPos: 720,
            topPos: 80,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_paloauto2').addDot({
            leftPos: 450,
            topPos: 100,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_paloauto2').addDot({
            leftPos: 272,
            topPos: 100,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_paloauto2').addDot({
            leftPos: 100,
            topPos: 75,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });*/

        $('#addDot_paloauto2_5 *').hover(function() {
            $('#addDot_paloauto2 img').attr('src','../sites/all/themes/anjalanvpk/images/v6.jpg');
            $(this).click (function() {
                $('#auto1').toggle();
                $('#auto2, #auto3, #auto4, #auto5').css('display','none');
            });
        });
        $('#addDot_paloauto2_4 *').hover(function() {
            $('#addDot_paloauto2 img').attr('src','../sites/all/themes/anjalanvpk/images/v2.jpg');
            $(this).click (function() {
                $('#auto2').toggle();
                $('#auto1, #auto3, #auto4, #auto5').css('display','none');
            });
        });
        $('#addDot_paloauto2_3 *').hover(function() {
            $('#addDot_paloauto2 img').attr('src','../sites/all/themes/anjalanvpk/images/v3.jpg');
            $(this).click (function() {
                $('#auto3').toggle();
                $('#auto2, #auto1, #auto4, #auto5').css('display','none');
            });
        });
        $('#addDot_paloauto2_2 *').hover(function() {
            $('#addDot_paloauto2 img').attr('src','../sites/all/themes/anjalanvpk/images/v4.jpg');
            $(this).click (function(){
                $('#auto4').toggle();
                $('#auto2, #auto3, #auto1, #auto5').css('display','none');
            });
        });
        $('#addDot_paloauto2_1 *').hover(function() {
            $('#addDot_paloauto2 img').attr('src','../sites/all/themes/anjalanvpk/images/v5.jpg');
            $(this).click (function() {
                $('#auto5').toggle();
                $('#auto2, #auto3, #auto4, #auto1').css('display','none');
            });
        });
        //1
        $('#addDot_alakerta').addDot({
            leftPos: 625,
            topPos: 130,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        })


        $('#addDot_alakerta').addDot({
            leftPos: 625,
            topPos: 225,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta').addDot({
            leftPos: 745,
            topPos: 225,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta').addDot({
            leftPos: 745,
            topPos: 130,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });
        //5
        $('#addDot_alakerta').addDot({
            leftPos: 535,
            topPos: 250,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });
        $('#addDot_alakerta').addDot({
            leftPos: 335,
            topPos: 230,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        })


        $('#addDot_alakerta').addDot({
            leftPos: 430,
            topPos: 165,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta').addDot({
            leftPos: 500,
            topPos: 160,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta').addDot({
            leftPos: 210,
            topPos: 250,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta').addDot({
            leftPos: 340,
            topPos: 350,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta_1 *').click(function() {
            $('#auto1').toggle();
            $('#auto2, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_2 *').click(function() {
            $('#auto2').toggle();
            $('#auto1, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_3 *').click(function() {
            $('#auto3').toggle();
            $('#auto2, #auto4, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_4 *').click(function() {
            $('#auto4').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_5 *').click(function() {
            $('#auto5').toggle();
            $('#auto2, #auto3, #auto1, #auto4, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_6 *').click(function() {
            $('#auto6').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto4, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_7 *').click(function() {
            $('#auto7').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto4, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_8 *').click(function() {
            $('#auto8').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto4, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_9 *').click(function() {
            $('#auto9').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto4 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta_10 *').click(function() {
            $('#auto10').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto4').css('display','none');
        });

        $('#addDot_alakerta1').addDot({
            leftPos: 295,
            topPos: 235,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta1').addDot({
            leftPos: 60,
            topPos: 235,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_alakerta1').addDot({
            leftPos: 280,
            topPos: 100,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });
        $('#addDot_alakerta1_1 *').click(function() {
            $('#auto1').toggle();
            $('#auto2, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta1_2 *').click(function() {
            $('#auto2').toggle();
            $('#auto1, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_alakerta1_3 *').click(function() {
            $('#auto3').toggle();
            $('#auto2, #auto4, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });

        $('#addDot_paloauto_back').addDot({
            leftPos: 115,
            topPos: 178,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_paloauto_back').addDot({
            leftPos: 115,
            topPos: 0,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_paloauto_back_1').click(function() {
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
        });

        $('#addDot_piha').addDot({
            leftPos: 100,
            topPos: 10,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_piha').addDot({
            leftPos: 0,
            topPos: 300,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_piha_1 *').click(function() {
            $('#auto1').toggle();
            $('#auto2, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });
        $('#addDot_piha_2 *').click(function() {
            $('#auto2').toggle();
            $('#auto1, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10').css('display','none');
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 102,
            topPos: 290,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });


        $('#addDot_ylakerta').addDot({
            leftPos: 290,
            topPos: 200,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 88,
            topPos: 200,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 110,
            topPos: 80,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });
        //5
        $('#addDot_ylakerta').addDot({
            leftPos: 110,
            topPos: 140,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });
        $('#addDot_ylakerta').addDot({
            leftPos: 235,
            topPos: 150,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });


        $('#addDot_ylakerta').addDot({
            leftPos: 235,
            topPos: 90,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 300,
            topPos: 90,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 317,
            topPos: 255,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 240,
            topPos: 240,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });
        $('#addDot_ylakerta').addDot({
            leftPos: 295,
            topPos: 300,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 365,
            topPos: 120,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 365,
            topPos: 300,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 570,
            topPos: 300,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 640,
            topPos: 120,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });
        $('#addDot_ylakerta').addDot({
            leftPos: 710,
            topPos: 120,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });

        $('#addDot_ylakerta').addDot({
            leftPos: 710,
            topPos: 255,
            showOnLoad: false,
            aniType: 'slide',
            aniSpeed: 0.75,
            showOnlyOne: true,
            width: 160
        });


        $('#addDot_ylakerta_1 *').click(function() {
            $('#auto1').toggle();
            $('#auto2, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 , #auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_2 *').click(function() {
            $('#auto2').toggle();
            $('#auto1, #auto3, #auto4, #auto5, #auto6, #auto7, #auto8, #auto9 , #auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_3 *').click(function() {
            $('#auto3').toggle();
            $('#auto2, #auto4, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_4 *').click(function() {
            $('#auto4').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_5 *').click(function() {
            $('#auto5').toggle();
            $('#auto2, #auto3, #auto1, #auto4, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_6 *').click(function() {
            $('#auto6').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto4, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_7 *').click(function() {
            $('#auto7').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto4, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_8 *').click(function() {
            $('#auto8').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto4, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_9 *').click(function() {
            $('#auto9').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto4 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_10 *').click(function() {
            $('#auto10').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto4, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_11 *').click(function() {
            $('#auto11').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto4, #auto12, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_12 *').click(function() {
            $('#auto12').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto4, #auto13, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_13 *').click(function() {
            $('#auto13').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto4, #auto14, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_14 *').click(function() {
            $('#auto14').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto4, #auto15, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_15 *').click(function() {
            $('#auto15').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto4, #auto16, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_16 *').click(function() {
            $('#auto16').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto4, #auto17').css('display','none');
        });
        $('#addDot_ylakerta_17 *').click(function() {
            $('#auto17').toggle();
            $('#auto2, #auto3, #auto1, #auto5, #auto6, #auto7, #auto8, #auto9 ,#auto10, #auto11, #auto12, #auto13, #auto14, #auto15, #auto16, #auto4').css('display','none');
        });
//Second car


      // You can add more hot spots for Computer section so on...
      });


})(jQuery, Drupal, this, this.document);
