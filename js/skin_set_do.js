function ringo_do_regex_data(data) {
    return new RegExp('(?:^|; )' + data + '=([^;]*)');
}

function ringo_do_skin_set() {
    let cookies = document.cookie;

    if(!window.localStorage.getItem('main_css_use_sys_darkmode') || window.localStorage.getItem('main_css_use_sys_darkmode') === '1') {
        if(cookies.match(ringo_do_regex_data('main_css_darkmode')) && cookies.match(ringo_do_regex_data('main_css_darkmode'))[1] === '1') {
            if(!window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.cookie = 'main_css_darkmode=0; path=/';
                history.go(0);
            }
        }
        
        if(!cookies.match(ringo_do_regex_data('main_css_darkmode')) || cookies.match(ringo_do_regex_data('main_css_darkmode'))[1] === '0') {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.cookie = 'main_css_darkmode=1; path=/';
                history.go(0);
            }
        }
    }

    if(window.localStorage.getItem('main_css_off_sidebar') && window.localStorage.getItem('main_css_off_sidebar') === '1') {
        document.getElementById('ringo_add_style').innerHTML += `
            .vision .content-wrapper .vision-sidebar {
                display: none;
            }

            .vision .content-wrapper .vision-content {
                margin-right: 0;
                max-width: 100%;
            }
        `;
    }

    if(window.localStorage.getItem('main_css_fixed_width') && window.localStorage.getItem('main_css_fixed_width') !== '') {
        let fixed_width_data = window.localStorage.getItem('main_css_fixed_width');
        document.getElementById('ringo_add_style').innerHTML += `
            .vision .nav-wrapper .navbar, .vision .vision-top-notice, .vision .content-wrapper, .vision-footer p, .vision-footer #powered {
                max-width: ` + fixed_width_data + `px;
            }

            .vision .content-wrapper .vision-content {
                max-width: 100%;
            }
        `;
    }

    if(window.localStorage.getItem('main_css_sidebar_right') && window.localStorage.getItem('main_css_sidebar_right') === '1') {
        document.getElementById('ringo_add_style').innerHTML += `
            .vision .content-wrapper .vision-content {
                margin: 0 0 0 1rem;
            }

            .vision .content-wrapper {
                flex-direction: row-reverse;
            }
        `;
    }
}

ringo_do_skin_set();