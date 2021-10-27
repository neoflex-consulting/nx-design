/// <reference types="react" />
import { DecoratorFn } from '@storybook/react';
declare type CSFStory = {
    (): JSX.Element;
    story?: {
        name?: string;
        decorators?: readonly DecoratorFn[];
        parameters?: {
            [name: string]: unknown;
        };
    };
};
declare type StoryMetadata = {
    title: string;
    id: string;
    decorators?: readonly DecoratorFn[];
    includeStories?: string[];
    excludeStories?: string[];
    parameters?: {
        docs?: {
            page: (props: any) => JSX.Element;
        };
        design?: {
            type: string;
            url: string;
        };
    };
};
export declare const createStory: (Component: CSFStory, params?: CSFStory['story']) => CSFStory;
export declare const createMetadata: (params: StoryMetadata) => StoryMetadata;
export declare const getStoryIds: (obj: Record<string, unknown>) => string[];
export {};
