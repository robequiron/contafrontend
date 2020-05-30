'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2bdd186694ee4ae0d70feba9ef0c7f3c"' : 'data-target="#xs-components-links-module-AppModule-2bdd186694ee4ae0d70feba9ef0c7f3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2bdd186694ee4ae0d70feba9ef0c7f3c"' :
                                            'id="xs-components-links-module-AppModule-2bdd186694ee4ae0d70feba9ef0c7f3c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' : 'data-target="#xs-components-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' :
                                            'id="xs-components-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' }>
                                            <li class="link">
                                                <a href="components/ConfigComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContabilidadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContabilidadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrupoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrupoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GruposComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GruposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotfoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubcuentaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubcuentaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubcuentasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubcuentasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubgrupoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubgrupoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubgruposComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubgruposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' : 'data-target="#xs-pipes-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' :
                                            'id="xs-pipes-links-module-PagesModule-b12e7c4f1e04600b0f163cf5bec800c0"' }>
                                            <li class="link">
                                                <a href="pipes/RoundceilPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoundceilPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-e7a1510c48a4e95c1aeed4f874603c9b"' : 'data-target="#xs-pipes-links-module-PipesModule-e7a1510c48a4e95c1aeed4f874603c9b"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-e7a1510c48a4e95c1aeed4f874603c9b"' :
                                            'id="xs-pipes-links-module-PipesModule-e7a1510c48a4e95c1aeed4f874603c9b"' }>
                                            <li class="link">
                                                <a href="pipes/RoundceilPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoundceilPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-f40fd6c170d80355d39c78df966b78a3"' : 'data-target="#xs-injectables-links-module-ServicesModule-f40fd6c170d80355d39c78df966b78a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-f40fd6c170d80355d39c78df966b78a3"' :
                                        'id="xs-injectables-links-module-ServicesModule-f40fd6c170d80355d39c78df966b78a3"' }>
                                        <li class="link">
                                            <a href="injectables/ColorThemeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ColorThemeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GruposService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GruposService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MenuSidebarService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuSidebarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SubgruposService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SubgruposService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-17eb59dc47619ab1e04fea4c05abb516"' : 'data-target="#xs-components-links-module-SharedModule-17eb59dc47619ab1e04fea4c05abb516"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-17eb59dc47619ab1e04fea4c05abb516"' :
                                            'id="xs-components-links-module-SharedModule-17eb59dc47619ab1e04fea4c05abb516"' }>
                                            <li class="link">
                                                <a href="components/ColorthemeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorthemeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarfooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarfooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Grupo.html" data-type="entity-link">Grupo</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrupoTable.html" data-type="entity-link">GrupoTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subcuenta.html" data-type="entity-link">Subcuenta</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubcuentaTable.html" data-type="entity-link">SubcuentaTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subgrupo.html" data-type="entity-link">Subgrupo</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubgrupoTable.html" data-type="entity-link">SubgrupoTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link">Users</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserTable.html" data-type="entity-link">UserTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SubcuentasService.html" data-type="entity-link">SubcuentasService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorService.html" data-type="entity-link">InterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LoginGuardGuard.html" data-type="entity-link">LoginGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});