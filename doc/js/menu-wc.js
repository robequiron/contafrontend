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
                                            'data-target="#components-links-module-AppModule-a77e49668ff496a94da0e3593c4e0476"' : 'data-target="#xs-components-links-module-AppModule-a77e49668ff496a94da0e3593c4e0476"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a77e49668ff496a94da0e3593c4e0476"' :
                                            'id="xs-components-links-module-AppModule-a77e49668ff496a94da0e3593c4e0476"' }>
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
                                <a href="modules/ConfigModule.html" data-type="entity-link">ConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfigModule-a5d578a9b8f31f8864d2971a983205a1"' : 'data-target="#xs-components-links-module-ConfigModule-a5d578a9b8f31f8864d2971a983205a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfigModule-a5d578a9b8f31f8864d2971a983205a1"' :
                                            'id="xs-components-links-module-ConfigModule-a5d578a9b8f31f8864d2971a983205a1"' }>
                                            <li class="link">
                                                <a href="components/GeneralComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GeneralComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-033d83869657f1342393850164664180"' : 'data-target="#xs-components-links-module-PagesModule-033d83869657f1342393850164664180"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-033d83869657f1342393850164664180"' :
                                            'id="xs-components-links-module-PagesModule-033d83869657f1342393850164664180"' }>
                                            <li class="link">
                                                <a href="components/ConfigComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContabilidadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContabilidadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CuentaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CuentaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CuentasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CuentasComponent</a>
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
                                                <a href="components/TaxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaxformComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaxformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaxporformComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaxporformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PagesModule-033d83869657f1342393850164664180"' : 'data-target="#xs-pipes-links-module-PagesModule-033d83869657f1342393850164664180"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PagesModule-033d83869657f1342393850164664180"' :
                                            'id="xs-pipes-links-module-PagesModule-033d83869657f1342393850164664180"' }>
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
                                            'data-target="#pipes-links-module-PipesModule-6d6a66a059adbbb0af8819f3550b14d8"' : 'data-target="#xs-pipes-links-module-PipesModule-6d6a66a059adbbb0af8819f3550b14d8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-6d6a66a059adbbb0af8819f3550b14d8"' :
                                            'id="xs-pipes-links-module-PipesModule-6d6a66a059adbbb0af8819f3550b14d8"' }>
                                            <li class="link">
                                                <a href="pipes/CuentaPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CuentaPipe</a>
                                            </li>
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
                                        'data-target="#injectables-links-module-ServicesModule-4afb001337464ccfe700a64d7ecd8766"' : 'data-target="#xs-injectables-links-module-ServicesModule-4afb001337464ccfe700a64d7ecd8766"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-4afb001337464ccfe700a64d7ecd8766"' :
                                        'id="xs-injectables-links-module-ServicesModule-4afb001337464ccfe700a64d7ecd8766"' }>
                                        <li class="link">
                                            <a href="injectables/ColorThemeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ColorThemeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CuentasService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CuentasService</a>
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
                                            <a href="injectables/TaxesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TaxesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsuarioService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ViasService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ViasService</a>
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
                                <a href="classes/Cuenta.html" data-type="entity-link">Cuenta</a>
                            </li>
                            <li class="link">
                                <a href="classes/CuentaTable.html" data-type="entity-link">CuentaTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Grupo.html" data-type="entity-link">Grupo</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrupoTable.html" data-type="entity-link">GrupoTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Porcentaje.html" data-type="entity-link">Porcentaje</a>
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
                                <a href="classes/Tax.html" data-type="entity-link">Tax</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxTable.html" data-type="entity-link">TaxTable</a>
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
                            <li class="link">
                                <a href="classes/Via.html" data-type="entity-link">Via</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViaTable.html" data-type="entity-link">ViaTable</a>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/_iPorcentaje.html" data-type="entity-link">_iPorcentaje</a>
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
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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