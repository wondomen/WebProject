export const sortDataByDate = (d) => {
    d.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    })
}