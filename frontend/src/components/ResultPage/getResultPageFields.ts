import { LearningMaterialModel } from '../../utils/apiclient';

const getResultPageFields = (result: LearningMaterialModel, lang = 'fi') => ({
  author: result.author.map(({ authorname, organization }) =>
    [authorname, organization].filter((element) => element.length > 0).join(', '),
  ),
  description: result.description.find((entry) => entry.language === lang)?.description,
  downloadCounter: result.downloadCounter,
  hasDownloadableFiles: result.hasDownloadableFiles,
  license: result.license,
  id: result.id,
  keywords: result.keywords.map(({ value }) => value),
  name: result.name.find((entry) => entry.language === lang)?.materialname,
  publishedAt: result.publishedAt,
  relatedCourses: result.relatedCourses,
  updatedAt: result.updatedAt,
  viewCounter: result.viewCounter,
});

export default getResultPageFields;
