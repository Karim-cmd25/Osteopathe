// src/components/Home.jsx
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recherche pour : ${search}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-extrabold mb-4 max-w-3xl">
          Trouvez votre ostéopathe rapidement et facilement
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Prenez rendez-vous en ligne en quelques clics avec un professionnel de
          confiance.
        </p>

        {/* Formulaire de recherche */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex shadow-lg rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="Entrez votre ville ou spécialité"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-3 text-gray-800 rounded-l-md focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 transition px-6 font-semibold text-gray-900 rounded-r-md"
          >
            Rechercher
          </button>
        </form>
      </section>

      {/* Pourquoi choisir Ostéo Santé */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Pourquoi choisir Ostéo Santé ?
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl font-bold">
              ✓
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Professionnels qualifiés
            </h3>
            <p className="text-gray-600">
              Nos ostéopathes sont certifiés et expérimentés pour vous offrir
              les meilleurs soins.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl font-bold">
              ⏰
            </div>
            <h3 className="font-semibold text-xl mb-2">Disponibilité rapide</h3>
            <p className="text-gray-600">
              Trouvez un rendez-vous en quelques minutes, sans attente.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl font-bold">
              🔒
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Sécurité et confidentialité
            </h3>
            <p className="text-gray-600">
              Vos données sont protégées et votre vie privée respectée.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
