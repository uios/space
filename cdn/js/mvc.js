window.mvc ? null : (window.mvc = {});

window.mvc.m ? null : (window.mvc.m = model = {
    error: {
        image: e=>{
            console.log('model.error.image', e);
            e.remove();
        }
    }
});

window.mvc.v ? null : (window.mvc.v = view = function(route) {
    console.log(108, {
        route
    });

    return new Promise(async function(resolve, reject) {
        var page = route.page;
        var path = route.path;
        var gut = route.hash ? rout.ed.dir(route.hash.split('#')[1]) : [];
        var get = (route ? route.GOT : rout.ed.dir(dom.body.dataset.path)).concat(gut);
        var root = get[0] || gut[0];

        window.GET = window.GET ? GET : rout.ed.dir(dom.body.dataset.path);

        if (root) {

            if (root === "about") {
                resolve(route);
            } else if (root === "benefits") {
                resolve(route);
            } else if (root === "plans") {
                resolve(route);
            } else if (root === "help") {
                resolve(route);
            } else if (root === "settings") {
                resolve(route);
            } else if (root === "storage") {
                resolve(route);
            } else if (root === "support") {
                resolve(route);
            } else {
                resolve(route);
            }

        } else {

            resolve(route);

        }
    }
    );
}
);

window.mvc.c ? null : (window.mvc.c = controller = {

    plans: {

        period: (target)=>{

            var cycle = target.closest('[data-before]');
            if (cycle) {
                const card = target.closest('card');
                const section = target.closest('header').nextElementSibling;
                if (cycle.dataset.before === "monthly") {
                    card.firstElementChild.dataset.transform = "translateX(0)";
                    $(section.all('box > :last-child > :nth-child(1)')).removeClass('display-none');
                    $(section.all('box > :last-child > :nth-child(2)')).addClass('display-none');
                }
                if (cycle.dataset.before === "yearly") {
                    card.firstElementChild.dataset.transform = "translateX(100%)";
                    $(section.all('box > :last-child > :nth-child(1)')).addClass('display-none');
                    $(section.all('box > :last-child > :nth-child(2)')).removeClass('display-none');
                }
                card.find('[data-color]').removeAttribute('data-color');
                target.dataset.color = "#fff";
            }

        }
        ,

        view: (target)=>{

            const plan = target.closest('box');
            if (plan) {                
                const plans = $(plan.parentNode.all('box'));
                plans.attr("data-height", "120px");
                plans.attr("data-width", "120px");
                $(plan.parentNode.all('box > picture + column')).addClass("display-none");
                const type = plan.find('text b').textContent;
                
                $(plan.all('picture + column')).removeClass("display-none");
                plan.dataset.height = "240px";
                plan.dataset.width = "240px";
            }

        }

    }

});
