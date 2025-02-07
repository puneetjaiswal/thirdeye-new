/*
 * Copyright 2022 StarTree Inc
 *
 * Licensed under the StarTree Community License (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at http://www.startree.ai/legal/startree-community-license
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT * WARRANTIES OF ANY KIND,
 * either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under
 * the License.
 */
import React, { FunctionComponent, lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppBarConfigProvider } from "../../components/app-bar/app-bar-config-provider/app-bar-config-provider.component";
import { PageNotFoundPage } from "../../pages/page-not-found-page/page-not-found-page.component";
import { AppLoadingIndicatorV1 } from "../../platform/components";
import { AppRouteRelative } from "../../utils/routes/routes.util";

const WelcomeLandingPage = lazy(() =>
    import(
        /* webpackChunkName: "welcome-landing-page" */ "../../pages/welcome-page/landing/landing-page.component"
    ).then((module) => ({ default: module.WelcomeLandingPage }))
);

const WelcomeOnboardDatasourceWizard = lazy(() =>
    import(
        /* webpackChunkName: "welcome-onboard-datasource" */ "../../pages/welcome-page/create-datasource/create-datasource-page.component"
    ).then((module) => ({ default: module.WelcomeOnboardDatasourceWizard }))
);

const WelcomeSelectDatasource = lazy(() =>
    import(
        /* webpackChunkName: "elect-datasource" */ "../../pages/welcome-page/create-datasource/onboard-datasource/onboard-datasource-page.component"
    ).then((module) => ({ default: module.WelcomeSelectDatasource }))
);

const WelcomeSelectDatasets = lazy(() =>
    import(
        /* webpackChunkName: "select-datasets" */ "../../pages/welcome-page/create-datasource/onboard-datasets/onboard-datasets-page.component"
    ).then((module) => ({ default: module.WelcomeSelectDatasets }))
);

const AlertsCreateGuidedRouter = lazy(() =>
    import(
        /* webpackChunkName: "alerts-guided-create" */ "../alerts-guided-create/alerts-guided-create.router"
    ).then((module) => ({ default: module.AlertsCreateGuidedRouter }))
);

export const WelcomeRouter: FunctionComponent = () => {
    const { t } = useTranslation();
    const { setShowAppNavBar } = useAppBarConfigProvider();

    useEffect(() => {
        setShowAppNavBar(false);
    }, []);

    return (
        <Suspense fallback={<AppLoadingIndicatorV1 />}>
            <Routes>
                {/* Welcome index path */}
                {/* Redirect to metrics all path */}
                <Route
                    index
                    element={
                        <Navigate
                            replace
                            to={AppRouteRelative.WELCOME_LANDING}
                        />
                    }
                />

                {/* Welcome landing path */}
                <Route
                    element={<WelcomeLandingPage />}
                    path={AppRouteRelative.WELCOME_LANDING}
                />

                {/* Welcome onboard-datasource path */}
                <Route
                    element={<WelcomeOnboardDatasourceWizard />}
                    path={`${AppRouteRelative.WELCOME_ONBOARD_DATASOURCE}/*`}
                >
                    {/* Welcome onboard-datasource index path */}
                    {/* Redirect to onboard-datasource datasource path */}
                    <Route
                        index
                        element={
                            <Navigate
                                replace
                                to={
                                    AppRouteRelative.WELCOME_ONBOARD_DATASOURCE_DATASOURCE
                                }
                            />
                        }
                    />

                    {/* Welcome onboard-datasource datasource path */}
                    <Route
                        element={<WelcomeSelectDatasource />}
                        path={
                            AppRouteRelative.WELCOME_ONBOARD_DATASOURCE_DATASOURCE
                        }
                    />

                    {/* Welcome onboard-datasource datasets path */}
                    <Route
                        element={<WelcomeSelectDatasets />}
                        path={
                            AppRouteRelative.WELCOME_ONBOARD_DATASOURCE_DATASETS
                        }
                    />

                    <Route
                        element={
                            <Navigate
                                replace
                                to={
                                    AppRouteRelative.WELCOME_ONBOARD_DATASOURCE_DATASOURCE
                                }
                            />
                        }
                        path="*"
                    />
                </Route>

                {/* Welcome create alert path */}
                <Route
                    element={
                        <AlertsCreateGuidedRouter
                            hideCurrentlySelected
                            showEmailOnlyForSubscriptionGroup
                            createLabel={t("label.create")}
                            inProgressLabel={t("label.creating")}
                        />
                    }
                    path={`${AppRouteRelative.WELCOME_CREATE_ALERT}/*`}
                />

                {/* No match found, render page not found */}
                <Route element={<PageNotFoundPage />} path="*" />
            </Routes>
        </Suspense>
    );
};
