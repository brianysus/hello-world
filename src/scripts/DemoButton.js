import React, { Component } from 'react';

import {
    Button,
    Grid,
    VerticalRhythm,
    Icon,
    IconLibrary,
    THEME_CONFIG
} from 'IR-style-guide';

import DemoBox from './DemoBox.js';

const {
    AddIcon,
    SearchIcon
} = IconLibrary;

const { COLOR_BY_NAME } = THEME_CONFIG;

const whiteBackground = {
    padding: '24px'
}

const darkBackground = {
    padding: '24px',
    background: COLOR_BY_NAME.PRIMARY900
}

const modeBackground = {
    padding: '24px',
    background: COLOR_BY_NAME.MODE700
}

function addIcon() {
    return (
        <AddIcon size={ Icon.SIZE.SMALL } />
    );
}

function searchIcon() {
    return (
        <SearchIcon size={ Icon.SIZE.SMALL } />
    );
}

/**
 * Demo Route Component
 *
 * Used to represent a component's demo page for the Style Guide
 *
 * Shows a demo of the Button component
 * Includes the different implementation
 *
 * @class DemoButton
 * @extends Component
 */
export default class DemoButton extends Component {
    render() {
        return (
            <div className="demoNarrowWrapper">
                <Grid totalColumns={ 12 }>
                    <Grid.Column span={ 6 }>
                        <DemoBox style={ whiteBackground }
                                 shouldIncludeVerticalRhythm={ false }>
                            <Button presentation={ Button.PRESENTATION.TEXT_LINK }
                                    shouldRipple={ false }>
                                Text Link Button
                            </Button>
                        </DemoBox>

                        <DemoBox style={ whiteBackground }
                                 shouldIncludeVerticalRhythm={ false }>
                            <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                <Button presentation={ Button.PRESENTATION.PRIMARY }>
                                    Primary Button
                                </Button>
                            </VerticalRhythm>

                            <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                <Button presentation={ Button.PRESENTATION.PRIMARY }
                                        isDisabled={ true }
                                        icon={ addIcon() }>
                                    Disabled Primary Button
                                </Button>
                            </VerticalRhythm>
                            <Button presentation={ Button.PRESENTATION.PRIMARY }
                                    text={ 'Icon Button' }
                                    icon={ addIcon() }>
                                Icon Button
                            </Button>
                        </DemoBox>

                        <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                            <DemoBox isPadded={ true }
                                     shouldIncludeVerticalRhythm={ false }
                                     style={ darkBackground }>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY }>
                                        Primary Button on a dark background
                                    </Button>
                                </VerticalRhythm>

                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY }
                                            isDisabled={ true }
                                            icon={ addIcon() }>
                                        Disabled Primary Button on a dark background
                                    </Button>
                                </VerticalRhythm>
                                <Button presentation={ Button.PRESENTATION.PRIMARY }
                                        text={ 'Icon Button' }
                                        icon={ addIcon() }>
                                    Icon Button on a dark background
                                </Button>
                            </DemoBox>
                        </VerticalRhythm>

                        <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                            <DemoBox isPadded={ true }
                                     shouldIncludeVerticalRhythm={ false }
                                     style={ darkBackground }>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY_ALT }>
                                        Primary Alt
                                    </Button>
                                </VerticalRhythm>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY_ALT }
                                            isDisabled={ true }
                                            icon={ addIcon() }>
                                        Disabled Primary Alt
                                    </Button>
                                </VerticalRhythm>
                                <Button presentation={ Button.PRESENTATION.PRIMARY_ALT }
                                        icon={ addIcon() } >
                                    Icon Button Alt
                                </Button>
                            </DemoBox>
                        </VerticalRhythm>

                        <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                            <DemoBox isPadded={ true }
                                     shouldIncludeVerticalRhythm={ false }
                                     style={ modeBackground }>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY_MODE }>
                                        Primary Mode
                                    </Button>
                                </VerticalRhythm>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY_MODE }
                                            isDisabled={ true }
                                            icon={ addIcon() }>
                                        Disabled Mode
                                    </Button>
                                </VerticalRhythm>
                                <Button presentation={ Button.PRESENTATION.PRIMARY_MODE }
                                        icon={ addIcon() } >
                                    Icon Button Mode
                                </Button>
                            </DemoBox>
                        </VerticalRhythm>

                        <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                            <DemoBox isPadded={ true }
                                     shouldIncludeVerticalRhythm={ false }>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY_DESTRUCTIVE }>
                                        Primary Destructive
                                    </Button>
                                </VerticalRhythm>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY_DESTRUCTIVE }
                                            isDisabled={ true }
                                            icon={ addIcon() }>
                                        Disabled Destructive
                                    </Button>
                                </VerticalRhythm>
                                <Button presentation={ Button.PRESENTATION.PRIMARY_DESTRUCTIVE }
                                        icon={ addIcon() } >
                                    Icon Button Destructive
                                </Button>
                            </DemoBox>
                        </VerticalRhythm>
                    </Grid.Column>
                    <Grid.Column span={ 6 }>
                        <DemoBox style={ whiteBackground }
                                 shouldIncludeVerticalRhythm={ false }>
                            <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                <Button presentation={ Button.PRESENTATION.SECONDARY }>
                                    Secondary Button
                                </Button>
                            </VerticalRhythm>

                            <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                <Button presentation={ Button.PRESENTATION.SECONDARY }
                                        isDisabled={ true }
                                        icon={ addIcon() } >
                                    Disabled Secondary Button
                                </Button>
                            </VerticalRhythm>
                            <Button presentation={ Button.PRESENTATION.SECONDARY }
                                    icon={ addIcon() }>
                                Icon Button
                            </Button>
                        </DemoBox>
                        <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                            <DemoBox style={ whiteBackground }
                                     shouldIncludeVerticalRhythm={ false }>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY }
                                            icon={ addIcon() } />
                                </VerticalRhythm>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.PRIMARY }
                                            isDisabled={ true }
                                            icon={ addIcon() } />
                                </VerticalRhythm>
                                <VerticalRhythm>
                                    <Button presentation={ Button.PRESENTATION.SECONDARY }
                                            isDisabled={ false }
                                            icon={ addIcon() } />
                                </VerticalRhythm>
                            </DemoBox>

                            <DemoBox style={ darkBackground }>
                                <Button presentation={ Button.PRESENTATION.SECONDARY_ALT }
                                        isDisabled={ false }
                                        icon={ addIcon() } />
                            </DemoBox>
                        </VerticalRhythm>

                        <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                            <DemoBox isPadded={ true }
                                     shouldIncludeVerticalRhythm={ false }
                                     style={ modeBackground }>
                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.SECONDARY_ALT }>
                                        Secondary Alt Button on a dark background
                                    </Button>
                                </VerticalRhythm>

                                <VerticalRhythm increment={ VerticalRhythm.SPACING.INCREMENT_1_X }>
                                    <Button presentation={ Button.PRESENTATION.SECONDARY_ALT }
                                            isDisabled={ true }
                                            icon={ addIcon() }>
                                        Disabled Secondary Alt Button on a dark background
                                    </Button>
                                </VerticalRhythm>
                                <Button presentation={ Button.PRESENTATION.SECONDARY_ALT }
                                        text={ 'Icon Button' }
                                        icon={ addIcon() }>
                                    Icon Button on a dark background
                                </Button>
                            </DemoBox>
                        </VerticalRhythm>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
