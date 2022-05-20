import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DefaultService } from '../../utils/apiclient';
import { LearningMaterialModel } from '../../utils/apiclient/models/LearningMaterialModel';

const ResultPage = () => {
  const { id } = useParams();
  const [learningMaterial, setLearningMaterial] = useState<LearningMaterialModel>();

  useEffect(() => {
    const getResults = async () => {
      const result = await DefaultService.getLearningMaterialMetadata(id as string);
      setLearningMaterial(result);
    };
    getResults();
  }, [id, setLearningMaterial]);

  const getResultFields = (result: LearningMaterialModel, lang = 'fi') => ({
    id: result.id,
    name: result.name.find((entry) => entry.language === lang)?.materialname,
    description: result.description.find((entry) => entry.language === lang)?.description,
    license: result.license,
  });

  const result = learningMaterial ? getResultFields(learningMaterial) : undefined;

  return result ? (
    <div key={`${result.name}-${Math.random()}`}>
      <div>{result.name}</div>
      <p>{result.description}</p>
      <iframe title={`${result.name}`} src={`https://aoe.fi/#/embed/${result.id}/fi`} width="720" height="360" />
      <div>Lisenssi {result.license.value}</div>
    </div>
  ) : (
    <div />
  );
};

export default ResultPage;
