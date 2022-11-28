//Generate random strings
export function makeId(length: number | undefined = undefined): string {
    let result = "";
    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let characterLength: number | undefined;

    if (!length) characterLength = characters.length;
    else characterLength = length - 1;

    for (var i = 0; i < characterLength!; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length),
        );
    }
    return result;
}
