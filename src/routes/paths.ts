interface Paths {
    home: string;
    test: string;
    finishScreen: string;
    notFound: string;
}

export const PATHS = (slug: string = ""): Paths => {
    return {
        home: `/`,
        test: `/test/${slug}`,
        finishScreen: `/test-completed`,
        notFound: `*`,
    };
};
