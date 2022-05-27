// modal
document.querySelectorAll('.btn-open-modal, .btn-close, .modal-background ').forEach(function(element) {
    element.addEventListener('click', showModal);
})

function showModal (){ 
    document.querySelector('.modal').classList.toggle('d-none');
    document.querySelector('body').classList.toggle('overflow-hidden');
};

document.querySelector('.btn-send').addEventListener('click', function() {
    var name = document.querySelector('input[type="text"]');
    var phone = document.querySelector('input[type="phone"]');
    var email = document.querySelector('input[type="email"]');


    var failed = 0;

    if(name.value == '') {
        document.querySelector('input[type="text"]').classList.add('invalid');
        failed+=1;
    }
    else
        document.querySelector('input[type="text"]').classList.remove('invalid');

    if(!/^(?:\+38)?(0\d{9})$/.test(phone.value)) {
        document.querySelector('input[type="phone"]').classList.add('invalid');
        failed+=1;
    }
    else
        document.querySelector('input[type="phone"]').classList.remove('invalid');
    
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        document.querySelector('input[type="email"]').classList.add('invalid');
        failed+=1;
    }
    else
        document.querySelector('input[type="email"]').classList.remove('invalid');

    if(failed > 0) 
        return;
    showModal();
})