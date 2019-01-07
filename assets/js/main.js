$(document).ready(()=>{
    $('#post-list').children('.row').each(function (index) {
        if (index%2) {
            $($(this).children()[1]).insertBefore($($(this).children()[0]));
        }
    });
});
