function livePopUp(e) {
    e.preventDefault();
    $('.live-popup').css({ 'display': 'flex' });
    $('body').css({ 'overflow': 'hidden' });
}

export default livePopUp;