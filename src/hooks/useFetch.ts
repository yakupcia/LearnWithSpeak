import React from 'react';
import _ from 'lodash';

type IStatus = 'loading' | 'error' | 'success' | 'empty';

interface IUseFetch {
  service: (filter?: any) => Promise<any>;
  filter?: any;
  responseKey?: string;
}

const useFetch = (props: IUseFetch) => {
  const {service, filter, responseKey = 'data'} = props;

  const [data, setData] = React.useState<any[]>([]);
  const [status, setStatus] = React.useState<IStatus>('loading');

  React.useEffect(() => {
    getData();
  }, [filter]);

  const getData = () => {
    if (service) {
      setStatus('loading');
      service(filter)
        .then(res => {
          const d: any = _.get(res, responseKey);
          if (d?.length === 0) setStatus('empty');
          else {
            setStatus('success');
            if (filter?.page != 1) setData([...data, ...d]);
            else setData(d ?? []);
          }
        })
        .catch(() => {
          setStatus('error');
        });
    }
  };

  return {data, status};
};

export default useFetch;
