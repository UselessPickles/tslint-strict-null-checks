export const testCases = [
    {
        shouldWarn: true,
        source:
        `class X1 {
            prop1: string;
        }`,
    },
    {
        shouldWarn: false,
        source:
        `class X1 {
            prop1: string = '';
        }`,
    },
    {
        shouldWarn: false,
        source:
        `class X1 {
            prop1?: string;
        }`,
    },
    {
        shouldWarn: true,
        source:
        `class X1 {
            prop1: string;
            constructor() { }
        }`,
    },
    {
        shouldWarn: false,
        source:
        `class X1 {
            prop1: string;
            constructor() {
                this.prop1 = '';
            }
        }`,
    },
    {
        shouldWarn: false,
        source:
        `class X1 {
            prop1: string | undefined;
        }`,
    },
    {
        shouldWarn: true,
        source:
        `class X1 {
            prop1: string | null;
        }`,
    },
    {
        shouldWarn: true,
        source:
        `abstract class X1 {
            prop1: string;
        }`,
    },
    {
        shouldWarn: false,
        source:
        `abstract class X1 {
            prop1: string;
            constructor() {
                this.prop1 = '';
            }
        }`,
    },
];
