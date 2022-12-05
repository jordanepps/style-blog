import React from 'react';

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const PublishedDate = ({ publishedAt }) => {
  const d = new Date(publishedAt);
  const publishedMonth = month[d.getMonth()];
  const publishedDay = ('0' + d.getDate()).slice(-2);
  const publishedYear = d.getFullYear().toString().slice(-2);
  return (
    <div className="flex flex-col items-center font-display ml-auto">
      <span className="text-2xl font-medium">{publishedMonth}</span>
      <span className="text-xl -mt-1">{publishedDay}</span>
      <span className="text-lg -mt-1 font-light">{publishedYear}</span>
    </div>
  );
};

export default PublishedDate;
