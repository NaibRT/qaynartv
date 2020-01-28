const popupToggle = () => {
    $('#advert-popup').toggleClass('display-flex');
    $('body,.wrap-body').toggleClass('overflow-hidden');
};

const skipBtnEvent = (closeCount, value) => {

    $(document).ready(() => {
        $('.skip-btn').click((e) => {
            e.preventDefault();
            popupToggle();
        });
    });
    let interval = setInterval(() => {
        closeCount -= 1;
        $('.skip-btn').text(`${closeCount}`);
    }, 1000)
    console.log(closeCount)
    setTimeout(() => {

        clearInterval(interval)
        $('.skip-btn').text(`${value}`);
        $('.skip-btn').removeAttr('disabled');

    }, (closeCount * 1000));

}

const createAd = (res) => {
    console.log(res)
    console.log(res.data.setTimeoutCount);
    let adElement = null;
    let setTimeoutCount = res.data.setTimeoutCount;
    let closeCount = res.data.closeCount;
    let skipBtnText = res.data.skipBtnText;

    if (res.status) {
        let adPopupContainer = document.createElement('div');
        let skipBtn = document.createElement('button');
        adPopupContainer.setAttribute('id', 'advert-popup-container');
        skipBtn.setAttribute('class', 'skip-btn');
        skipBtn.setAttribute('disabled', '')
        adPopupContainer.appendChild(skipBtn);
        if (res.type === 'video') {
            adElement = `<a href='${res.data.link}' ><video class='adverb-popup-element' src=${res.data.video} controls></video></a>`
        } else if (true) {
            adElement = `<a href=${res.data.link}} target='_blank' id='adpa'
                 ><img class="adverb-popup-element" src=${res.data.adLink} alt=""></a>`
        }
        adPopupContainer.innerHTML += adElement;
        skipBtnEvent(closeCount, skipBtnText)
        setTimeout(() => {
            popupToggle();
        }, setTimeoutCount * 1000);

        return adPopupContainer;
    }
}

export default createAd;