/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Authors } from './Authors';
import type { AuthorWithRoleAndDate } from './AuthorWithRoleAndDate';
import type { AverageRating } from './AverageRating';
import type { ComponentPart } from './ComponentPart';
import type { Events } from './Events';
import type { Image } from './Image';
import type { OnlineLink } from './OnlineLink';
import type { OtherRecordLink } from './OtherRecordLink';
import type { RecordLink } from './RecordLink';
import type { Subject } from './Subject';
import type { TranslatedField } from './TranslatedField';
import type { Url } from './Url';

export type Record = {
    /**
     * Access restriction notes
     */
    accessRestrictions?: Array<string>;
    /**
     * Alternative titles
     */
    alternativeTitles?: Array<string>;
    /**
     * Deduplicated author information including main, corporate and secondary authors
     */
    authors?: Array<Authors>;
    /**
     * Award notes
     */
    awards?: Array<string>;
    /**
     * Bibliographic level
     */
    bibliographicLevel?: 'Monograph' | 'Serial' | 'MonographPart' | 'SerialPart' | 'Collection' | 'CollectionPart' | 'Unknown';
    /**
     * Bibliography notes
     */
    bibliographyNotes?: Array<string>;
    /**
     * Locations (hierarchical)
     */
    buildings?: Array<TranslatedField>;
    /**
     * Call numbers
     */
    callNumbers?: Array<string>;
    /**
     * Number of child records
     */
    childRecordCount?: number;
    /**
     * Classifications keyed by source (ykl, udk, nlm etc.)
     */
    classifications?: Array<Array<string>>;
    /**
     * First valid DOI
     */
    cleanDoi?: string;
    /**
     * First valid ISBN favoring ISBN-10 over ISBN-13 when possible
     */
    cleanIsbn?: string;
    /**
     * Base portion of the first listed ISSN
     */
    cleanIssn?: string;
    /**
     * First OCLC number
     */
    cleanOclcNumber?: string;
    /**
     * Collections the record belongs to (used in museum material)
     */
    collections?: Array<string>;
    /**
     * End page in the containing item
     */
    containerEndPage?: string;
    /**
     * Issue number of the containing item
     */
    containerIssue?: string;
    /**
     * Reference to the containing item
     */
    containerReference?: string;
    /**
     * Start page in the containing item
     */
    containerStartPage?: string;
    /**
     * Title of the containing item
     */
    containerTitle?: string;
    /**
     * Volume of the containing item
     */
    containerVolume?: string;
    /**
     * Main corporate authors
     */
    corporateAuthors?: Array<string>;
    /**
     * IDs of all records deduplicated with the current record
     */
    dedupIds?: Array<string>;
    /**
     * Dissertation note
     */
    dissertationNote?: string;
    /**
     * Edition
     */
    edition?: string;
    /**
     * Embedded component parts (e.g. pieces of music in a recording) -- requesting this may slow down the response and increase the response size significantly
 * 
     */
    embeddedComponentParts?: Array<ComponentPart>;
    /**
     * Events related to museum (LIDO) material. Events include production, printing photographing, planning and use. The response may include (depending on metadata) names, dates, methods, materials, places, actors, culture and description
 * 
     */
    events?: Events;
    /**
     * Finding aids
     */
    findingAids?: Array<string>;
    /**
     * Formats
     */
    formats?: Array<TranslatedField>;
    /**
     * Full metadata record (typically XML)
     */
    fullRecord?: Array<string>;
    /**
     * General notes
     */
    generalNotes?: Array<string>;
    /**
     * Genres
     */
    genres?: Array<string>;
    /**
     * Geographic center point
     */
    geoCenter?: {
/**
 * Longitude
 */
lon: string;
/**
 * Latitude
 */
lat: string;
};
    /**
     * Geographic locations (e.g. points, bounding boxes) in WKT format
     */
    geoLocations?: Array<string>;
    /**
     * Hierarchical place names concatenated for display
     */
    hierarchicalPlaceNames?: Array<string>;
    /**
     * Parent record IDs for hierarchical records
     */
    hierarchyParentId?: Array<string>;
    /**
     * Parent record titles for hierarchical records
     */
    hierarchyParentTitle?: Array<string>;
    /**
     * Hierarchy top record IDs for hierarchical records
     */
    hierarchyTopId?: Array<string>;
    /**
     * Hierarchy top record titles for hierarchical records
     */
    hierarchyTopTitle?: Array<string>;
    /**
     * Publication dates in human-readable format
     */
    humanReadablePublicationDates?: Array<string>;
    /**
     * Record unique ID (can be used in the record endpoint)
     */
    id?: string;
    /**
     * Record identifier (e.g. inventory ID in museum material) -- not guaranteed to be unique
 * 
     */
    identifierString?: string;
    /**
     * Image rights
     */
    imageRights?: {
/**
 * License type
 */
copyright?: string;
/**
 * Link to license
 */
link?: string;
/**
 * Description text
 */
description?: string;
};
    /**
     * Links to record images without the domain name -- prepend with the correct domain
 * 
     */
    images?: Array<string>;
    /**
     * Record images, their descriptions and rights
 * 
     */
    imagesExtended?: Array<Image>;
    /**
     * Inscriptions
     */
    inscriptions?: Array<string>;
    /**
     * Institutions the record belongs to (see also **buildings**)
     */
    institutions?: Array<TranslatedField>;
    /**
     * ISBNs (see also **cleanIsbn**)
     */
    isbns?: Array<string>;
    /**
     * Whether the record is a collection node in a hierarchy
     */
    isCollection?: boolean;
    /**
     * Whether the record is digitized
     */
    isDigitized?: boolean;
    /**
     * Whether the record is part of an archive series
     */
    isPartOfArchiveSeries?: boolean;
    /**
     * ISSNs (see also **cleanIssn**)
     */
    issns?: Array<string>;
    /**
     * Languages
     */
    languages?: Array<string>;
    /**
     * LCCNs
     */
    lccn?: Array<string>;
    /**
     * manufacturer
     */
    manufacturer?: string;
    /**
     * Physical measurements
     */
    measurements?: Array<string>;
    /**
     * Successor titles
     */
    newerTitles?: Array<string>;
    /**
     * Non-presenter authors
     */
    nonPresenterAuthors?: Array<AuthorWithRoleAndDate>;
    /**
     * OCLC numbers
     */
    oclc?: Array<string>;
    /**
     * Online links
     */
    onlineUrls?: Array<OnlineLink>;
    /**
     * OpenURL
     */
    openUrl?: string;
    /**
     * Original languages (see also **languages**)
     */
    originalLanguages?: Array<string>;
    /**
     * Other links between records
     */
    otherLinks?: Array<OtherRecordLink>;
    /**
     * Physical dimensions etc.
     */
    physicalDescriptions?: Array<string>;
    /**
     * Physical locations (archive material)
     */
    physicalLocations?: Array<string>;
    /**
     * Places of publication
     */
    placesOfPublication?: Array<string>;
    /**
     * Playing times (durations)
     */
    playingTimes?: Array<string>;
    /**
     * Presenters
     */
    presenters?: Array<AuthorWithRoleAndDate>;
    /**
     * Predecessor titles
     */
    previousTitles?: Array<string>;
    /**
     * Primary authors
     */
    primaryAuthors?: Array<string>;
    /**
     * Production credits
     */
    productionCredits?: Array<string>;
    /**
     * Projected (estimated) publication date
     */
    projectedPublicationDate?: string;
    /**
     * Publication dates
     */
    publicationDates?: Array<string>;
    /**
     * End date of publication (continuing publication often marked as 9999)
     */
    publicationEndDate?: string;
    /**
     * Publication frequency
     */
    publicationFrequency?: string;
    /**
     * Publication information
     */
    publicationInfo?: Array<string>;
    /**
     * Publishers
     */
    publishers?: Array<string>;
    rating?: AverageRating;
    /**
     * All data in the index fields
     */
    rawData?: string;
    /**
     * Links to other related records
     */
    recordLinks?: Array<RecordLink>;
    /**
     * Link to the record page in the UI
     */
    recordPage?: string;
    /**
     * Notes describing relationships to other items
     */
    relationshipNotes?: Array<string>;
    /**
     * Secondary authors
     */
    secondaryAuthors?: Array<string>;
    /**
     * Record sector (archive, museum, library and library sector)
     */
    sectors?: Array<TranslatedField>;
    /**
     * Series
     */
    series?: Array<string>;
    /**
     * ID of the record in SFX (only for records from SFX)
     */
    sfxObjectId?: string;
    /**
     * Short title (title excluding any subtitle)
     */
    shortTitle?: string;
    /**
     * Record sources
     */
    source?: Array<TranslatedField>;
    /**
     * Subject actors
     */
    subjectActors?: any;
    /**
     * Detailed subject descriptions
     */
    subjectDetails?: any;
    /**
     * Subject places
     */
    subjectPlaces?: any;
    /**
     * Subject headings as an array from the least specific to the most specific
 * 
     */
    subjects?: Array<string>;
    /**
     * Subject headings with type and source information
     */
    subjectsExtended?: Array<Subject>;
    /**
     * Subtitle
     */
    subTitle?: string;
    /**
     * Summary
     */
    summary?: Array<string>;
    /**
     * Technical details on the represented item
     */
    systemDetails?: Array<string>;
    /**
     * Notes about the target audience
     */
    targetAudienceNotes?: Array<string>;
    /**
     * Title including any subtitle
     */
    title?: string;
    /**
     * Part/section portion of the title
     */
    titleSection?: string;
    /**
     * Statement of responsibility that goes with the title
     */
    titleStatement?: string;
    /**
     * Table of contents
     */
    toc?: Array<string>;
    /**
     * Uniform titles
     */
    uniformTitles?: Array<string>;
    /**
     * Archival unit ID
     */
    unitId?: string;
    /**
     * URLs contained in the record
     */
    urls?: Array<Url>;
    /**
     * Main year (publication, production etc.) -- used also in main_date_str facet
 * 
     */
    year?: string;
};