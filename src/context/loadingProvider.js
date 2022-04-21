import React, { useState } from 'react';
import LoadingContext from './loadingContext';

export function LoadingProvider(props) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading: loading,
        show: () => setLoading(true),
        hide: () => setLoading(false)
      }}>
      {props.children}
    </LoadingContext.Provider>
  );
}
