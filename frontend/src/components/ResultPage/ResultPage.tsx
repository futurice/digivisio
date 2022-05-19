import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DefaultService } from '../../utils/apiclient';

const ResultPage = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [learningMaterial, setLearningMaterial] = useState<any>();

  useEffect(() => {
    const getResults = async () => {
      const result = await DefaultService.getLearningMaterialMetadata(id as string);
      setLearningMaterial(result);
    };
    getResults();
  }, [id, setLearningMaterial]);

  return <div>{JSON.stringify(learningMaterial)}</div>;
};

export default ResultPage;
