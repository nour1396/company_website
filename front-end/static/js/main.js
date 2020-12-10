/* setTimeout(() => {
    let h1 = document.querySelector('#navHome');
    let h2 = document.querySelector('#navAboutUs');
    let h3 = document.querySelector('#navSolutions');
    let h4 = document.querySelector('#navCustomers');
    let h5 = document.querySelector('#navCareers');
    let h6 = document.querySelector('#navContact');
    console.log(h1);
    h1.addEventListener('click', function() {
        Location.href = '/index.html'
    })
    h2.addEventListener('click', function() {
        Location.href = '/about.html'
    })
}, 300) */
setTimeout(() => {

    let btnReadMoreService = document.querySelector('#ourServices').querySelectorAll('.btnReadMoreService');
    btnReadMoreService.forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log(e.target.offsetParent);
            if (e.path[4].querySelector('span').classList[1] == 'd-none') {
                window.scrollTo(e.path[4].top);
                e.path[4].querySelector('span').classList.remove('d-none')
            } else {
                window.scrollTo(e.clientX, e.clientY);
                e.path[4].querySelector('span').classList.add('d-none')
            }
        })
    })

}, 300)