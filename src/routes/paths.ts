import { SESSION_SLUG } from "@lib/constants";
import { makeId as makeSlug } from "@lib/helpers/string";

const sessionSlug = (): string => {
    if (sessionStorage.getItem(SESSION_SLUG))
        return sessionStorage.getItem(SESSION_SLUG)!;
    else {
        let newString = makeSlug();
        sessionStorage.setItem(SESSION_SLUG, newString);
        return newString;
    }
};

interface Paths {
    home: string;
    survey: string;
    completedSurvey: string;
    notFound: string;
}

export const PATHS = (slug: string = ""): Paths => {
    return {
        home: `/`,
        survey: `/survey`,
        completedSurvey: `/survey-completed/${slug}/${sessionSlug()}`,
        notFound: `*`,
    };
};
