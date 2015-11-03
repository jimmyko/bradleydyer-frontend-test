$(document).ready(function() {

    var content = $('#content')
    var fullPageOptions = {
        // anchors: ['welcome', 'slogan', 'launch', 'links', 'map', 'registration', 'content'],
        autoScrolling: false,
        fitToSection: false,
        // remove translate() that makes setpin() method in the object of ScrollMagic.Scene not working.
        css3: false
    };
    content.fullpage(fullPageOptions);

    // init controller
    var controller = new ScrollMagic.Controller();

    var scenes = [];

    // backgrounds
    var bg1blur = document.querySelector('.background-id-1-blur');

    // *** Welcome
    var h = window.innerHeight;
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--welcome',
                triggerHook: 'onLeave',
                duration: '40%',
                reverse: true,
            })
        .setTween(bg1blur, {autoAlpha: 0}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--welcome',
                triggerHook: 'onLeave',
                duration: '15%',
                reverse: true,
            })
        .setTween('.section--welcome .container--stage-logo', {autoAlpha: 0, y: h*-0.75}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--welcome',
                triggerHook: 'onLeave',
                duration: '8%',
                reverse: true,
            })
        .setPin('.section--welcome .container--flip', {pushFollowers: false}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--welcome',
                triggerHook: 'onLeave',
                offset: '8%',
                duration: '20%',
                reverse: true,
            })
        .setTween('.section--welcome .flip', {autoAlpha: 0, y: h*-0.65}));

    // *** Slogan
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--slogan',
                triggerHook: 'onLeave',
                offset: h*-0.5,
                duration: '25%',
                reverse: true,
            })
        .setTween(bg1blur, {autoAlpha: 1}));

    var stageSlogan = document.querySelector('.section--slogan .stage-slogan');
    var stageSloganAni = new TimelineMax();
        stageSloganAni.set(stageSlogan, {y: h*0.25, autoAlpha: 0})
        .to(stageSlogan, 1, {y: 0, autoAlpha: 1});
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--slogan',
                triggerHook: 'onLeave',
                offset: h*-0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(stageSloganAni));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--slogan',
                triggerHook: 'onLeave',
                offset: h*0.5,
                duration: '25%',
                reverse: true,
            })
        .setTween(stageSlogan, {autoAlpha: 0, y: h*-0.3}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--slogan',
                triggerHook: 'onLeave',
                duration: '50%',
                reverse: true,
            })
        .setPin('.container--stage-slogan', {pushFollowers: false}));

    var down = document.querySelector('.section--slogan .down');
    var downAni = new TimelineMax();
        downAni.set(down, {y: h*0.05, autoAlpha: 0})
        .to(down, 1, {y: 0, autoAlpha: 1});
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--slogan',
                triggerHook: 'onLeave',
                offset: h*0.05,
                duration: '15%',
                reverse: true,
            })
        .setTween(downAni));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--slogan',
                triggerHook: 'onLeave',
                duration: '150%',
                reverse: true,
            })
        .setPin('.section--slogan .footer', {pushFollowers: false}));

    // *** Launch
    var launch = document.querySelector('.section--launch .launch');
    var launchAni = new TimelineMax();
        launchAni.set(launch, {y: h*0.25, autoAlpha: 0})
        .to(launch, 1, {y: 0, autoAlpha: 1});
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--launch',
                triggerHook: 'onLeave',
                offset: h*-0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(launchAni));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--launch',
                triggerHook: 'onLeave',
                offset: 0,
                duration: '25%',
                reverse: true,
            })
        .setPin('.section--launch .container--launch', {pushFollowers: false}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--launch',
                triggerHook: 'onLeave',
                offset: h*0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(launch, {autoAlpha: 0, y: h*-0.3}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--launch',
                triggerHook: 'onLeave',
                offset: h*0.25,
                duration: '15%',
                reverse: true,
            })
        .setTween(down, {autoAlpha: 0, y: h*-0.05}));

    // *** news
    var news = document.querySelector('.section--news .news');
    var newsAni = new TimelineMax()
        newsAni.set(news, {y: h*0.75})
        .to(news, 1, {y: 0});
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--news',
                triggerHook: 'onLeave',
                offset: h*-0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(newsAni));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--news',
                triggerHook: 'onLeave',
                offset: 0,
                duration: '25%',
                reverse: true,
            })
        .setPin('.section--news .container--news', {pushFollowers: false}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--news',
                triggerHook: 'onLeave',
                offset: h*0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(news, {y: h*-0.75}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--news',
                triggerHook: 'onLeave',
                offset: h*0.25,
                duration: '15%',
                reverse: true,
            })
        .setTween(bg1blur, {autoAlpha: 0}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--news',
                triggerHook: 'onLeave',
                offset: h*0.6,
                duration: '15%',
                reverse: true,
            })
        .setTween(bg1blur, {autoAlpha: 1}));

    // *** map
    var map = document.querySelector('.section--map .map');
    var mapAni = new TimelineMax()
        mapAni.set(map, {y: h*0.75})
        .to(map, 1, {y: 0});
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--map',
                triggerHook: 'onLeave',
                offset: h*-0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(mapAni));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--map',
                triggerHook: 'onLeave',
                offset: 0,
                duration: '25%',
                reverse: true,
            })
        .setPin('.section--map .container--map', {pushFollowers: false}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--map',
                triggerHook: 'onLeave',
                offset: h*0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(map, {y: h*-0.75}));

    // *** map
    var reg = document.querySelector('.section--registration .registration');
    var regAni = new TimelineMax()
        regAni.set(reg, {y: h*0.75})
        .to(reg, 1, {y: 0});
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--registration',
                triggerHook: 'onLeave',
                offset: h*-0.5,
                duration: '50%',
                reverse: true,
            })
        .setTween(regAni));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--registration',
                triggerHook: 'onLeave',
                offset: 0,
                duration: '25%',
                reverse: true,
            })
        .setPin('.section--registration .container--registration', {pushFollowers: false}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--registration',
                triggerHook: 'onLeave',
                offset: h*0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(reg, {y: h*-0.5}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--registration',
                triggerHook: 'onLeave',
                offset: h*0.25,
                duration: '15%',
                reverse: true,
            })
        .setTween(bg1blur, {autoAlpha: 0}));

    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--registration',
                triggerHook: 'onLeave',
                offset: h*0.6,
                duration: '15%',
                reverse: true,
            })
        .setTween(bg1blur, {autoAlpha: 1}));

    // *** contact
    var contact = document.querySelector('.section--contact .contact');
    var contactAni = new TimelineMax()
        contactAni.set(contact, {y: 0})
        .to(reg, 1, {y: 0});
    scenes.push(new ScrollMagic.Scene({
                triggerElement: '.section--contact',
                triggerHook: 'onLeave',
                offset: h*-0.25,
                duration: '25%',
                reverse: true,
            })
        .setTween(contactAni));

    // add scenes;
    controller.addScene(scenes);


});