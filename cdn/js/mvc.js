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

        controller.menu.close();

        if (root) {

            if (root === "about") {
                resolve(route);
            } else if (root === "benefits") {
                resolve(route);
            } else if (root === "plans") {
                if (get[1]) {
                    const vp = dom.body.find('[data-root="/plans/"]');
                    if (get[2] === "pay") {
                        if (get[1] === "plus") {
                            var target = vp.find('footer').all('box')[0];
                            controller.plans.select(target);
                        }
                        if (get[1] === "pro") {
                            var target = vp.find('footer').all('box')[1];
                            controller.plans.select(target);
                        }
                        if (get[1] === "max") {
                            var target = vp.find('footer').all('box')[2];
                            controller.plans.select(target);
                        }

                        if (1 > 0) {
                            var ppp = dom.body.find('[data-page="/plans/*/pay/"]');
                            var form = ppp.find('form');
                            var card = form.nextElementSibling;
                            var stripe = Stripe("pk_test_51I8VnsEfZ5B88flNfqLHg5rtUlUl92CPKN3EeXIgdvp4QfSrXPSpMgZxeMgGygsFOOd5diO4eDLxzBgi6oXGZsK2006vuoo3Ey");
                            let elements = stripe.elements({
                                fonts: [{
                                    cssSrc: 'https://fonts.googleapis.com/css?family=Nunito'
                                }]
                            });

                            var style = {
                                base: {
                                    fontFamily: 'Nunito',
                                    lineHeight: '50px',
                                    padding: '0 20px',
                                    opacity: 0,
                                    fontSize: '18px'
                                },
                                complete: {},
                                empty: {
                                    fontSize: '0',
                                    ':focus': {
                                        fontSize: '18px'
                                    }
                                },
                                invalid: {
                                    color: '#ff3b30'
                                }
                            };

                            let cardNumber = elements.create('cardNumber', {
                                style
                            });
                            cardNumber.mount(form.all('box')[0].find('StripeElement'));
                            cardNumber.on('change', e=>{
                                validate(e)
                                const text = form.all('box')[0].find('text');
                                if (e.error) {
                                    console.log("cardNumber error");
                                    text.className = "background-color-fff color-ff3b30 height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                } else {
                                    text.className = "background-color-fff color-bbb height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                }
                            }
                            );
                            cardNumber.addEventListener('focus', e=>{
                                const el = form.all('box')[0].find('StripeElement');
                                const text = form.all('box')[0].find('text');
                                text.className = "background-color-fff color-bbb height-18px line-height-18px padding-x-20px position-absolute";
                                text.dataset.transform = "translate3d(0,-50%,0)";
                                if (el.classList.contains('StripeElement--invalid')) {
                                    text.classList.remove('color-bbb')
                                    text.classList.add('color-ff3b30')
                                }
                            }
                            );
                            cardNumber.addEventListener('blur', e=>{
                                const el = form.all('box')[0].find('StripeElement');
                                const text = form.all('box')[0].find('text');
                                if (el.classList.contains('StripeElement--invalid')) {
                                    text.className = "background-color-fff color-ff3b30 height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                } else {
                                    text.className = "color-bbb padding-x-20px";
                                    text.removeAttribute('data-transform');
                                }
                            }
                            );
                            cardNumber.on('ready', e=>{
                                ppp.classList.add('cardNumber--ready')
                            }
                            );

                            let cardExpiry = elements.create('cardExpiry', {
                                style
                            });
                            cardExpiry.mount(form.all('box')[2].find('StripeElement'));
                            cardExpiry.on('change', e=>{
                                validate(e)
                                const text = form.all('box')[2].find('text');
                                if (e.error) {
                                    console.log("cardNumber error");
                                    text.className = "background-color-fff color-ff3b30 height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                } else {
                                    text.className = "background-color-fff color-bbb height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                }
                            }
                            );
                            cardExpiry.on('focus', e=>{
                                const el = form.all('box')[2].find('StripeElement');
                                const text = form.all('box')[2].find('text');
                                text.className = "background-color-fff color-bbb height-18px line-height-18px padding-x-20px position-absolute";
                                text.dataset.transform = "translate3d(0,-50%,0)";
                                if (el.classList.contains('StripeElement--invalid')) {
                                    text.classList.remove('color-bbb')
                                    text.classList.add('color-ff3b30')
                                }
                            }
                            );
                            cardExpiry.on('blur', e=>{
                                const el = form.all('box')[2].find('StripeElement');
                                const text = form.all('box')[2].find('text');
                                if (el.classList.contains('StripeElement--invalid')) {
                                    text.className = "background-color-fff color-ff3b30 height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                } else {
                                    text.className = "color-bbb padding-x-20px";
                                    text.removeAttribute('data-transform');
                                }
                            }
                            );
                            cardExpiry.on('ready', e=>{
                                ppp.classList.add('cardExpiry--ready')
                            }
                            );

                            let cardCvc = elements.create('cardCvc', {
                                style
                            });
                            cardCvc.mount(form.all('box')[3].find('StripeElement'));
                            cardCvc.on('change', e=>{
                                validate(e)
                                const text = form.all('box')[3].find('text');
                                if (e.error) {
                                    console.log("cardNumber error");
                                    text.className = "background-color-fff color-ff3b30 height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                } else {
                                    text.className = "background-color-fff color-bbb height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                }
                            }
                            );
                            cardCvc.on('focus', e=>{
                                card.dataset.side = "back";
                                const el = form.all('box')[3].find('StripeElement');
                                const text = form.all('box')[3].find('text');
                                text.className = "background-color-fff color-bbb height-18px line-height-18px padding-x-20px position-absolute";
                                text.dataset.transform = "translate3d(0,-50%,0)";
                                if (el.classList.contains('StripeElement--invalid')) {
                                    text.classList.remove('color-bbb')
                                    text.classList.add('color-ff3b30')
                                }
                            }
                            );
                            cardCvc.on('blur', e=>{
                                card.dataset.side = "front";
                                const el = form.all('box')[3].find('StripeElement');
                                const text = form.all('box')[3].find('text');
                                if (el.classList.contains('StripeElement--invalid')) {
                                    text.className = "background-color-fff color-ff3b30 height-18px line-height-18px padding-x-20px position-absolute";
                                    text.dataset.transform = "translate3d(0,-50%,0)";
                                } else {
                                    text.className = "color-bbb padding-x-20px";
                                    text.removeAttribute('data-transform');
                                }
                            }
                            );
                            cardCvc.on('ready', e=>{
                                ppp.classList.add('cardCvc--ready')
                            }
                            );

                            function validate(e) {
                                console.log({
                                    e
                                });
                                var save = form.find('[type="submit"]');
                                if (e.complete === true) {
                                    if ('complete',
                                    form.all('.StripeElement').length === form.all('.StripeElement--complete').length + 1) {
                                        console.log('validated');
                                        save.classList.remove('opacity-50pct');
                                        save.disabled = false;
                                    } else {
                                        console.log('invalidated');
                                        save.classList.add('opacity-50pct');
                                        save.disabled = true;
                                    }
                                } else {
                                    console.log('invalidated');
                                    save.classList.add('opacity-50pct');
                                    save.disabled = true;
                                }
                            }

                            form.addEventListener('submit', e=>{
                                e.preventDefault();
                                stripe.createPaymentMethod({
                                    type: 'card',
                                    card: cardNumber,
                                    billing_details: {
                                        name: e.target.find('.card-holder input').value,
                                    }
                                }).then(async(result)=>{
                                    console.log('subscription', result);
                                    if (result.error) {
                                        console.log(result.error);
                                    } else {
                                        var jwt = await auth.getIdToken();
                                        var paymentMethodId = result.paymentMethod.id;
                                        var data = {
                                            jwt,
                                            paymentMethodId,
                                            priceId
                                        };
                                        api.stripe.subscription.create(data).then((e)=>{
                                            alert('Plan Created');
                                            modal.remove();
                                        }
                                        ).catch((e)=>{
                                            console.log('error', {
                                                e
                                            });
                                            alert('There was an error creating your plan');
                                        }
                                        );
                                    }
                                }
                                );
                            }
                            );
                        }

                    } else {
                        if (get[1] === "plus") {
                            var target = vp.find('footer').all('box')[0];
                            controller.plans.view(target);
                        }
                        if (get[1] === "pro") {
                            var target = vp.find('footer').all('box')[1];
                            controller.plans.view(target);
                        }
                        if (get[1] === "max") {
                            var target = vp.find('footer').all('box')[2];
                            controller.plans.view(target);
                        }
                    }
                }
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

    menu: {

        close: ()=>{

            const nav = dom.body.find('body > nav');
            console.log(nav.dataset);
            nav.dataset["960pxTransform"] = "translateX(-100%)";
            nav.firstElementChild.classList.add('display-none');

        }
        ,

        open: ()=>{

            const nav = dom.body.find('body > nav');
            console.log(nav.dataset);
            nav.dataset["960pxTransform"] = "0";
            nav.firstElementChild.classList.remove('display-none');

        }

    },

    my: {

        login: (event,f)=>{
            event.preventDefault();
            auth.account.login(event).then(e=>(f ? f : '/').router()).catch(e=>{
                var code = e.code;
                var message = e.message;
                alert(message);
            }
            );
        }

    },

    plans: {

        compare: (target)=>{

            var cycle = target.closest('[data-before]').dataset.before;

            if (cycle) {
                const blocks = target.closest('blocks');
                const block = blocks.children[2];
                const card = target.closest('card');
                if (cycle === "monthly") {
                    card.firstElementChild.dataset.transform = "translateX(0)";
                    $(block.all('card text span:nth-child(2)')).attr('data-display', 'none');
                    $(block.all('card text span:nth-child(1)')).attr('data-display', 'flex');
                } else if (cycle === "yearly") {
                    card.firstElementChild.dataset.transform = "translateX(100%)";
                    $(block.all('card text span:nth-child(1)')).attr('data-display', 'none');
                    $(block.all('card text span:nth-child(2)')).attr('data-display', 'flex');
                }
                card.find('[data-color]').removeAttribute('data-color');
                target.dataset.color = "#fff";
            }

        }
        ,

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

        select: (target)=>{
            const index = target.closest('box').index();
            const plan = target.closest('block').find('block > section').all('box')[index];
            const type = plan.find('text b').textContent;
        }
        ,

        view: (target)=>{

            const index = target.closest('box').index();

            const plan = target.closest('block').find('block > section').all('box')[index];
            if (plan) {
                const row = plan.parentNode;

                const plans = $(row.all('box'));
                plans.attr("data-height", "120px");
                plans.attr("data-width", "120px");
                $(plan.parentNode.all('box > picture + column')).addClass("display-none");
                const type = plan.find('text b').textContent;

                $(plan.all('picture + column')).removeClass("display-none");
                plan.dataset.height = "240px";
                plan.dataset.width = "240px";

                const index = plan.index();
                row.dataset.tabletTransform = "translateX(calc((-100%/3)*" + index + "))";

                const backgroundColor = plan.firstElementChild.dataset.backgroundColor;
                row.closest('block').find('header').children[1].firstElementChild.dataset.backgroundColor = backgroundColor;
                row.closest('block').firstElementChild.dataset.backgroundColor = backgroundColor;

                const footer = row.closest('block').find('footer');
                if (footer) {
                    const bullets = $(footer.all('box'));
                    const bullet = bullets[index];
                    const button = bullet.find('flex');
                    $(footer.all('box flex')).addClass('display-none');
                    $(footer.all('box')).attr('data-width', '50px');
                    button.classList.remove('display-none');
                    button.closest('box').dataset.width = "120px";
                }
            }

        }

    }

});
