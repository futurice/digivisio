/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Event = {
    /**
     * Type of the event
     */
    type?: string;
    /**
     * Event name
     */
    name?: string;
    /**
     * Date
     */
    date?: string;
    /**
     * Method used
     */
    method?: string;
    /**
     * Materials used
     */
    materials?: Array<string>;
    /**
     * Places
     */
    places?: Array<string>;
    /**
     * Actors in the event
     */
    actors?: Array<string>;
    /**
     * Cultural context
     */
    culture?: string;
    /**
     * Event description
     */
    description?: string;
};