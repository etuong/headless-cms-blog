export const getDateFromISO = (isoTimestamp) => {
    return new Date(isoTimestamp).toLocaleString().split(',')[0]
}