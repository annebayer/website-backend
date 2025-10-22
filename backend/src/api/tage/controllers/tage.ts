/**
 * tage controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::tage.tage', ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.db.query('api::tage.tage').findMany({
      populate: getPopulateObject(),
    });
    return entries;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entry = await strapi.db.query('api::tage.tage').findOne({
      where: { id: Number(id) },
      populate: getPopulateObject(),
    });
    return entry;
  },
}));

/**
 * Hilfsfunktion: Gibt das vollständige Populate-Objekt zurück
 */
function getPopulateObject() {
  return {
    TeaserBild: true, // Media-Feld auf Top-Level
    description: true, // Blocks
    pictures: {       // Dynamiczone
      populate: {
        'shared.ausfluege': {    // Component "Ausfluege"
          populate: {
            Bilder: {             // Component "Bilder mit Text"
              populate: { Bilder: true }
            },
            tip: {                // Component "Tip"
              populate: { Bild: true }
            }
          }
        },
        'shared.bilder-mit-text': { populate: { Bilder: true } }, // Direkt verwendete Bilder-mit-Text
        'shared.tip': { populate: { Bild: true } }                 // Direkt verwendete Tip-Komponente
      }
    }
  };
}
