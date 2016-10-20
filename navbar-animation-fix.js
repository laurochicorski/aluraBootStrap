/**
 * Created by lauro on 20/10/16.
 */
$('#collapse-navbar').on('show.bs.collapse', function () {
    $('.topCasaFina-banner').css('transform', 'translate(-50%,10%)')
});
$('#collapse-navbar').on('hide.bs.collapse', function () {
    $('.topCasaFina-banner').css('transform', 'translate(-50%,-50%)')
})