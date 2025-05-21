// Services.js
export default function Services() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-blue-50 rounded-lg shadow p-6 text-center">
        <h3 className="text-xl font-semibold mb-3 text-blue-600">
          Consultations
        </h3>
        <p>
          Séances d’ostéopathie adaptées à tous les âges et besoins spécifiques.
        </p>
      </div>
      <div className="bg-blue-50 rounded-lg shadow p-6 text-center">
        <h3 className="text-xl font-semibold mb-3 text-blue-600">
          Soins Sportifs
        </h3>
        <p>
          Prévention et traitement des blessures liées à la pratique sportive.
        </p>
      </div>
      <div className="bg-blue-50 rounded-lg shadow p-6 text-center">
        <h3 className="text-xl font-semibold mb-3 text-blue-600">
          Suivi Personnalisé
        </h3>
        <p>
          Accompagnement sur le long terme pour un équilibre global du corps.
        </p>
      </div>
    </div>
  );
}
