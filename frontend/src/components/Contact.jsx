// Contact.js
export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto text-gray-700">
      <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
      <p className="mb-4">Pour prendre rendez-vous ou poser vos questions :</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <textarea
          placeholder="Votre message"
          className="w-full border border-gray-300 rounded px-3 py-2"
          rows={5}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
