import React from 'react';

const ViewLoading = ({ isLoading, error }) => {
  if (isLoading) {
    return <span>Loading……</span>;
  }
  if (error) {
    return <span>页面走丢了</span>;
  }
  return null;
};

export default ViewLoading;
