//question, ...options
let createPoll = () => {
    let poll = document.createElement('div');
    poll.setAttribute('id', 'poll');
    let head = `<div class="poll-head">
     <h3>${'question'}</h3>
     </div>`;
    poll.innerHTML += head;

    //  $('#poll').append(head);

    ['male', 'female', 'other'].forEach(i => {

        let pollItem = `<div class="poll-item">
         <input type="radio" name="name" id="" value="${i}">
         <label>${i}</label>
         </div>`;
        poll.innerHTML += pollItem;
        //  $('#poll').append(pollItem);
    })
    console.log(poll)
    return poll;
}

// let addClick = () => {

//     $('.poll-item').click((e) => {
//         e.preventDefault();
//         let currentE = e.currentTarget.children[0];
//         currentE.setAttribute('checked', '')
//         $('.poll-item>input').attr('disabled', '');
//         sendData(url, currentE.name)

//     })
// }
// let sendData = (url, data) => {
//     $.ajax({
//         type: "Post",
//         url: url,
//         data: data,
//         contentType: 'application/json; charset=utf-8',
//         dataType: "dataType",
//         success: function(response) {

//         }
//     });
// }


createPoll();