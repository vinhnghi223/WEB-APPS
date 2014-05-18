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
    $(window).ready(function () {



        var nodessapaiva = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        $('#edit-field-milloin-und-0-value-datepicker-popup-0').val(nodessapaiva);




        if ($('.page-kalenteri')){
            $(".date-box td").each(function() {
                var paiva = $(this).attr('data-date');
                console.log(paiva);
                $(this).append('<a class="calenterilisaa" href="node/add/tapahtuma-kalenteriin/' + paiva + '"> Lisää uusi </a>');
            });
        }

        if ($('page-node-add-tapahtuma-kalenteriin')){
            var nodessapaiva = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            $('#edit-field-milloin-und-0-value-datepicker-popup-0').val(nodessapaiva);
        };


//FIRST CAR

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
