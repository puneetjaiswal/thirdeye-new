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
import { Icon } from "@iconify/react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    useTheme,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { LocalThemeProviderV1 } from "../../../../../../platform/components";
import { SpecType } from "../../../../../../rest/dto/subscription-group.interfaces";
import { EmailListInput } from "../../../../../form-basics/email-list-input/email-list-input.component";
import { InputSection } from "../../../../../form-basics/input-section/input-section.component";
import {
    subscriptionGroupChannelHeaderMap,
    subscriptionGroupChannelIconsMap,
} from "../../../../../subscription-group-view/notification-channels-card/notification-channels-card.utils";
import { EmailProps } from "./email.interfaces";

export const Email: FunctionComponent<EmailProps> = ({
    subscriptionGroup,
    onSubscriptionGroupEmailsChange,
    onDeleteClick,
}) => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Card>
            <CardContent>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Box clone alignItems="center" display="flex">
                            <Typography variant="h5">
                                <Icon
                                    color={theme.palette.primary.main}
                                    height={28}
                                    icon={
                                        subscriptionGroupChannelIconsMap[
                                            SpecType.Slack
                                        ]
                                    }
                                />
                                &nbsp;
                                {t(
                                    subscriptionGroupChannelHeaderMap[
                                        SpecType.Slack
                                    ]
                                )}
                            </Typography>
                        </Box>{" "}
                    </Grid>
                    <Grid item>
                        <Box textAlign="right">
                            <LocalThemeProviderV1 primary={theme.palette.error}>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    onClick={onDeleteClick}
                                >
                                    {t("label.delete")}
                                </Button>
                            </LocalThemeProviderV1>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <InputSection
                    inputComponent={
                        <EmailListInput
                            emails={
                                (subscriptionGroup &&
                                    subscriptionGroup.notificationSchemes
                                        .email &&
                                    subscriptionGroup.notificationSchemes.email
                                        .to) ||
                                []
                            }
                            onChange={onSubscriptionGroupEmailsChange}
                        />
                    }
                    label={t("label.add-email")}
                />
            </CardContent>
        </Card>
    );
};
