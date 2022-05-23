/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LearningMaterialsController } from './../controllers/LearningMaterialsController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SearchController } from './../controllers/searchController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SearchHistoryController } from './../controllers/searchHistoryController';
import { expressAuthentication } from './../middlewares/authenticationMiddleware';
// @ts-ignore - no great way to install types from subpackage
const promiseAny = require('promise.any');
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "DisplayName": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"en":{"dataType":"string","required":true},"sv":{"dataType":"string","required":true},"fi":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LearningMaterialFile": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"displayName":{"ref":"DisplayName","required":true},"pdfkey":{"dataType":"string","required":true},"publishedat":{"dataType":"datetime","required":true},"filebucket":{"dataType":"string","required":true},"filekey":{"dataType":"string","required":true},"format":{"dataType":"string","required":true},"mimetype":{"dataType":"string","required":true},"filesize":{"dataType":"double","required":true},"originalfilename":{"dataType":"string","required":true},"filepath":{"dataType":"string","required":true},"priority":{"dataType":"double","required":true},"link":{"dataType":"string","required":true},"language":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Name": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"educationalmaterialid":{"dataType":"string","required":true},"slug":{"dataType":"string","required":true},"language":{"dataType":"string","required":true},"materialname":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Author": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"organizationkey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"organization":{"dataType":"string","required":true},"authorname":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Publisher": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"publisherkey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Description": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"educationalmaterialid":{"dataType":"string","required":true},"language":{"dataType":"string","required":true},"description":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Keyword": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"keywordkey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"value":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LearningResourceType": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"learningresourcetypekey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"value":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TypicalAgeRange": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"typicalAgeRangeMax":{"dataType":"double","required":true},"typicalAgeRangeMin":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EducationalAlignment": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"targeturl":{"dataType":"string","required":true},"objectkey":{"dataType":"string","required":true},"educationalframework":{"dataType":"string","required":true},"source":{"dataType":"string","required":true},"targetname":{"dataType":"string","required":true},"alignmenttype":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EducationalLevel": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"educationallevelkey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"value":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EducationalUse": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"educationalusekey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"value":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AccessibilityFeature": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"accessibilityfeaturekey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"value":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AccessibilityHazard": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"accessibilityhazardkey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"value":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "License": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"key":{"dataType":"string","required":true},"value":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IsBasedOnAuthor": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"isbasedonid":{"dataType":"string","required":true},"authorname":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IsBasedOn": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"educationalmaterialid":{"dataType":"string","required":true},"materialname":{"dataType":"string","required":true},"url":{"dataType":"string","required":true},"author":{"dataType":"array","array":{"dataType":"refAlias","ref":"IsBasedOnAuthor"},"required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EducationalRole": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"educationalrolekey":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"educationalrole":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Thumbnail": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"filebucket":{"dataType":"string","required":true},"filekey":{"dataType":"string","required":true},"obsoleted":{"dataType":"double","required":true},"filename":{"dataType":"string","required":true},"educationalmaterialid":{"dataType":"string","required":true},"mimetype":{"dataType":"string","required":true},"filepath":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Attachment": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"materialid":{"dataType":"string","required":true},"srclang":{"dataType":"string","required":true},"label":{"dataType":"string","required":true},"kind":{"dataType":"string","required":true},"defaultfile":{"dataType":"boolean","required":true},"filebucket":{"dataType":"string","required":true},"filekey":{"dataType":"string","required":true},"format":{"dataType":"string","required":true},"mimetype":{"dataType":"string","required":true},"filesize":{"dataType":"double","required":true},"originalfilename":{"dataType":"string","required":true},"filepath":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Version": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"publishedat":{"dataType":"datetime","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AoeLearningMaterialResponseModel": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"urn":{"dataType":"any"},"hasDownloadableFiles":{"dataType":"boolean","required":true},"versions":{"dataType":"array","array":{"dataType":"refAlias","ref":"Version"},"required":true},"attachments":{"dataType":"array","array":{"dataType":"refAlias","ref":"Attachment"},"required":true},"thumbnail":{"ref":"Thumbnail","required":true},"educationalRoles":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalRole"},"required":true},"isBasedOn":{"dataType":"array","array":{"dataType":"refAlias","ref":"IsBasedOn"},"required":true},"license":{"ref":"License","required":true},"accessibilityHazards":{"dataType":"array","array":{"dataType":"refAlias","ref":"AccessibilityHazard"},"required":true},"accessibilityFeatures":{"dataType":"array","array":{"dataType":"refAlias","ref":"AccessibilityFeature"},"required":true},"educationalUses":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalUse"},"required":true},"educationalLevels":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalLevel"},"required":true},"educationalAlignment":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalAlignment"},"required":true},"typicalAgeRange":{"ref":"TypicalAgeRange","required":true},"expires":{"dataType":"datetime","required":true},"timeRequired":{"dataType":"string","required":true},"learningResourceTypes":{"dataType":"array","array":{"dataType":"refAlias","ref":"LearningResourceType"},"required":true},"keywords":{"dataType":"array","array":{"dataType":"refAlias","ref":"Keyword"},"required":true},"description":{"dataType":"array","array":{"dataType":"refAlias","ref":"Description"},"required":true},"publisher":{"dataType":"array","array":{"dataType":"refAlias","ref":"Publisher"},"required":true},"author":{"dataType":"array","array":{"dataType":"refAlias","ref":"Author"},"required":true},"downloadCounter":{"dataType":"string","required":true},"viewCounter":{"dataType":"string","required":true},"ratingVisualAverage":{"dataType":"any"},"ratingContentAverage":{"dataType":"any"},"suitsAllUpperSecondarySubjectsNew":{"dataType":"boolean","required":true},"suitsAllBranches":{"dataType":"boolean","required":true},"suitsAllSelfMotivatedSubjects":{"dataType":"boolean","required":true},"suitsAllVocationalDegrees":{"dataType":"boolean","required":true},"suitsAllUpperSecondarySubjects":{"dataType":"boolean","required":true},"suitsAllBasicStudySubjects":{"dataType":"boolean","required":true},"suitsAllPrePrimarySubjects":{"dataType":"boolean","required":true},"suitsAllEarlyChildhoodSubjects":{"dataType":"boolean","required":true},"archivedAt":{"dataType":"datetime","required":true},"publishedAt":{"dataType":"datetime","required":true},"updatedAt":{"dataType":"datetime","required":true},"createdAt":{"dataType":"datetime","required":true},"name":{"dataType":"array","array":{"dataType":"refAlias","ref":"Name"},"required":true},"owner":{"dataType":"boolean","required":true},"materials":{"dataType":"array","array":{"dataType":"refAlias","ref":"LearningMaterialFile"},"required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OpenUniversityCourseModel": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"credits":{"dataType":"string","required":true},"subjects":{"dataType":"array","array":{"dataType":"string"},"required":true},"universityNames":{"dataType":"array","array":{"dataType":"string"},"required":true},"url":{"dataType":"string","required":true},"name":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LearningMaterialModel": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"AoeLearningMaterialResponseModel"},{"dataType":"nestedObjectLiteral","nestedProperties":{"relatedCourses":{"dataType":"array","array":{"dataType":"refAlias","ref":"OpenUniversityCourseModel"}}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MaterialName": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"language":{"dataType":"string","required":true},"materialname":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EducationalSubject": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"string","required":true},"source":{"dataType":"string","required":true},"key":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TeachingObjective": {
        "dataType": "refObject",
        "properties": {
            "key": {"dataType":"string","required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchResult": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"accessibilityHazards":{"dataType":"array","array":{"dataType":"refAlias","ref":"AccessibilityHazard"},"required":true},"accessibilityFeatures":{"dataType":"array","array":{"dataType":"refAlias","ref":"AccessibilityFeature"},"required":true},"educationalUses":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalUse"},"required":true},"popularity":{"dataType":"double","required":true},"thumbnail":{"ref":"Thumbnail","required":true},"hasDownloadableFiles":{"dataType":"boolean","required":true},"teaches":{"dataType":"array","array":{"dataType":"refObject","ref":"TeachingObjective"},"required":true},"educationalSubjects":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalSubject"},"required":true},"languages":{"dataType":"array","array":{"dataType":"string"},"required":true},"keywords":{"dataType":"array","array":{"dataType":"refAlias","ref":"Keyword"},"required":true},"educationalRoles":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalRole"},"required":true},"educationalLevels":{"dataType":"array","array":{"dataType":"refAlias","ref":"EducationalLevel"},"required":true},"license":{"ref":"License","required":true},"learningResourceTypes":{"dataType":"array","array":{"dataType":"refAlias","ref":"LearningResourceType"},"required":true},"authors":{"dataType":"array","array":{"dataType":"refAlias","ref":"Author"},"required":true},"description":{"dataType":"array","array":{"dataType":"refAlias","ref":"Description"},"required":true},"materialName":{"dataType":"array","array":{"dataType":"refAlias","ref":"MaterialName"},"required":true},"updatedAt":{"dataType":"datetime","required":true},"publishedAt":{"dataType":"datetime","required":true},"createdAt":{"dataType":"datetime","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchResponseModel": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"results":{"dataType":"array","array":{"dataType":"refAlias","ref":"SearchResult"},"required":true},"hits":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Filters": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"teaches":{"dataType":"array","array":{"dataType":"string"}},"organizations":{"dataType":"array","array":{"dataType":"string"}},"licenses":{"dataType":"array","array":{"dataType":"string"}},"learningResourceTypes":{"dataType":"array","array":{"dataType":"string"}},"languages":{"dataType":"array","array":{"dataType":"string"}},"keywords":{"dataType":"array","array":{"dataType":"string"}},"educationalUses":{"dataType":"array","array":{"dataType":"string"}},"educationalSubjects":{"dataType":"array","array":{"dataType":"string"}},"educationalRoles":{"dataType":"array","array":{"dataType":"string"}},"educationalLevels":{"dataType":"array","array":{"dataType":"string"}},"authors":{"dataType":"array","array":{"dataType":"string"}},"accessibilityHazards":{"dataType":"array","array":{"dataType":"string"}},"accessibilityFeatures":{"dataType":"array","array":{"dataType":"string"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchPostModel": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"sort":{"dataType":"string"},"size":{"dataType":"double"},"keywords":{"dataType":"string"},"from":{"dataType":"double"},"filters":{"ref":"Filters"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchHistoryRowModel": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"search_term":{"dataType":"string","required":true},"user_id":{"dataType":"string","required":true},"date_saved":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/api/materials/:materialId',
            authenticateMiddleware([{"fake_user_id":[]}]),
            ...(fetchMiddlewares<RequestHandler>(LearningMaterialsController)),
            ...(fetchMiddlewares<RequestHandler>(LearningMaterialsController.prototype.getLearningMaterialMetadata)),

            function LearningMaterialsController_getLearningMaterialMetadata(request: any, response: any, next: any) {
            const args = {
                    materialId: {"in":"path","name":"materialId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new LearningMaterialsController();


              const promise = controller.getLearningMaterialMetadata.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/search',
            authenticateMiddleware([{"fake_user_id":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SearchController)),
            ...(fetchMiddlewares<RequestHandler>(SearchController.prototype.getRandom)),

            function SearchController_getRandom(request: any, response: any, next: any) {
            const args = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SearchController();


              const promise = controller.getRandom.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/search',
            authenticateMiddleware([{"fake_user_id":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SearchController)),
            ...(fetchMiddlewares<RequestHandler>(SearchController.prototype.search)),

            function SearchController_search(request: any, response: any, next: any) {
            const args = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    searchData: {"in":"body","name":"searchData","required":true,"ref":"SearchPostModel"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SearchController();


              const promise = controller.search.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/searchhistory',
            authenticateMiddleware([{"fake_user_id":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SearchHistoryController)),
            ...(fetchMiddlewares<RequestHandler>(SearchHistoryController.prototype.getSearchHistory)),

            function SearchHistoryController_getSearchHistory(request: any, response: any, next: any) {
            const args = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SearchHistoryController();


              const promise = controller.getSearchHistory.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, _response: any, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthentication(request, name, secMethod[name])
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthentication(request, name, secMethod[name])
                                .catch(pushAndRethrow)
                        );
                    }
                }
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            try {
                request['user'] = await promiseAny(secMethodOrPromises);
                next();
            }
            catch(err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                next(error);
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
