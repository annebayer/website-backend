import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAusfluege extends Struct.ComponentSchema {
  collectionName: 'components_shared_ausflueges';
  info: {
    displayName: 'Ausfluege';
  };
  attributes: {
    Bilder: Schema.Attribute.Component<'shared.bilder-mit-text', true>;
    description: Schema.Attribute.RichText;
    tip: Schema.Attribute.Component<'shared.tip', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBilderMitText extends Struct.ComponentSchema {
  collectionName: 'components_shared_bilder_mit_texts';
  info: {
    displayName: 'Bilder mit Text';
  };
  attributes: {
    Beschreibung: Schema.Attribute.String;
    Bilder: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedFrageAntwort extends Struct.ComponentSchema {
  collectionName: 'components_shared_frage_antwort_s';
  info: {
    displayName: 'Frage Antwort ';
  };
  attributes: {
    Antwort: Schema.Attribute.String & Schema.Attribute.Required;
    AntwortBild: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    AntwortLang: Schema.Attribute.Text;
    Frage: Schema.Attribute.String & Schema.Attribute.Required;
    FrageBild: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'MapOrt';
  };
  attributes: {
    hoverTitle: Schema.Attribute.String & Schema.Attribute.Required;
    Koordinate: Schema.Attribute.Component<'shared.map-koordinaten', false>;
    Sign: Schema.Attribute.Component<'shared.map-sign', false> &
      Schema.Attribute.Required;
    tages: Schema.Attribute.Relation<'oneToMany', 'api::tage.tage'>;
  };
}

export interface SharedMapKoordinaten extends Struct.ComponentSchema {
  collectionName: 'components_shared_map_koordinatens';
  info: {
    displayName: 'MapKoordinaten';
  };
  attributes: {
    KoordinatenZusammen: Schema.Attribute.String;
    x: Schema.Attribute.Decimal;
    y: Schema.Attribute.Decimal;
  };
}

export interface SharedMapRoute extends Struct.ComponentSchema {
  collectionName: 'components_shared_map_routes';
  info: {
    displayName: 'MapRoute';
  };
  attributes: {
    Koordinaten: Schema.Attribute.Component<'shared.map-koordinaten', true>;
    MapRouteArt: Schema.Attribute.Component<'shared.map-strichart', false>;
    Nach: Schema.Attribute.String;
    Von: Schema.Attribute.String;
  };
}

export interface SharedMapSign extends Struct.ComponentSchema {
  collectionName: 'components_shared_map_signs';
  info: {
    displayName: 'MapSign';
  };
  attributes: {
    Art: Schema.Attribute.Enumeration<
      ['Wandern', 'Sehensw\u00FCrdigkeit', 'Essen', 'Parken', 'Hobbit']
    >;
  };
}

export interface SharedMapStrichart extends Struct.ComponentSchema {
  collectionName: 'components_shared_map_stricharts';
  info: {
    displayName: 'MapStrichart';
  };
  attributes: {
    Art: Schema.Attribute.Enumeration<
      ['Gestrichelt', 'Durchgezogen', 'Gepunktet']
    >;
  };
}

export interface SharedTip extends Struct.ComponentSchema {
  collectionName: 'components_shared_tips';
  info: {
    displayName: 'Tip';
  };
  attributes: {
    Bild: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Icon: Schema.Attribute.Enumeration<
      ['Ausrufezeichen', 'Fragezeichen', 'Smiley']
    >;
    Text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.ausfluege': SharedAusfluege;
      'shared.bilder-mit-text': SharedBilderMitText;
      'shared.frage-antwort': SharedFrageAntwort;
      'shared.map': SharedMap;
      'shared.map-koordinaten': SharedMapKoordinaten;
      'shared.map-route': SharedMapRoute;
      'shared.map-sign': SharedMapSign;
      'shared.map-strichart': SharedMapStrichart;
      'shared.tip': SharedTip;
    }
  }
}
