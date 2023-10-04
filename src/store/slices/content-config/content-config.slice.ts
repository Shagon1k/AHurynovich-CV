import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { type IContentConfig } from './content-config.types';

export interface IContentConfigState {
    config: IContentConfig;
}

const initialState: IContentConfigState = {
    config: {
        pdfCVUrl: '',
        sourceCodeUrl: '',
        a11yStatementMarkup: {
            en: '',
        },
        aboutMe: {
            isSearchingForWork: false,
            description: {
                en: '',
            },
        },
        skills: [],
        fiveReasons: [],
        feedbacks: [],
        careerFlow: [],
        pastProjects: [],
        contactInfo: {
            email: '',
            socials: [],
        },
    },
};

const contentConfigSlice = createSlice({
    name: 'contentConfig',
    initialState,
    reducers: {
        setContentConfig: (state, action: PayloadAction<IContentConfig>) => {
            state.config = action.payload;
        },
    },
});

export const { setContentConfig } = contentConfigSlice.actions;
export default contentConfigSlice.reducer;
