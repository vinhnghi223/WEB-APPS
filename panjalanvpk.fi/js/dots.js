(function ($, Drupal, window, document, undefined) {
    $(document).ready(function () {


        if ( $('.admin-ah').length ) {

            $(".date-box td").each(function() {
                var paiva = $(this).attr('data-date');
                console.log(paiva);
                $(this).append('<a class="calenterilisaa" href="node/add/tapahtuma-kalenteriin/' + paiva + '"> Lisää uusi </a>');
            });
        }

        if( nodessapaiva.match(/[0-9]/g) ) {
            var nodessapaiva = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            $('#edit-field-milloin-und-0-value-datepicker-popup-0').val(nodessapaiva);
        }
    });

})(jQuery, Drupal, this, this.document);
