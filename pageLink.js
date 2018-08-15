function test(currentPage) {
  const pageAmount = 5;
  const state = 'MO';
  const params = { city: 'saint-louis' };

  let paginationLinks = '';
  if (currentPage > 1)
    paginationLinks += `<link rel=“prev” href=“https://www.healthgrades.com/group-directory/${state}/${
      params.city
    }-${currentPage - 1}” />`;
  if (currentPage < pageAmount)
    paginationLinks += `<link rel="next" href="https://www.healthgrades.com/group-directory/${state}/${
      params.city
    }-${currentPage + 1}" />`;
  return paginationLinks;
}

console.log('Old 1', test(1));
console.log('Old 2', test(2));
console.log('Old 5', test(5));

/**
 * Andy's Experiment
 */
const state = 'MO';
const params = { city: 'saint-louis' };
const pageAmount = 5;

const stringBuilder = (rel, page) =>
  `<link rel=“${rel}” href=“https://www.healthgrades.com/group-directory/${state}/${
    params.city
  }-${page}” />`;

function retry(currentPage) {
  const afterFirstPage = currentPage > 1 ? stringBuilder('prev', currentPage - 1) : '';
  const beforeLastPage = currentPage < pageAmount ? stringBuilder('next', currentPage + 1) : '';
  return [afterFirstPage, beforeLastPage].join('');
}
console.log('New 1', retry(1));
console.log('New 2', retry(2));
console.log('New 5', retry(5));
