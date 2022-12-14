import { SVGProps } from "react";

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.7959 6.65991C1.24361 6.65991 0.795898 7.10763 0.795898 7.65991C0.795898 8.2122 1.24361 8.65991 1.7959 8.65991L1.7959 6.65991ZM19.1454 8.36702C19.536 7.9765 19.536 7.34333 19.1454 6.95281L12.7815 0.588845C12.3909 0.198321 11.7578 0.198321 11.3673 0.588845C10.9767 0.979369 10.9767 1.61253 11.3673 2.00306L17.0241 7.65991L11.3673 13.3168C10.9767 13.7073 10.9767 14.3405 11.3673 14.731C11.7578 15.1215 12.3909 15.1215 12.7815 14.731L19.1454 8.36702ZM1.7959 8.65991L18.4383 8.65991L18.4383 6.65991L1.7959 6.65991L1.7959 8.65991Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18.4121 6.65991C18.9644 6.65991 19.4121 7.10763 19.4121 7.65991C19.4121 8.2122 18.9644 8.65991 18.4121 8.65991L18.4121 6.65991ZM1.06257 8.36702C0.672051 7.9765 0.67205 7.34333 1.06257 6.95281L7.42654 0.588845C7.81706 0.198321 8.45023 0.198321 8.84075 0.588845C9.23127 0.979369 9.23127 1.61253 8.84075 2.00306L3.1839 7.65991L8.84075 13.3168C9.23127 13.7073 9.23127 14.3405 8.84075 14.731C8.45023 15.1215 7.81706 15.1215 7.42654 14.731L1.06257 8.36702ZM18.4121 8.65991L1.76968 8.65991L1.76968 6.65991L18.4121 6.65991L18.4121 8.65991Z"
                fill="currentColor"
            />
        </svg>
    );
};
