// Renvoie la langue de la landing page selon le pays détecté par Vercel.
// Aucune donnée n'est stockée : seul le code pays de l'entrée est lu.
export const config = { runtime: 'edge' };

const SUPPORTED = ['fr', 'en', 'es', 'pt', 'ar'];

const BY_COUNTRY = {
  // Français
  FR:'fr', BE:'fr', LU:'fr', MC:'fr', CH:'fr', SN:'fr', CI:'fr', CM:'fr', MG:'fr', CD:'fr', CG:'fr', GA:'fr', BF:'fr', ML:'fr', NE:'fr', TG:'fr', BJ:'fr', HT:'fr',
  // Espagnol
  ES:'es', MX:'es', AR:'es', CO:'es', CL:'es', PE:'es', VE:'es', EC:'es', GT:'es', CU:'es', BO:'es', DO:'es', HN:'es', PY:'es', SV:'es', NI:'es', CR:'es', PA:'es', UY:'es', PR:'es', GQ:'es',
  // Portugais
  PT:'pt', BR:'pt', AO:'pt', MZ:'pt', CV:'pt', GW:'pt', ST:'pt', TL:'pt',
  // Arabe
  SA:'ar', AE:'ar', QA:'ar', KW:'ar', BH:'ar', OM:'ar', YE:'ar', JO:'ar', LB:'ar', SY:'ar', IQ:'ar', PS:'ar', EG:'ar', LY:'ar', TN:'ar', DZ:'ar', MA:'ar', MR:'ar', SD:'ar', DJ:'ar', KM:'ar',
  // Anglais
  US:'en', GB:'en', IE:'en', AU:'en', NZ:'en', ZA:'en', IN:'en', SG:'en', PH:'en', NG:'en', KE:'en', GH:'en', JM:'en', TT:'en', BS:'en', BB:'en', MT:'en'
};

export default function handler(request) {
  const country = (request.headers.get('x-vercel-ip-country') || '').toUpperCase();
  const lang = BY_COUNTRY[country] && SUPPORTED.includes(BY_COUNTRY[country]) ? BY_COUNTRY[country] : null;
  return new Response(JSON.stringify({ lang }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'private, no-store',
    },
  });
}
