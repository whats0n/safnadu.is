<?php

/* @var $this \yii\web\View */

/* @var $content string */

use app\widgets\Alert;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>

<?php $this->beginBody() ?>
<?= Breadcrumbs::widget([
    'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
]) ?>
<?= Alert::widget() ?>
<?= $content ?>


<div data-server-rendered="true" id="__nuxt"><!---->
    <div id="__layout">
        <div class="layout is-supernova-theme">
            <div class="layout__inner">
                <div>
                    <div class="welcome">
                        <div class="welcome__logo welcome__logo_left">
                            <div class="welcome__logo-in">
                                <button type="button" class="btn-logo welcome__logo-btn">
                                    <svg width="0.9482758620689655em" height="1em" viewBox="0 0 165 174"
                                         class="btn-logo__icon">
                                        <defs>
                                            <polygon id="7218f872-88c7-f950-c002-a3a171886043"
                                                     points="0.00036000002 0.267840015 104.149086 0.267840015 104.149086 172.799976 0.00036000002 172.799976"></polygon>
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <g transform="translate(-1244.000000, -571.000000)">
                                                <g transform="translate(1244.000000, 571.000000)">
                                                    <g>
                                                        <path d="M120.900319,173.198673 C114.932958,173.198673 110.240718,167.628753 111.761358,161.412993 C112.807518,157.136193 116.967678,154.346192 121.369759,154.346192 L141.73424,154.346192 C146.13632,154.346192 150.2972,157.136193 151.34264,161.412993 C152.864,167.628753 148.17104,173.198673 142.20368,173.198673 L120.900319,173.198673 Z"
                                                              fill="currentColor"></path>
                                                        <path d="M104.35227,144.013328 C98.3834694,144.013328 93.6897891,138.434768 95.2140292,132.219007 C96.2623493,127.945087 100.421789,125.157247 104.82243,125.157247 L150.656192,125.157247 C155.056832,125.157247 159.216273,127.945087 160.264593,132.218287 C161.788113,138.434768 157.095153,144.013328 151.126352,144.013328"
                                                              fill="currentColor"></path>
                                                        <path d="M90.684869,114.823806 C84.7167886,114.823806 80.0238284,109.247406 81.5459085,103.032366 C82.5920685,98.7591654 86.7500687,95.9720452 91.149989,95.9720452 L155.122712,95.9720452 C159.521913,95.9720452 163.680633,98.7591654 164.726793,103.032366 C166.248153,109.247406 161.555913,114.823806 155.587833,114.823806 L90.684869,114.823806 Z"
                                                              fill="currentColor"></path>
                                                        <path d="M105.749358,85.6391807 C99.7805575,85.6391807 95.0868772,80.0599004 96.6111173,73.84414 C97.6594373,69.5702198 101.818878,66.7830996 106.219518,66.7830996 L150.80408,66.7830996 C155.20472,66.7830996 159.364881,69.5702198 160.413201,73.84414 C161.936721,80.0599004 157.243761,85.6391807 151.27424,85.6391807 L105.749358,85.6391807 Z"
                                                              fill="currentColor"></path>
                                                        <g transform="translate(0.000000, 0.452160)">
                                                            <mask id="73459124-7ab1-197a-fcf1-eaa8df1baafc"
                                                                  fill="white">
                                                                <use xlink:href="#7218f872-88c7-f950-c002-a3a171886043"></use>
                                                            </mask>
                                                            <path d="M87.3774048,30.1196896 C86.4140447,24.9925694 84.7573246,20.0130491 82.3424445,15.3553688 C80.2177244,11.2578486 77.4774042,7.3849684 73.903324,4.42360824 C69.8871638,1.09504806 64.5490835,-0.19087201 59.3722832,0.411048022 C58.7962832,0.478008026 58.1907632,0.582408032 57.7450832,0.953208052 C56.5844431,1.9187281 57.2504431,3.77272821 57.9258032,5.12272828 C63.9608435,17.1985689 63.4683635,31.8844097 58.4809232,44.4289704 C53.4942029,56.9735311 44.3775624,67.5373717 33.9433219,76.1017722 C23.5083613,84.6661726 11.7226806,91.403933 0.00036000002,98.0984934 C15.8022009,122.074495 31.6033217,146.049776 47.4051626,170.024337 C48.0366026,170.984097 48.7249227,171.990657 49.7739627,172.455057 C50.5414828,172.794897 51.4083628,172.800657 52.2471629,172.799937 C69.5473238,172.792737 86.8489247,172.784817 104.149086,172.777617 C87.6589248,150.114896 71.1680439,127.452175 54.678603,104.788734 C67.5450037,93.8886531 78.5386843,80.3296124 84.2850046,64.4766515 C88.2435648,53.5549709 89.5100449,41.4740903 87.3774048,30.1196896"
                                                                  fill="currentColor"
                                                                  mask="url(#73459124-7ab1-197a-fcf1-eaa8df1baafc)"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="welcome__logo welcome__logo_right">
                            <div class="welcome__logo-in">
                                <button type="button" class="btn-logo welcome__logo-btn">
                                    <svg width="0.9482758620689655em" height="1em" viewBox="0 0 165 174"
                                         class="btn-logo__icon">
                                        <defs>
                                            <polygon id="b801d5fd-9053-d4e7-0b03-b1a93dcd45df"
                                                     points="0.00036000002 0.267840015 104.149086 0.267840015 104.149086 172.799976 0.00036000002 172.799976"></polygon>
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <g transform="translate(-1244.000000, -571.000000)">
                                                <g transform="translate(1244.000000, 571.000000)">
                                                    <g>
                                                        <path d="M120.900319,173.198673 C114.932958,173.198673 110.240718,167.628753 111.761358,161.412993 C112.807518,157.136193 116.967678,154.346192 121.369759,154.346192 L141.73424,154.346192 C146.13632,154.346192 150.2972,157.136193 151.34264,161.412993 C152.864,167.628753 148.17104,173.198673 142.20368,173.198673 L120.900319,173.198673 Z"
                                                              fill="currentColor"></path>
                                                        <path d="M104.35227,144.013328 C98.3834694,144.013328 93.6897891,138.434768 95.2140292,132.219007 C96.2623493,127.945087 100.421789,125.157247 104.82243,125.157247 L150.656192,125.157247 C155.056832,125.157247 159.216273,127.945087 160.264593,132.218287 C161.788113,138.434768 157.095153,144.013328 151.126352,144.013328"
                                                              fill="currentColor"></path>
                                                        <path d="M90.684869,114.823806 C84.7167886,114.823806 80.0238284,109.247406 81.5459085,103.032366 C82.5920685,98.7591654 86.7500687,95.9720452 91.149989,95.9720452 L155.122712,95.9720452 C159.521913,95.9720452 163.680633,98.7591654 164.726793,103.032366 C166.248153,109.247406 161.555913,114.823806 155.587833,114.823806 L90.684869,114.823806 Z"
                                                              fill="currentColor"></path>
                                                        <path d="M105.749358,85.6391807 C99.7805575,85.6391807 95.0868772,80.0599004 96.6111173,73.84414 C97.6594373,69.5702198 101.818878,66.7830996 106.219518,66.7830996 L150.80408,66.7830996 C155.20472,66.7830996 159.364881,69.5702198 160.413201,73.84414 C161.936721,80.0599004 157.243761,85.6391807 151.27424,85.6391807 L105.749358,85.6391807 Z"
                                                              fill="currentColor"></path>
                                                        <g transform="translate(0.000000, 0.452160)">
                                                            <mask id="174a88ad-3c5b-d102-935a-cb707fcc29c5"
                                                                  fill="white">
                                                                <use xlink:href="#b801d5fd-9053-d4e7-0b03-b1a93dcd45df"></use>
                                                            </mask>
                                                            <path d="M87.3774048,30.1196896 C86.4140447,24.9925694 84.7573246,20.0130491 82.3424445,15.3553688 C80.2177244,11.2578486 77.4774042,7.3849684 73.903324,4.42360824 C69.8871638,1.09504806 64.5490835,-0.19087201 59.3722832,0.411048022 C58.7962832,0.478008026 58.1907632,0.582408032 57.7450832,0.953208052 C56.5844431,1.9187281 57.2504431,3.77272821 57.9258032,5.12272828 C63.9608435,17.1985689 63.4683635,31.8844097 58.4809232,44.4289704 C53.4942029,56.9735311 44.3775624,67.5373717 33.9433219,76.1017722 C23.5083613,84.6661726 11.7226806,91.403933 0.00036000002,98.0984934 C15.8022009,122.074495 31.6033217,146.049776 47.4051626,170.024337 C48.0366026,170.984097 48.7249227,171.990657 49.7739627,172.455057 C50.5414828,172.794897 51.4083628,172.800657 52.2471629,172.799937 C69.5473238,172.792737 86.8489247,172.784817 104.149086,172.777617 C87.6589248,150.114896 71.1680439,127.452175 54.678603,104.788734 C67.5450037,93.8886531 78.5386843,80.3296124 84.2850046,64.4766515 C88.2435648,53.5549709 89.5100449,41.4740903 87.3774048,30.1196896"
                                                                  fill="currentColor"
                                                                  mask="url(#174a88ad-3c5b-d102-935a-cb707fcc29c5)"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="container welcome__container">
                            <div class="welcome__title title-xl">
                                <div class="welcome__title-in">
                                    Velkomin<br>
                                    á safn safnanna
                                </div>
                            </div>
                            <div class="content">
                                <ul class="welcome__words">
                                    <li class="welcome__words-item">
                                        allt
                                    </li>
                                    <li class="welcome__words-item">
                                        sýningar
                                    </li>
                                    <li class="welcome__words-item">
                                        sjónlistir
                                    </li>
                                    <li class="welcome__words-item">
                                        tónlist
                                    </li>
                                    <li class="welcome__words-item">
                                        börn
                                    </li>
                                    <li class="welcome__words-item">
                                        hátíðir
                                    </li>
                                    <li class="welcome__words-item">
                                        bókmenntir
                                    </li>
                                    <li class="welcome__words-item">
                                        fjölskyldan
                                    </li>
                                    <li class="welcome__words-item">
                                        ljósmyndir
                                    </li>
                                    <li class="welcome__words-item">
                                        gagnvirkt
                                    </li>
                                    <li class="welcome__words-item">
                                        myndlist
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main">
                    <div>
                        <div data-section="event-list" class="event-list">
                            <header class="header">
                                <div class="header__inner">
                                    <div class="container header__container"><span class="title-xl header__title">Safnaðu</span>
                                        <ul class="header__tabs">
                                            <li class="header__tabs-item"><a href="/sofnin"
                                                                             rel="noopener noreferrer nofollow"
                                                                             class="header__tabs-btn">söfnin</a></li>
                                            <li class="header__tabs-item"><a href="/safnadu"
                                                                             rel="noopener noreferrer nofollow"
                                                                             class="header__tabs-btn">#safnaðu</a></li>
                                        </ul> <!---->
                                        <div class="header__logo"><img src="/_nuxt/img/de9e711.png" alt></div>
                                    </div>
                                </div>
                            </header>
                            <div class="filters">
                                <div class="filters__wrapper">
                                    <div class="filters__container">
                                        <button type="button" class="filters__close">
                                            <svg width="30px" height="38px" viewBox="0 0 42 42" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 class="filters__icon-search"><title>Shape</title>
                                                <desc>Created with Sketch.</desc>
                                                <g id="design" stroke="none" stroke-width="1" fill="none"
                                                   fill-rule="evenodd">
                                                    <g id="Artboard" transform="translate(-354.000000, -45.000000)"
                                                       fill="#1809BA" fill-rule="nonzero">
                                                        <g id="iconfinder_11_Search_106236"
                                                           transform="translate(354.000000, 45.000000)">
                                                            <path id="Shape"
                                                                  d="M40.8444657,40.8444657 C39.3037532,42.3851781 36.8064734,42.3851781 35.265679,40.8444657 L28.3043362,33.8830409 C25.4423452,35.7190661 22.0592911,36.8129539 18.406518,36.8129539 C8.2416057,36.8129539 0,28.5724967 0,18.4064359 C0,8.24037523 8.2416057,0 18.406518,0 C28.5727427,0 36.813036,8.24021117 36.813036,18.4064359 C36.813036,22.0579786 35.7177536,25.4423452 33.8830409,28.3056487 L40.8444657,35.2670735 C42.3851781,36.8077859 42.3851781,39.3037532 40.8444657,40.8444657 Z M18.406518,5.25894654 C11.1458429,5.25894654 5.25902857,11.1444484 5.25902857,18.4063539 C5.25902857,25.6682594 11.1459249,31.5538433 18.406518,31.5538433 C25.6683415,31.5538433 31.5539253,25.6682594 31.5539253,18.4063539 C31.5539253,11.1444484 25.6683415,5.25894654 18.406518,5.25894654 Z"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            &lt; leita
                                        </button>
                                        <form class="filters__inner">
                                            <div class="filters__fieldset">
                                                <div class="filters__field">
                                                    <div class="filters__label">Tegund</div>
                                                    <div class="filters__control">
                                                        <div class="select">
                                                            <div class="select__header">
                                                                <div class="select__value">allt</div>
                                                                <div class="select__arrow">></div>
                                                            </div> <!----></div>
                                                    </div>
                                                </div>
                                                <div class="filters__field">
                                                    <div class="filters__label">Dagsetning</div>
                                                    <div class="filters__control">
                                                        <div class="tag-list filters__tag-list">
                                                            <ul class="tag-list__list">
                                                                <li class="tag-list__item">
                                                                    <div class="tag">
                                                                        <button type="button" class="tag__btn">
                                                                            í dag
                                                                        </button>
                                                                        <button type="button" class="tag__close"><i
                                                                                    class="tag__close-icon icon icon-close"></i>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li class="tag-list__item">
                                                                    <div class="tag">
                                                                        <button type="button" class="tag__btn">
                                                                            á morgun
                                                                        </button>
                                                                        <button type="button" class="tag__close"><i
                                                                                    class="tag__close-icon icon icon-close"></i>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li class="tag-list__item">
                                                                    <div class="tag">
                                                                        <button type="button" class="tag__btn">
                                                                            dagatal
                                                                        </button>
                                                                        <button type="button" class="tag__close"><i
                                                                                    class="tag__close-icon icon icon-close"></i>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul> <!----></div>
                                                    </div>
                                                </div>
                                                <div class="filters__field">
                                                    <div class="filters__label">Tími</div>
                                                    <div class="filters__control">
                                                        <div class="tag-list filters__tag-list">
                                                            <ul class="tag-list__list">
                                                                <li class="tag-list__item">
                                                                    <div class="tag">
                                                                        <button type="button" class="tag__btn">
                                                                            Fyrir hádegi
                                                                        </button>
                                                                        <button type="button" class="tag__close"><i
                                                                                    class="tag__close-icon icon icon-close"></i>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li class="tag-list__item">
                                                                    <div class="tag">
                                                                        <button type="button" class="tag__btn">
                                                                            Eftirmiðdagur
                                                                        </button>
                                                                        <button type="button" class="tag__close"><i
                                                                                    class="tag__close-icon icon icon-close"></i>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li class="tag-list__item">
                                                                    <div class="tag">
                                                                        <button type="button" class="tag__btn">
                                                                            Kvöld
                                                                        </button>
                                                                        <button type="button" class="tag__close"><i
                                                                                    class="tag__close-icon icon icon-close"></i>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul> <!----></div>
                                                    </div>
                                                </div>
                                                <div class="filters__field">
                                                    <div class="filters__label">Leitarorð</div>
                                                    <div class="filters__control"><input
                                                                placeholder="skrifaðu inn leitarorð"
                                                                class="input filters__input"></div>
                                                </div>
                                            </div>
                                            <div class="filters__footer">
                                                <button type="submit" class="btn">Leita</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="filters__overlay"></div>
                            </div>
                            <div class="container event-list__container">
                                <div class="content">
                                    <div class="event-list__inner"><!----></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>window.__NUXT__ = function (E) {
        return {
            layout: "default",
            data: [{}],
            error: E,
            state: {
                common: {
                    LOADING: !1,
                    THEME: 0,
                    VIEW: 0,
                    COUNT: E,
                    SELECTED_TYPE: "allt",
                    SELECTED_PLACE: "Ljósmyndasafn Reykjavíkur",
                    SELECTED_ACCESS: "Allt",
                    SELECTED_DATE: E,
                    SELECTED_TIME: E,
                    SEARCH: "",
                    EVENTS: [],
                    EVENT_LIST_SCROLL_POSITION: 0,
                    EVENTS_LIMIT: 50,
                    EVENTS_OFFSET: 0
                }
            },
            serverRendered: !0
        }
    }(null)</script>
<script src="/_nuxt/039c3200eb954dfb46c3.js" defer></script>
<script src="/_nuxt/01a6f109001c002656ed.js" defer></script>
<script src="/_nuxt/1e8cb1ae1a9fc4997c6a.js" defer></script>
<script src="/_nuxt/f3cdee17c9f8a2659af5.js" defer></script>
<script src="/_nuxt/bffcc98950f6ecb51bd2.js" defer></script>
<script src="/_nuxt/a0eb089cab1cc0e08a7e.js" defer></script>


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
