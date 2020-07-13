<script>
    import debounce from 'lodash-es/debounce';
    import {support} from '~/assets/utils-support.js';
    import {ID_HOST} from '~/assets/variables.js';
    import Header from '~/layouts/_header.vue';
    import Footer from '~/layouts/_footer';

    export default {
        ID_HOST,
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                sectionList: [],
                hash: this.$route.hash,
                isScrollTriggeredManually: false,
                isMenuActive: false,
            };
        },
        computed: {
            // hash() {
            //     return this.$route.hash.replace('#', '');
            // },
            flatAll() {
                let result = [];
                this.sectionList.forEach((section) => {
                    result = result.concat(section);
                    result = result.concat(section.projectList);
                });
                return result;
            },
            activeItem() {
                const section = this.sectionList.find((section) => section.id === this.hash);
                if (section) {
                    return {...section, type: 'section'};
                }
                let flatProjectList = [];
                this.sectionList.forEach((section) => {
                    flatProjectList = flatProjectList.concat(section.projectList);
                });
                const project = flatProjectList.find((project) => project.id === this.hash);
                if (project) {
                    return {...project, type: 'project'};
                }

                return this.sectionList.length ? {...this.sectionList[0], type: 'section'} : null;
            },
            activeSectionId() {
                if (!this.activeItem) {
                    return '';
                }
                if (this.activeItem.type === 'section') {
                    return this.activeItem.id;
                } else {
                    // item is project: get it's section
                    return this.activeItem.section;
                }
            },
            activeProjectId() {
                if (!this.activeItem) {
                    return '';
                }
                if (this.activeItem.type === 'project') {
                    return this.activeItem.id;
                } else {
                    // item is section: get it's first project
                    return this.activeItem.projectList[0]?.id;
                }
            },
        },
        created() {
            this.$nuxt.$on('update-project-nav', (sectionList) => {
                this.sectionList = sectionList;
            });
        },
        mounted() {
            checkHeaderHeight();
            setHeaderTopProperty();
            window.addEventListener('hashchange', this.handleHashChange);
            window.addEventListener('scroll', this.handleScroll, support.passiveListener ? {passive: true} : false);
            window.addEventListener('resize', this.handleResize, support.passiveListener ? {passive: true} : false);
            window.addEventListener('orientationchange', this.handleResize, support.passiveListener ? {passive: true} : false);
        },
        destroyed() {
            window.removeEventListener('hashchange', this.handleHashChange);
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
            window.removeEventListener('orientationchange', this.handleResize);
        },
        methods: {
            handleNavUpdate(id, disableScroll) {
                if (!disableScroll) {
                    // scroll to anchor
                    this.isScrollTriggeredManually = true;
                    window.scrollTo(0, getOffsetTop(document.getElementById(id)));
                }
                if (this.hash === id) {
                    return;
                }
                this.setHash(id);
                this.$nextTick(() => {
                    const activeLink = document.querySelector(`.docs-aside__page-nav-link[href="#${id}"]`);
                    activeLink?.scrollIntoView({block: 'nearest'});
                })
            },
            setHash(id) {
                replaceHistoryWithHash(this.sectionList[0].id === id ? '' : id);
                // onhashchange doesn't triggers here, change manually
                this.hash = id;
            },
            handleHashChange() {
                // only handles manual typing to url
                this.hash = window.location.hash.replace('#', '');
            },
            handleScroll() {
                setHeaderTopProperty();
                // don't override url hash after manual link click
                if (this.isScrollTriggeredManually) {
                    this.isScrollTriggeredManually = false;
                    return;
                }
                this.checkActiveLink();
            },
            handleResize() {
                const clientWidth = document.body.clientWidth
                checkHeaderHeight(clientWidth);
                // checkDesktop.call(this, clientWidth);
                debouncedSetHeaderTopProperty();
            },
            checkActiveLink() {
                const nodes = this.flatAll.map((item) => item.el);
                const scrollTop = Math.max(0, window.pageYOffset);
                const windowCenter = scrollTop + window.innerHeight * 0.33;
                const activeIndex = findActiveByBottom(windowCenter, nodes);
                this.handleNavUpdate(nodes[activeIndex].id, true);
            },
            toggleMenu() {
                this.isMenuActive = !this.isMenuActive;
            },
        },
    };

    const debouncedSetHeaderTopProperty = debounce(setHeaderTopProperty, 50);
    function setHeaderTopProperty() {
        document.documentElement.style.setProperty('--header-visible-height', Math.max(headerHeight - window.scrollY, 0) + 'px');
    }
    let headerHeight = 80;
    function checkHeaderHeight(clientWidth) {
        if (!process.client) {
            return;
        }
        clientWidth = clientWidth || document.body.clientWidth;
        if (clientWidth >= 960) {
            headerHeight = 80
        } else {
            headerHeight = 56;
        }
    }


    /**
     * Секция включает в себя область от своего начала до начала следующей секции, ищем попадание центра окна в область секции
     * @param {number} windowCenter
     * @param {NodeList} sectionList
     * @return {number}
     */
    function findActiveByBottom(windowCenter, sectionList) {
        const sectionsPos = new SectionPos(sectionList);
        let activeIndex;

        Array.from(sectionList).some(function(section, index) {
            if (windowCenter >= sectionsPos.get(index) && windowCenter <= sectionsPos.get(index + 1)) {
                activeIndex = index;
                return true;
            }
        });

        return activeIndex;
    }

    function SectionPos(sectionList) {
        const positions = [];

        /**
         * @param index
         * @return {number} section's offset top
         */
        this.get = function(index) {
            if (typeof positions[index] === 'undefined') {
                if (index === 0) {
                    positions[index] = 0;
                } else if (index === sectionList.length) {
                    positions[index] = 9999999;
                } else {
                    positions[index] = getOffsetTop(sectionList[index]);
                }
            }

            return positions[index];
        }
    }

    function getOffsetTop(el) {
        if (!el) {
            return false;
        }
        const rect = el.getBoundingClientRect();
        return rect.top + window.pageYOffset;
    }

    const replaceHistoryWithHash = debounce((hash) => {
        hash = hash ? '#' + hash : window.location.pathname;
        window.history.replaceState(window.history.state, null, hash);
    }, 1000)
</script>

<template>
    <div class="main-wrap main-wrap--docs">
        <Header title="Projects"/>

        <button class="docs-aside-button u-semantic-button u-hidden-medium-up" :class="{'is-active': isMenuActive}" @click="toggleMenu">
                        <span class="header__offcanvas-icon-wrap">
                            <span class="header__offcanvas-icon">Menu</span>
                        </span>
        </button>

        <div class="main-content u-grid u-grid--no-margin">
            <aside class="docs-aside u-cell u-cell--medium--1-4">
                <div class="docs-aside__sticky">
                    <div class="docs-aside__page" v-for="section in sectionList">
                        <div class="docs-aside__page-link">
                            <a :href="'#' + section.id" class="docs-aside__menu-link"
                               :class="{'is-active': section.id === activeSectionId}"
                               @click.prevent="handleNavUpdate(section.id)"
                            >
                                {{ section.title }}
                            </a>
                        </div>
                        <ul class="sidebar-links docs-aside__page-nav">
                            <li class="docs-aside__page-nav-item" :class="{'is-active': project.id === activeProjectId}" v-for="project in section.projectList">
                                <a :href="'#' + project.id" class="docs-aside__page-nav-link" @click.prevent="handleNavUpdate(project.id)">
                                    {{ project.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            <main class="docs-content u-cell u-cell--medium--3-4">
                <nuxt class="main-content"/>
            </main>
        </div>

        <Footer/>
    </div>
</template>

