/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/event': {
    /** Getting all the events available to the user */
    get: operations['GET_EVENT'];
  };
  '/user': {};
  '/club': {};
  '/sponsor': {};
  '/discount': {
    /** Get all offers for UADS */
    get: {
      responses: {
        /** Offers successfully received */
        200: unknown;
      };
    };
  };
  '/event/{id}': {
    get: operations['GET_EVENT_ID'];
  };
}

export interface components {
  schemas: {
    /** Data type to store sponsors using the UADS App */
    Sponsor: {
      /** name of sponsor */
      name: string;
      /** clubs affiliated with sponsor */
      club_affil: components['schemas']['Club'][];
    };
    /** Data type to store clubs using the UADS App */
    Club: { [key: string]: unknown };
    /** Data type to store events using the UADS App */
    Event: {
      /** The UUID of the event */
      uuid: string;
      /** The name of the event */
      name: string;
      /** The starting Date of the event */
      date: Date;
      /** The path/url to an event image */
      imagePath?: string;
      /** The maximum number of attendees, (-1 for no cap) */
      attendanceCap: number;
      /** The sponsor(s) of the event */
      sponsor?: components['schemas']['Sponsor'][];
      /** An external url for the event */
      url?: string;
      /** The club(s) hosting the event */
      club: components['schemas']['Club'][];
    };
  };
}

export interface operations {
  /** Getting all the events available to the user */
  GET_EVENT: {
    parameters: {
      query: {
        /** Get event with name */
        name?: string;
      };
    };
    responses: {
      /** Valid request */
      200: {
        content: {
          'application/json': components['schemas']['Event'][];
        };
      };
    };
  };
  GET_EVENT_ID: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** Got the event */
      200: {
        content: {
          'application/json': components['schemas']['Event'];
        };
      };
    };
  };
}

export interface external {}
